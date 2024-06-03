import React, { useState, useEffect, useRef, useCallback } from "react";
import { AnimationProps } from "./types";
import clsx from "clsx";

const TEAnimation: React.FC<AnimationProps> = ({
  tag: Tag = "div",
  className,
  children,
  animation,
  reset,
  start = "onClick",
  repeat = false,
  delay,
  reverse,
  interval,
  toggle = null,
  offset = 0,
  repeatOnScroll,
  showOnLoad,
  animationRef,
  beginHidden,
  onStart,
  onEnd,
  onShow,
  onHide,
  ...props
}) => {
  const [toggleAnimation, setToggleAnimation] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const isFirstRender = useRef(true);
  const isAnimationing = useRef(false);
  const animationInnerRef = useRef(null);
  const timeoutToggleRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const timeoutIntervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const timeoutScrollRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const timeoutOnLoadRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const timeoutShowOnLoadRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const classes = clsx(toggleAnimation && `animate-${animation}`, className);

  const animationReference = animationRef ? animationRef : animationInnerRef;

  const addEvent = (
    eventElement: HTMLElement | Window,
    event: string,
    listener: () => void
  ) => {
    eventElement.addEventListener(event, listener);
  };

  const removeEvent = (
    eventElement: HTMLElement | Window,
    event: string,
    listener: () => void
  ) => {
    eventElement.removeEventListener(event, listener);
  };

  const eventTypes = {
    onHover: "mouseover",
    onClick: "click",
    onScroll: "scroll",
  };

  const handleToggleAnimation = useCallback(() => {
    if (isAnimationing.current && start !== "manually") {
      return;
    }
    beginHidden && setIsVisible(true);
    isAnimationing.current = true;

    if (start === "onScroll") {
      onShow?.();
    } else {
      onStart?.();
    }

    if (delay) {
      if (timeoutToggleRef.current !== null) {
        clearTimeout(timeoutToggleRef.current);
      }

      timeoutToggleRef.current = setTimeout(() => {
        setToggleAnimation((prevToggleAnimation) => !prevToggleAnimation);
      }, delay);
    } else {
      setToggleAnimation((prevToggleAnimation) => !prevToggleAnimation);
    }
  }, [start, delay, beginHidden]);

  const removeEventListeners = useCallback(() => {
    if (
      toggleAnimation &&
      start !== "manually" &&
      !repeatOnScroll &&
      (!reset || interval)
    ) {
      const element = animationReference.current;

      switch (start) {
        case "onHover":
        case "onClick":
          removeEvent(element, eventTypes[start], handleToggleAnimation);
          break;
        case "onScroll":
          removeEvent(window, eventTypes[start], handleAnimationOnScroll);
          break;
        default:
          break;
      }

      if (delay || (!reverse && !interval)) {
        animationReference.current.removeEventListener(
          "animationend",
          handleAnimationEnd
        );
      }

      if (reverse && !reset) {
        animationReference.current.removeEventListener(
          "animationend",
          handleAnimationEnd
        );
      }
    }
  }, [
    toggleAnimation,
    start,
    reset,
    reverse,
    interval,
    repeatOnScroll,
    delay,
    animationReference,
  ]);

  const handleAnimationEnd = useCallback(() => {
    if (!isAnimationing.current) {
      return;
    }
    setToggleAnimation((prevToggleAnimation) => !prevToggleAnimation);

    if (start === "onScroll") {
      onHide?.();
    } else {
      onEnd?.();
    }

    if (start !== "onScroll") {
      isAnimationing.current = false;
    }

    if (interval) {
      if (timeoutIntervalRef.current !== null) {
        clearTimeout(timeoutIntervalRef.current);
      }

      timeoutIntervalRef.current = setInterval(() => {
        setToggleAnimation((prevToggleAnimation) => !prevToggleAnimation);
        onStart?.();
      }, interval);
    }

    removeEventListeners();
  }, [start, interval, removeEventListeners]);

  const handleAnimationOnScroll = useCallback(() => {
    if (!animationReference.current) {
      return;
    }

    const element = animationReference.current;
    const rect = element.getBoundingClientRect();
    const elementOffsetTop = rect.top + document.body.scrollTop + offset;
    const elementHeight = element.offsetHeight;
    const windowHeight = window.innerHeight;

    const shouldStartAnimation =
      elementOffsetTop <= windowHeight && elementOffsetTop + elementHeight >= 0;

    if (shouldStartAnimation && !isVisible) {
      if (delay) {
        if (timeoutScrollRef.current !== null) {
          clearTimeout(timeoutScrollRef.current);
        }

        timeoutScrollRef.current = setTimeout(() => {
          setIsVisible(true);
        }, delay);
      } else {
        setIsVisible(true);
      }

      handleToggleAnimation();
    } else if (!shouldStartAnimation && repeatOnScroll) {
      setIsVisible(false);
      isAnimationing.current = false;
    }
  }, [offset, repeatOnScroll, animationReference, isVisible, delay]);

  useEffect(() => {
    const element = animationReference.current;

    switch (start) {
      case "onHover":
      case "onClick":
        addEvent(element, eventTypes[start], handleToggleAnimation);
        break;
      case "onScroll":
        addEvent(window, eventTypes[start], handleAnimationOnScroll);
        break;
      case "onLoad":
        if (timeoutOnLoadRef.current !== null) {
          clearTimeout(timeoutOnLoadRef.current);
        }

        if (delay) {
          timeoutOnLoadRef.current = setTimeout(() => {
            setToggleAnimation(true);
          }, delay);
        } else {
          setToggleAnimation(true);
        }
        break;
      default:
        break;
    }

    return () => {
      switch (start) {
        case "onHover":
        case "onClick":
          removeEvent(element, eventTypes[start], handleToggleAnimation);
          break;
        case "onScroll":
          if (showOnLoad) {
            if (timeoutShowOnLoadRef.current !== null) {
              clearTimeout(timeoutShowOnLoadRef.current);
            }

            if (delay) {
              timeoutShowOnLoadRef.current = setTimeout(() => {
                setIsVisible(true);
              }, delay);
            } else {
              setIsVisible(true);
            }
            handleToggleAnimation();
          }
          removeEvent(window, eventTypes[start], handleAnimationOnScroll);
          break;
        case "onLoad":
          setToggleAnimation(false);
          onStart?.();
          isAnimationing.current = true;
          break;
        default:
          break;
      }
    };
  }, [animationReference, start, delay, showOnLoad]);

  useEffect(() => {
    const element = animationReference.current;

    element.addEventListener("animationend", handleAnimationEnd);

    return () => {
      element.removeEventListener("animationend", handleAnimationEnd);
    };
  }, [animationReference, handleAnimationEnd]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (toggle !== null && start === "manually") {
      toggle ? handleToggleAnimation() : handleAnimationEnd();
    }
  }, [start, toggle]);

  useEffect(() => {
    return () =>
      clearTimeout(timeoutIntervalRef.current as ReturnType<typeof setTimeout>);
  }, []);

  return (
    <Tag
      className={classes}
      ref={animationReference}
      style={{
        animationIterationCount: !interval
          ? repeat === true
            ? "infinite"
            : reverse
            ? "2"
            : repeat
          : null,
        animationDirection: reverse ? "alternate" : null,
        visibility:
          start === "onScroll" || beginHidden
            ? isVisible
              ? "visible"
              : "hidden"
            : null,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default TEAnimation;
