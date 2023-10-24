import React, { createContext } from "react";

interface CarouselContextProps {
  activeSlide: number;
  setTransitionDuration?: React.SetStateAction<any>;
  block?: string;
  visible?: string;
  crossfade?: boolean;
}

const CarouselContext = createContext<CarouselContextProps>({
  activeSlide: 0,
  setTransitionDuration: () => {},
  block: "",
  visible: "",
  crossfade: undefined,
});

export { CarouselContext };
