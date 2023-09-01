import { useContext } from "react";

import { CarouselConfigContext } from "../context/CarouselConfigContext";

export function useCarouselConfig() {
  const carouselConfig = useContext(CarouselConfigContext);

  if (!carouselConfig) {
    throw new Error('Carousel subcomponents must be used within a Carousel component.');
  }

  return carouselConfig;
}