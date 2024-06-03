import React from "react";
interface CarouselContextProps {
    activeSlide: number;
    setTransitionDuration?: React.SetStateAction<any>;
    block?: string;
    visible?: string;
    crossfade?: boolean;
    setCarouselItems?: React.SetStateAction<any>;
    isFirstRender?: React.MutableRefObject<boolean>;
}
declare const CarouselContext: React.Context<CarouselContextProps>;
export { CarouselContext };
