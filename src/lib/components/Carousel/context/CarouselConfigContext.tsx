import { createContext } from "react";

import { CarouselConfig } from "../types";

const CarouselConfigContext = createContext<CarouselConfig>({
  interval: 5000,
  touch: true,
  keyboard: true,
  ride: false,
});

export { CarouselConfigContext };