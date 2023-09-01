import { Dispatch, createContext } from "react";

const CarouselDispatchContext = createContext<Dispatch<CarouselAction>|undefined>(undefined);

export { CarouselDispatchContext };