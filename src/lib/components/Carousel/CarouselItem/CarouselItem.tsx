import React, { useEffect, useContext, useRef } from "react";
import type { CarouselItemProps } from "./types";
import { CarouselContext } from "../context/CarouselContext";
import { useTransition } from "../../../hooks/useTransition";
import clsx from "clsx";

const TECarouselItem: React.FC<CarouselItemProps> = ({
  tag: Tag = "div",
  className,
  itemID,
  children,
  ...props
}): JSX.Element => {
  const itemRef = useRef<HTMLElement>(null);
  const { activeSlide, setTransitionDuration, block, visible, crossfade } =
    useContext(CarouselContext);

  const classes = clsx(className);

  const { transitionDuration } = useTransition(
    itemRef.current as HTMLElement,
    null,
    classes
  );

  useEffect(() => {
    if (activeSlide === itemID - 1) {
      const itemElement = itemRef.current as HTMLElement;
      itemElement.setAttribute("data-te-active", "");
      itemElement.classList.add(block as string);
      crossfade && itemElement.classList.add(...(visible as string).split(" "));
      setTransitionDuration(transitionDuration);
    }
  }, [activeSlide, itemID, crossfade, transitionDuration]);

  return (
    <Tag ref={itemRef} className={classes} {...props}>
      {children}
    </Tag>
  );
};

export default TECarouselItem;
