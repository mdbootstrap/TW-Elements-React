import React, { TouchEventHandler, useEffect, useRef } from "react";

import { 
  carouselLoadItems,
  carouselSlidePrev,
  carouselSlideNext,
  carouselStartRotation,
  carouselStopRotation,
  carouselTransitionEnd
} from "../actions/creators";
import { useCarouselConfig } from "../hooks/useCarouselConfig";
import { useCarouselState } from "../hooks/useCarouselState";
import { useCarouselDispatch } from "../hooks/useCarouselDispatch";
import { CarouselContainerProps } from "./types";

const TERCarouselContainer: React.FC<CarouselContainerProps> = ({ 
  children, 
  items,
  renderItem,
  ...props
}) => {
  const { items: itemsData, activeItemId, desiredItemId, isRotating } = useCarouselState()
  const { interval, touch, ride } = useCarouselConfig()
  const duration = 600
  const dispatch = useCarouselDispatch()

  useEffect(() => {
    // We only care about the number of items here.
    // Unless the carousel includes indicators, in which case we need to map indicators to slides, for a11y purposes.
    // @see ./Indicators/TERCarouselIndicators.tsx
    const itemsData = items.map(() => ({}))

    dispatch(carouselLoadItems(itemsData))
  }, [items, dispatch])

  useEffect(() => {
    if (ride && isRotating && typeof interval === 'number' && desiredItemId === activeItemId) {
      const autoRunTimeout = setTimeout(() => {
        dispatch(carouselSlideNext())
      }, interval)

      return () => {
        clearTimeout(autoRunTimeout)
      }
    }
  }, [ride, interval, activeItemId, desiredItemId, isRotating, dispatch])

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(carouselTransitionEnd())
    }, duration)

    return () => {
      clearTimeout(timeout)
    }
  }, [desiredItemId, dispatch])

  // Implementation from https://stackoverflow.com/a/70612770/8137604
  const minSwipeDistance = 50
  const touchStart = useRef<number|null>(null)
  const touchEnd = useRef<number|null>(null)

  const handleTouchStart: TouchEventHandler<HTMLLIElement> = (event) => {
    touchEnd.current = null
    touchStart.current = event.targetTouches[0].clientX
  }

  const handleTouchMove: TouchEventHandler<HTMLLIElement> = (event) => {
    touchEnd.current = event.targetTouches[0].clientX
  }

  const handleTouchEnd: TouchEventHandler<HTMLLIElement> = () => {
    if (!touchStart.current || !touchEnd.current) return

    const distance = touchStart.current - touchEnd.current
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe) {
      dispatch(carouselSlideNext())
    } else if (isRightSwipe) {
      dispatch(carouselSlidePrev())
    }
  }

  return (<div
    role="group"
    aria-roledescription="carousel"
    onFocus={() => dispatch(carouselStopRotation())}
    onBlur={() => dispatch(carouselStartRotation())}
    {...props}
  >
    <ol
      aria-atomic="false"
      aria-live={interval ? 'off' : 'polite'}
      className="list-none relative w-full h-full overflow-hidden after:clear-both after:block after:content-['']"
    >
      {items.map((item, index, items) => {
        const isActive = index === activeItemId
        const isLeft = desiredItemId - 1 === index || desiredItemId === 0 && index === items.length - 1
        const isRight = desiredItemId + 1 === index || desiredItemId === items.length - 1 && index === 0
        const isDesired = index === desiredItemId
        const metadata = itemsData[index]

        return (<li
          key={index}
          id={metadata?.panelId}
          role={metadata?.tabId ? 'tabpanel' : 'group'}
          aria-roledescription="slide"
          aria-label={metadata?.tabId ? undefined :  index + ' out of ' + items.length}
          aria-labelledby={metadata?.tabId}
          className={`relative float-left -mr-[100%] ${isActive || isDesired ? 'visible' : 'invisible' } ${isLeft ? '-translate-x-full' : '' } ${isRight ? 'translate-x-full' : '' } ${isDesired ? 'translate-x-0' : '' } w-full h-full transition-transform ease-in-out`}
          style={{ backfaceVisibility: 'hidden', transitionDuration: duration + 'ms' }}
          onTouchStart={touch ? handleTouchStart : undefined}
          onTouchMove={touch ? handleTouchMove : undefined}
          onTouchEnd={touch ? handleTouchEnd : undefined}
        >
          {renderItem 
            ? renderItem({ children: item })
            : item
          }
        </li>)
      })}
    </ol>
    {children}
  </div>)
}

export default TERCarouselContainer;