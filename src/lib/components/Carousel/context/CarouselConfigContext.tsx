import { createContext } from "react";

import { CarouselConfig } from "../types";

const CarouselConfigContext = createContext<CarouselConfig>({
  interval: 4000,
  touch: true,
  keyboard: true,
});

export { CarouselConfigContext };