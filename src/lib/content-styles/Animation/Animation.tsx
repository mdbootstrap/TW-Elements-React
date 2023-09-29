/*
--------------------------------------------------------------------------
Tailwind Elements React is an open-source UI kit of advanced components for TailwindCSS.
Copyright © 2023 MDBootstrap.com

Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
--------------------------------------------------------------------------
*/

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
  onStart,
  onEnd,
  onShow,
  onHide,
  ...props
}) => {
  const [toggleAnimation, setToggleAnimation] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const initialRender = useRef(0);
  const isAnimationing = useRef(false);

  const animationInnerRef = useRef(null);
  const classes = clsx(toggleAnimation && `animate-${animation}`, className);

  const animationReference = animationRef ? animationRef : animationInnerRef;

  const handleToggleAnimation = useCallback(() => {
    if (isAnimationing.current && start !== "manually") {
      return;
    }
    isAnimationing.current = true;

    if (start === "onScroll") {
      onShow?.();
    } else {
      onStart?.();
    }

    if (delay) {
      setTimeout(() => {
        setToggleAnimation((prevToggleAnimation) => !prevToggleAnimation);
      }, delay);
    } else {
      setToggleAnimation((prevToggleAnimation) => !prevToggleAnimation);
    }
  }, [start, delay]);

  const removeEventListeners = useCallback(() => {
    if (
      toggleAnimation &&
      start !== "manually" &&
      !repeatOnScroll &&
      (!reset || interval)
    ) {
      if (start === "onHover") {
        animationReference.current.removeEventListener(
          "mouseover",
          handleToggleAnimation
        );
      } else if (start === "onClick") {
        animationReference.current.removeEventListener(
          "click",
          handleToggleAnimation
        );
      } else if (start === "onScroll") {
        window.removeEventListener("scroll", handleAnimationOnScroll);
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
      setTimeout(() => {
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
        setTimeout(() => {
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

    if (start === "manually") {
      return;
    }

    if (start === "onHover") {
      element.addEventListener("mouseover", handleToggleAnimation);
    }

    if (start === "onClick") {
      element.addEventListener("click", handleToggleAnimation);
    }

    if (start === "onLoad") {
      if (delay) {
        setTimeout(() => {
          setToggleAnimation(true);
        }, delay);
      } else {
        setToggleAnimation(true);
      }
    }

    if (start === "onScroll") {
      window.addEventListener("scroll", handleAnimationOnScroll);
    }

    return () => {
      if (start === "onHover") {
        element.removeEventListener("mouseover", handleToggleAnimation);
      }

      if (start === "onClick") {
        element.removeEventListener("click", handleToggleAnimation);
      }

      if (start === "onLoad") {
        setToggleAnimation(false);
        onStart?.();
        isAnimationing.current = true;
      }

      if (start === "onScroll") {
        if (showOnLoad) {
          if (delay) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          } else {
            setIsVisible(true);
          }
          handleToggleAnimation();
        }
        window.removeEventListener("scroll", handleAnimationOnScroll);
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
    if (initialRender.current < 2) {
      initialRender.current += 1;
      return;
    }

    if (toggle !== null && start === "manually") {
      isAnimationing.current = true;
      toggle ? handleToggleAnimation() : handleAnimationEnd();
    }
  }, [start, toggle]);

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
          start === "onScroll" ? (isVisible ? "visible" : "hidden") : null,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default TEAnimation;
