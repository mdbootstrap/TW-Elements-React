/*
--------------------------------------------------------------------------
Tailwind Elements React is an open-source UI kit of advanced components for TailwindCSS.
Copyright © 2023 MDBootstrap.com

Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
--------------------------------------------------------------------------
*/

import React, { useState, useEffect, useCallback, SyntheticEvent } from "react";
import ReactDOM from "react-dom";
import clsx from "clsx";
import { usePopper } from "react-popper";
import type { TooltipProps } from "./types";
import tooltipTheme from "./tooltipTheme";

const TETooltip: React.FC<TooltipProps> = ({
  className,
  children,
  disableMouseDown = false,
  tag: Tag = "button",
  tooltipTag: TooltipTag = "div",
  options,
  placement = "top",
  title,
  wrapperProps,
  wrapperClass,
  theme: customTheme,
  onShow,
  onHide,
  onMouseEnter,
  onMouseLeave,
  ...props
}) => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [isOpenState, setIsOpenState] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isFaded, setIsFaded] = useState(false);
  const [isReadyToHide, setIsReadyToHide] = useState(false);

  const theme = {
    ...tooltipTheme,
    ...customTheme,
  };

  const classes = clsx(
    theme.tooltip,
    theme.fade,
    isFaded ? "opacity-100" : "opacity-0",
    className
  );

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    ...options,
  });

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    let secondTimer: ReturnType<typeof setTimeout>;

    if (isOpenState || isClicked) {
      setIsReadyToHide(true);
      timer = setTimeout(() => {
        setIsFaded(true);
      }, 4);
    } else {
      setIsFaded(false);

      secondTimer = setTimeout(() => {
        setIsReadyToHide(false);
      }, 300);
    }
    return () => {
      clearTimeout(timer);
      clearTimeout(secondTimer);
    };
  }, [isOpenState, isClicked]);

  const handleOnMouseEnter = (e: SyntheticEvent) => {
    onShow?.(e);
    !e.defaultPrevented && setIsOpenState(true);
    onMouseEnter?.(e);
  };

  const handleOnMouseLeave = (e: SyntheticEvent) => {
    onHide?.(e);
    !e.defaultPrevented && setIsOpenState(false);
    onMouseLeave?.(e);
  };

  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (e.target === referenceElement) {
        setIsClicked(true);
      } else {
        setIsClicked(false);
      }
    },
    [referenceElement]
  );

  useEffect(() => {
    if (!disableMouseDown) {
      document.addEventListener("mousedown", handleClick);
      return () => {
        document.removeEventListener("mousedown", handleClick);
      };
    }
  }, [handleClick, disableMouseDown]);

  return (
    <>
      <Tag
        className={wrapperClass}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        ref={setReferenceElement}
        {...wrapperProps}
      >
        {children}
      </Tag>

      {isReadyToHide &&
        ReactDOM.createPortal(
          <TooltipTag
            ref={setPopperElement}
            className={classes}
            style={styles.popper}
            {...attributes.popper}
            role="tooltip"
            {...props}
          >
            <div className={theme.tooltipInner}>{title}</div>
          </TooltipTag>,
          document.body
        )}
    </>
  );
};

export default TETooltip;
