/*
--------------------------------------------------------------------------
TW Elements React is an open-source UI kit of advanced components for TailwindCSS.
Copyright © 2023 MDBootstrap.com

Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
--------------------------------------------------------------------------
*/

import React, { useState, useRef, useEffect, useCallback } from "react";
import type { CarouselProps } from "./types";
import { forceReflow, isVisible } from "./utils";
import { CarouselContext } from "./context/CarouselContext";
import CarouselTheme from "./carouselTheme";
import clsx from "clsx";

const TECarousel: React.FC<CarouselProps> = ({
  tag: Tag = "div",
  className,
  children,
  interval = 5000,
  ride = false,
  keyboard = true,
  pause = "hover",
  wrap = true,
  touch = true,
  stopSliding,
  showControls,
  showIndicators,
  prevBtnIcon,
  nextBtnIcon,
  current,
  crossfade,
  onSlide,
  onSlid,
  theme: customTheme,
  ...props
}): JSX.Element => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [transitionDuration, setTransitionDuration] = useState(0);
  const [visibilityState, setVisibilityState] = useState(
    document.visibilityState
  );
  const [clientTouch, setClientTouch] = useState({ initialX: 0, initialY: 0 });
  const [carouselItems, setCarouselItems] = useState<HTMLElement[]>([]);

  const carouselRef = useRef<HTMLElement>(null);
  const prevIndex = useRef(0);
  const isFirstRender = useRef(true);
  const isTransitioning = useRef(false);
  const isFirstSlide = useRef(true);
  const visibilityChangeRef = useRef(false);
  const hasMouseEnteredCarousel = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const theme = {
    ...CarouselTheme,
    ...customTheme,
  };

  const classes = clsx(
    theme.carouselWrapper,
    touch && theme.pointer,
    className
  );

  const getNextElement = (direction: "prev" | "next", index?: number) => {
    if (index !== undefined) {
      return carouselItems[index];
    }

    const isPrev = direction === "prev";
    const activeIndex = prevIndex.current;
    const delta = isPrev ? -1 : 1;
    let itemIndex = activeIndex;

    if (wrap) {
      itemIndex = (activeIndex + delta) % carouselItems.length;
    } else {
      if (
        (itemIndex === carouselItems.length - 1 && direction === "next") ||
        (itemIndex === 0 && direction === "prev")
      ) {
        return;
      }

      itemIndex += delta;
    }

    return itemIndex === -1
      ? carouselItems[carouselItems.length - 1]
      : carouselItems[itemIndex];
  };

  const setElementActive = (direction: string, newIndex?: number) => {
    if (newIndex !== undefined) {
      prevIndex.current = newIndex;
      setActiveSlide(newIndex);
      return;
    }

    const next = activeSlide === carouselItems.length - 1 ? 0 : activeSlide + 1;
    const prev = activeSlide === 0 ? carouselItems.length - 1 : activeSlide - 1;

    prevIndex.current = direction === "next" ? next : prev;
    setActiveSlide(direction === "next" ? next : prev);
  };

  const slide = useCallback(
    (direction: string, nextElement: HTMLElement, index?: number) => {
      if (
        !carouselItems ||
        carouselItems.length < 2 ||
        isTransitioning.current
      ) {
        return;
      }

      if (isFirstSlide.current) {
        isFirstSlide.current = false;
      }

      const activeElement = carouselItems[activeSlide];

      if (!activeElement || !nextElement) {
        return;
      }

      isTransitioning.current = true;
      onSlide?.();

      const isNext = direction === "next";

      const activeClass = isNext ? theme.slideLeft : theme.slideRight;
      const nextClass = !isNext ? theme.slideLeft : theme.slideRight;

      setElementActive(direction, index);

      nextElement.classList.add(nextClass, theme.block);

      forceReflow(nextElement);

      activeElement.classList.add(activeClass);

      if (crossfade) {
        activeElement.classList.add(...theme.invisible.split(" "));
        activeElement.classList.remove(...theme.visible.split(" "));
        nextElement.classList.add(...theme.visible.split(" "));
      }

      nextElement.classList.remove(nextClass);

      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        isTransitioning.current = false;
        onSlid?.();

        activeElement.classList.remove(activeClass, theme.block);
      }, transitionDuration);
    },
    [activeSlide, transitionDuration, crossfade]
  );

  const changeSlide = useCallback(
    (direction: "prev" | "next") => {
      const nextElement = getNextElement(direction);

      const { hidden } = document;

      if (
        visibilityState &&
        (hidden || !isVisible(carouselRef.current as HTMLElement))
      ) {
        visibilityChangeRef.current = true;
        return;
      }

      nextElement && slide(direction, nextElement);
    },
    [slide, visibilityState]
  );

  const slideTo = (index: number) => {
    const activeIndex = prevIndex.current;
    const direction = index > activeIndex ? "next" : "prev";
    const nextElement = getNextElement(direction, index);

    if (
      !nextElement ||
      index > carouselItems.length - 1 ||
      index < 0 ||
      index === activeSlide
    ) {
      return;
    }

    slide(direction, nextElement, index);
  };

  const startInterval = useCallback(() => {
    if (typeof interval === "number" && interval > 0) {
      if (hasMouseEnteredCarousel.current) {
        hasMouseEnteredCarousel.current = false;
      }

      intervalRef.current = setTimeout(() => {
        changeSlide("next");
      }, interval);
    }
  }, [changeSlide, interval]);

  const pauseInterval = () => {
    if (intervalRef.current) {
      clearTimeout(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startTouch = useCallback((e: TouchEvent) => {
    setClientTouch({
      initialX: e.touches[0].clientX,
      initialY: e.touches[0].clientY,
    });
  }, []);

  const moveTouch = useCallback(
    (e: TouchEvent) => {
      if (!clientTouch) {
        return;
      }
      const { initialX, initialY } = clientTouch;

      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;

      const diffX = initialX - currentX;
      const diffY = initialY - currentY;

      if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 0) {
          changeSlide("next");
        } else {
          changeSlide("prev");
        }
      }

      setClientTouch({ initialX: 0, initialY: 0 });
    },
    [changeSlide, clientTouch]
  );

  const handleKeydown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          changeSlide("prev");
          break;
        case "ArrowRight":
          e.preventDefault();
          changeSlide("next");
          break;
      }
    },
    [changeSlide]
  );

  useEffect(() => {
    const handleVisibilityChange = () => {
      setVisibilityState(document.visibilityState);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [interval, ride]);

  useEffect(() => {
    if (!keyboard || !carouselRef.current) {
      return;
    }
    const carouselElement = carouselRef.current;

    carouselElement.addEventListener("keydown", handleKeydown);
    return () => {
      carouselElement.removeEventListener("keydown", handleKeydown);
    };
  }, [keyboard, handleKeydown]);

  useEffect(() => {
    if (!touch || !carouselRef.current) {
      return;
    }
    const carouselElement = carouselRef.current;

    carouselElement.addEventListener("touchmove", moveTouch);
    carouselElement.addEventListener("touchstart", startTouch);

    return () => {
      carouselElement.removeEventListener("touchmove", moveTouch);
      carouselElement.removeEventListener("touchstart", startTouch);
    };
  }, [touch, moveTouch, startTouch]);

  useEffect(() => {
    if (
      !ride ||
      (ride === true && isFirstSlide.current) ||
      !pause ||
      !carouselRef.current
    ) {
      return;
    }

    const handleMouseEnter = () => {
      pauseInterval();
      hasMouseEnteredCarousel.current = true;
    };

    const handleMouseLeave = () => {
      if (stopSliding) {
        return;
      }

      startInterval();
    };

    const carouselElement = carouselRef.current;
    carouselElement.addEventListener("mouseenter", handleMouseEnter);
    carouselElement.addEventListener("mouseleave", handleMouseLeave);
    carouselElement.addEventListener("touchend", pauseInterval);

    return () => {
      carouselElement.removeEventListener("mouseenter", handleMouseEnter);
      carouselElement.removeEventListener("mouseleave", handleMouseLeave);
      carouselElement.removeEventListener("touchend", pauseInterval);
    };
  }, [pause, ride, startInterval]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (!carouselItems || carouselItems.length < 2) {
      return;
    }

    if (
      stopSliding ||
      (ride === true && isFirstSlide.current) ||
      !ride ||
      visibilityState === "hidden" ||
      !interval ||
      hasMouseEnteredCarousel.current
    ) {
      return;
    }

    if (visibilityChangeRef.current && visibilityState === "visible") {
      changeSlide("next");
      visibilityChangeRef.current = false;
      return;
    }

    startInterval();

    return () => {
      pauseInterval();
    };
  }, [
    activeSlide,
    interval,
    ride,
    transitionDuration,
    visibilityState,
    stopSliding,
  ]);

  useEffect(() => {
    if (isFirstRender.current) {
      return;
    }

    if (stopSliding && !isFirstSlide.current) {
      pauseInterval();
    }

    if (current !== undefined) {
      slideTo(current);
    }
  }, [stopSliding, current]);

  return (
    <CarouselContext.Provider
      value={{
        activeSlide,
        setTransitionDuration,
        block: theme.block,
        visible: theme.visible,
        crossfade,
        setCarouselItems,
        isFirstRender,
      }}
    >
      <Tag
        ref={carouselRef}
        className={classes}
        current={activeSlide}
        {...props}
      >
        {children}
        {showControls && (
          <>
            <button
              onClick={() => changeSlide("prev")}
              className={theme.prevBtn}
              type="button"
            >
              <span className={theme.prevBtnIcon}>
                {prevBtnIcon || (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                )}
              </span>

              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Previous
              </span>
            </button>

            <button
              onClick={() => changeSlide("next")}
              className={theme.nextBtn}
              type="button"
            >
              <span className={theme.nextBtnIcon}>
                {nextBtnIcon || (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                )}
              </span>
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Next
              </span>
            </button>
          </>
        )}
        {showIndicators && (
          <div className={theme.indicatorsWrapper}>
            {carouselItems.map((_, index) => (
              <button
                key={index}
                data-te-target={index}
                onClick={() => slideTo(index)}
                className={`${theme.indicator} ${
                  index === activeSlide ? `${theme.activeIndicator}` : ""
                }`}
              ></button>
            ))}
          </div>
        )}
      </Tag>
    </CarouselContext.Provider>
  );
};

export default TECarousel;
