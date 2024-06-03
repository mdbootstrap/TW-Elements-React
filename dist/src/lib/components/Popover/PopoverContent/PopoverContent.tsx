import React, { useContext, useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import clsx from "clsx";
import type { PopoverContentProps } from "../PopoverContent/types";
import { PopoverContext } from "../context/PopoverContext";
import PopoverContentTheme from "./PopoverContentTheme";
import { usePopper } from "react-popper";
import { useTransition } from "../../../hooks/useTransition";

const TEPopoverContent: React.FC<PopoverContentProps> = ({
  className,
  children,
  theme: customTheme,
  popperTag: PopperTag = "div",
  container = false,
  placement = "right",
  popperConfig,
  offset = [0, 0],
  fallbackPlacements = ["top", "bottom", "right", "left"],
  boundary = "clippingParents",
}): JSX.Element => {
  const [isReadyToHide, setIsReadyToHide] = useState(false);
  const [isFaded, setIsFaded] = useState(false);

  const popperElement = useRef(null);

  const {
    referenceElement,
    isOpenState,
    isFocused,
    enabled,
    trigger,
    onShown,
    onHidden,
  } = useContext(PopoverContext);

  const theme = {
    ...PopoverContentTheme,
    ...customTheme,
  };

  const classes = clsx(
    theme.popoverContent,
    theme.fade,
    isFaded ? "opacity-100" : "opacity-0",
    className
  );

  const { styles, attributes } = usePopper(
    referenceElement.current,
    popperElement.current,
    {
      placement,
      modifiers: [
        {
          name: "offset",
          options: {
            offset,
          },
        },
        {
          name: "flip",
          options: {
            fallbackPlacements,
          },
        },
        {
          name: "preventOverflow",
          options: {
            boundary,
          },
        },
      ],
      ...popperConfig,
    }
  );

  const { onTransitionShow, onTransitionHide } = useTransition(
    popperElement.current
  );

  useEffect(() => {
    if ((isOpenState || isFocused) && enabled) {
      setIsReadyToHide(true);
      onTransitionShow(() => {
        setIsFaded(true);
        !isFaded && onShown?.();
      });
      return;
    }

    setIsFaded(false);
    onTransitionHide(() => {
      setIsReadyToHide(false);
      isFaded && onHidden?.();
    });
  }, [isOpenState, isFocused, enabled, trigger]);

  return (
    <>
      {isReadyToHide &&
        ReactDOM.createPortal(
          <PopperTag
            className={classes}
            ref={popperElement}
            style={{ ...styles.popper }}
            {...attributes.popper}
          >
            {children}
          </PopperTag>,
          container
            ? (document.querySelector(container as string) as Element)
            : document.body
        )}
    </>
  );
};

export default TEPopoverContent;
