import React from "react";

import { carouselSlideNext, carouselSlidePrev } from "../actions/creators";
import { useCarouselDispatch } from "../hooks/useCarouselDispatch";
import { CarouselControlProps } from "./types";
import clsx from "clsx";

const TECarouselControl: React.FC<CarouselControlProps> = ({ 
  children,
  direction, 
  className, 
  ...props
}) => {
  const dispatch = useCarouselDispatch()

  const handleClick = () => {
    dispatch(direction === 'prev' ? carouselSlidePrev() : carouselSlideNext())
  }

  return (<button
    type="button"
    onClick={handleClick}
    className={clsx(
      'absolute bottom-0 top-0 z-10',
      direction === 'prev' ? 'left-0' : 'right-0',
      className
    )}
    {...props}
  >
    {children}
  </button>)
}

export default TECarouselControl;