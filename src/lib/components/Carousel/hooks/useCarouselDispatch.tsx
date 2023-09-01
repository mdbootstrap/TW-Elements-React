import { useContext } from "react";

import { CarouselDispatchContext } from "../context/CarouselDispatchContext";

export function useCarouselDispatch() {
  const carouselDispatch = useContext(CarouselDispatchContext);

  if (!carouselDispatch) {
    throw new Error('Carousel subcomponents must be used within a Carousel component.');
  }

  return carouselDispatch;
}