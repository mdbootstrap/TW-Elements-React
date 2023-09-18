/*
--------------------------------------------------------------------------
Tailwind Elements React is an open-source UI kit of advanced components for TailwindCSS.
Copyright © 2023 MDBootstrap.com

Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
--------------------------------------------------------------------------
*/

import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  SyntheticEvent,
} from "react";
import ReactDOM from "react-dom";
import clsx from "clsx";
import { usePopper } from "react-popper";
import type { TooltipProps } from "./types";
import tooltipTheme from "./tooltipTheme";

const TETooltip: React.FC<TooltipProps> = ({
  className,
  children,
  tag: Tag = "button",
  tooltipTag: TooltipTag = "div",
  popperConfig,
  placement = "top",
  title,
  wrapperProps,
  tooltipClassName,
  theme: customTheme,
  container = false,
  trigger = "hover focus",
  offset = [0, 0],
  fallbackPlacements = ["top", "right", "bottom", "left"],
  boundary = "clippingParents",
  enabled = true,
  onShow,
  onShown,
  onHide,
  onHidden,
  onMouseEnter,
  onMouseLeave,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFaded, setIsFaded] = useState(false);
  const [isReadyToHide, setIsReadyToHide] = useState(false);
  const popperElement = useRef(null);
  const referenceElement = useRef(null);

  const theme = {
    ...tooltipTheme,
    ...customTheme,
  };

  const tooltipClasses = clsx(
    theme.tooltip,
    theme.fade,
    isFaded ? "opacity-100" : "opacity-0",
    tooltipClassName
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

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    let secondTimer: ReturnType<typeof setTimeout>;

    if ((isOpen || isFocused) && enabled) {
      setIsReadyToHide(true);
      timer = setTimeout((e: SyntheticEvent) => {
        setIsFaded(true);
        if (trigger !== "focus") {
          !isFocused && onShown?.(e);
        } else {
          onShown?.(e);
        }
      }, 4);
    } else {
      setIsFaded(false);
      secondTimer = setTimeout((e: SyntheticEvent) => {
        setIsReadyToHide(false);
        isFaded && onHidden?.(e);
      }, 300);
    }
    return () => {
      clearTimeout(timer);
      clearTimeout(secondTimer);
    };
  }, [isOpen, isFocused, enabled]);

  const handleOnMouseEnter = (e: SyntheticEvent) => {
    onMouseEnter?.(e);
    if (
      enabled === false ||
      (isFocused === false && trigger === "focus") ||
      trigger === "click" ||
      (trigger.includes("focus") &&
        trigger.includes("click") &&
        !trigger.includes("hover"))
    ) {
      return;
    }
    !isFocused && onShow?.(e);
    !e.defaultPrevented && setIsOpen(true);
  };

  const handleOnMouseLeave = (e: SyntheticEvent) => {
    onMouseLeave?.(e);
    if (
      enabled === false ||
      (isFocused === true && trigger === "focus") ||
      !isOpen ||
      (trigger.includes("focus") &&
        trigger.includes("click") &&
        !trigger.includes("hover"))
    ) {
      return;
    }
    !isFocused && onHide?.(e);
    !e.defaultPrevented && setIsOpen(false);
  };

  const handleClick = useCallback(
    (e: MouseEvent | SyntheticEvent) => {
      if (trigger.includes("click") || trigger.includes("focus")) {
        if (e.target === referenceElement.current) {
          if (trigger.includes("focus")) {
            !isFocused && !isOpen && onShow?.(e);
            setIsFocused(true);
          } else if (trigger.includes("click")) {
            !isOpen && onShow?.(e);
            setIsOpen(true);
          }
        } else {
          if (trigger.includes("focus")) {
            isFocused && onHide?.(e);
            setIsFocused(false);
          } else if (trigger.includes("click")) {
            isOpen && onHide?.(e);
            setIsOpen(false);
          }
        }
      }
    },
    [referenceElement, trigger, isOpen, isFocused]
  );

  useEffect(() => {
    if (!enabled) {
      return;
    }
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [handleClick, enabled]);

  return (
    <>
      <Tag
        className={className}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        ref={referenceElement}
        {...wrapperProps}
      >
        {children}
      </Tag>

      {isReadyToHide &&
        ReactDOM.createPortal(
          <TooltipTag
            ref={popperElement}
            className={tooltipClasses}
            style={styles.popper}
            {...attributes.popper}
            role="tooltip"
            {...props}
          >
            <div className={theme.tooltipInner}>{title}</div>
          </TooltipTag>,
          container ? document.querySelector(container) : document.body
        )}
    </>
  );
};

export default TETooltip;
