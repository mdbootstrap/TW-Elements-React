import React, { createContext } from "react";

interface CarouselContextProps {
  activeSlide: number;
  setTransitionDuration?: React.SetStateAction<any>;
  block?: string;
  visible?: string;
  crossfade?: boolean;
  setCarouselItems?: React.SetStateAction<any>;
  isFirstRender?: React.MutableRefObject<boolean>;
}

const CarouselContext = createContext<CarouselContextProps>({
  activeSlide: 0,
  setTransitionDuration: () => {},
  block: "",
  visible: "",
  crossfade: undefined,
  setCarouselItems: () => {},
  isFirstRender: { current: true },
});

export { CarouselContext };
