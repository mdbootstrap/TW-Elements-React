import React, { useEffect, useContext, useRef } from "react";
import type { CarouselItemProps } from "./types";
import { CarouselContext } from "../context/CarouselContext";
import { useTransition } from "../../../hooks/useTransition";

const TECarouselItem: React.FC<CarouselItemProps> = ({
  tag: Tag = "div",
  className,
  itemID,
  children,
  ...props
}): JSX.Element => {
  const itemRef = useRef<HTMLElement>(null);
  const {
    activeSlide,
    setTransitionDuration,
    block,
    visible,
    crossfade,
    setCarouselItems,
    isFirstRender,
  } = useContext(CarouselContext);

  const { transitionDuration } = useTransition(
    itemRef.current as HTMLElement,
    className
  );

  useEffect(() => {
    if (isFirstRender?.current) {
      setCarouselItems((prev: any) => [
        ...prev,
        itemRef.current as HTMLElement,
      ]);
      return;
    }
  }, []);

  useEffect(() => {
    if (activeSlide === itemID - 1) {
      const itemElement = itemRef.current as HTMLElement;
      itemElement.classList.add(block as string);
      crossfade && itemElement.classList.add(...(visible as string).split(" "));
      setTransitionDuration(transitionDuration);
    }
  }, [activeSlide, itemID, crossfade, transitionDuration]);

  return (
    <Tag ref={itemRef} className={className} {...props}>
      {children}
    </Tag>
  );
};

export default TECarouselItem;
