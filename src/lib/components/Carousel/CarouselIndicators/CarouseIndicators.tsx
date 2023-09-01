import React, { KeyboardEventHandler, useEffect, useId, useRef } from "react";

import { 
  carouselJumpTo,
  carouselUpdateItems,
  carouselSlidePrev,
  carouselSlideNext,
} from "../actions/creators";
import { useCarouselConfig } from "../hooks/useCarouselConfig";
import { CarouselIndicatorsProps } from "./types";
import { useCarouselState } from "../hooks/useCarouselState";
import { useCarouselDispatch } from "../hooks/useCarouselDispatch";

const TECarouselIndicators: React.FC<CarouselIndicatorsProps> = ({ 
  Component,
  ActiveComponent,
  ...props
}) => {
  const { keyboard } = useCarouselConfig()
  const { items, activeItemId } = useCarouselState()
  const dispatch = useCarouselDispatch()

  const createHandler = (index: number) => {
    return () => dispatch(carouselJumpTo(index))
  }

  const tablistId = useId()

  useEffect(() => {
    const newItems = items.map(
      (item, index) => ({ 
        tabId: tablistId + '-tab-' + index,
        panelId: tablistId + '-panel-' + index, 
        ...item 
      })
    )
    dispatch(carouselUpdateItems(newItems))
  }, [dispatch, tablistId]) // Do not include items in the dependency array, as it will cause an infinite render loop.

  const listRef = useRef<HTMLOListElement | null>(null)

  const handleKeyDown: KeyboardEventHandler = (event) => {
    switch (event.key) { 
      case 'ArrowLeft':
        event.preventDefault();
        dispatch(carouselSlidePrev());
        (listRef.current?.children[(activeItemId || items.length) - 1] as HTMLLIElement).focus();
        break;
      case 'ArrowRight':
        event.preventDefault();
        dispatch(carouselSlideNext());
        (listRef.current?.children[(activeItemId + 1) % items.length] as HTMLLIElement).focus();
        break;
    } 
  }

  return (<ol 
    ref={listRef}
    role="tablist"
    onKeyDown={keyboard ? handleKeyDown : undefined}
    {...props}
  >
    {items.map(
      (item, index) => {
        const isActiveTab = index === activeItemId

        return (<li key={index}
            id={item.tabId}
            tabIndex={isActiveTab ? 0 : -1}
            role="tab"
            aria-controls={item.panelId}
            aria-selected={isActiveTab}
            aria-label={'Slide ' + (index + 1)}
            onClick={createHandler(index)}
          >
            {isActiveTab
              ? <ActiveComponent />
              : <Component />
            }
          </li>
        )
      }
    )}
  </ol>)
}

export { TECarouselIndicators };