/*
--------------------------------------------------------------------------
TW Elements React is an open-source UI kit of advanced components for TailwindCSS.
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
import { useTransition } from "../../hooks/useTransition";

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
  const isInvoked = useRef(false);

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

  const { onTransitionShow, onTransitionHide } = useTransition(
    popperElement.current
  );

  useEffect(() => {
    if ((isOpen || isFocused) && enabled) {
      if (isInvoked.current) {
        return;
      }
      isInvoked.current = true;
      setIsReadyToHide(true);
      onTransitionShow(() => {
        setIsFaded(true);
        onShown?.();
      });
      return;
    }

    setIsFaded(false);
    onTransitionHide(() => {
      setIsReadyToHide(false);
      isFaded && onHidden?.();
      isInvoked.current = false;
    });
  }, [isOpen, isFocused, enabled]);

  const handleMouseAndClick = useCallback(
    (
      e: SyntheticEvent | React.MouseEvent,
      eventType: "mouseenter" | "mouseleave" | "mousedown"
    ) => {
      if (!enabled) return;

      eventType === "mouseenter" && onMouseEnter?.(e);
      eventType === "mouseleave" && onMouseLeave?.(e);

      if (
        ((eventType === "mouseenter" || eventType === "mouseleave") &&
          trigger !== "click" &&
          trigger !== "focus") ||
        (eventType === "mouseleave" && trigger.includes("click"))
      ) {
        if (
          (eventType === "mouseenter" && isFocused) ||
          (eventType === "mouseleave" && !isOpen) ||
          (trigger.includes("click") &&
            trigger.includes("focus") &&
            !trigger.includes("hover"))
        ) {
          return;
        }
        if (eventType === "mouseenter") {
          !isFocused && onShow?.(e);
          !e.defaultPrevented && setIsOpen(true);
        } else {
          !isFocused && onHide?.(e);
          !e.defaultPrevented && setIsOpen(false);
        }
      } else if (eventType === "mousedown") {
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
    [enabled, trigger, isOpen, isFocused]
  );

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const handleEvent = (event: any) => {
      handleMouseAndClick(event, "mousedown");
    };

    document.addEventListener("mousedown", handleEvent);
    return () => {
      document.removeEventListener("mousedown", handleEvent);
    };
  }, [enabled, handleMouseAndClick]);

  return (
    <>
      <Tag
        className={className}
        onMouseEnter={(e: SyntheticEvent) =>
          handleMouseAndClick(e, "mouseenter")
        }
        onMouseLeave={(e: SyntheticEvent) =>
          handleMouseAndClick(e, "mouseleave")
        }
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
          container
            ? (document.querySelector(container as string) as Element)
            : document.body
        )}
    </>
  );
};

export default TETooltip;
