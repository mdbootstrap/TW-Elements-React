import { useContext } from "react";

import { CarouselStateContext } from "../context/CarouselStateContext";

export function useCarouselState() {
  const carouselState = useContext(CarouselStateContext);

  if (!carouselState) {
    throw new Error('Carousel subcomponents must be used within a Carousel component.');
  }

  return carouselState;
}
