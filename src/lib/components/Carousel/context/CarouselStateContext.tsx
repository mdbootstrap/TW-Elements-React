import { createContext } from "react";

const CarouselStateContext = createContext<CarouselState>({
  items: [],
  activeItemId: 0,
  desiredItemId: 0,
  isRotating: false,
})

export { CarouselStateContext };