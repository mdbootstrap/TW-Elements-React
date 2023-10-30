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
  Children,
  cloneElement,
  useContext,
  useEffect,
  useCallback,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { DropdownMenuProps } from "./types";
import { DropdownContext } from "../context/DropdownContext";
import { useKeyboard } from "../../../hooks/components/Dropdown/useKeyboard";
import { usePopper } from "react-popper";
import { useTransition } from "../../../hooks/useTransition";
import { Placement, flip } from "@popperjs/core";
import clsx from "clsx";
import DropdownMenuTheme from "./DrodpownMenuTheme";

const TEDropdownMenu: React.FC<DropdownMenuProps> = ({
  className,
  tag: Tag = "ul",
  children,
  appendToBody = false,
  theme: customTheme,
  responsive,
  position,
  alignment = "start",
  popperConfig,
  display = "dynamic",
  offset = [0, 0],
  ...props
}) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [newAlignment, setNewAlignment] = useState<string | undefined>(
    alignment
  );
  const [placement, setPlacement] = useState<Placement | undefined>(
    "bottom-start"
  );
  const [isFaded, setIsFaded] = useState(false);
  const [show, setShow] = useState(false);

  const {
    activeIndex,
    isOpenState,
    setPopperElement,
    animation,
    referenceElement,
    popperElement,
  } = useContext(DropdownContext);

  const theme = {
    ...customTheme,
    ...DropdownMenuTheme,
  };

  const { onTransitionShow, onTransitionHide } = useTransition(popperElement);

  useKeyboard(children);

  const classes = clsx(
    theme.menu,
    animation && theme.fade,
    isFaded ? "opacity-100" : "opacity-0",
    className
  );

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    if (isOpenState) {
      setShow(true);
      onTransitionShow(() => {
        setIsFaded(true);
      });

      return;
    }

    setIsFaded(false);
    onTransitionHide(() => {
      setShow(false);
    });
  }, [isOpenState]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {
    const responsiveAlignment = () => {
      const breakpoints = {
        "sm-start": 640,
        "md-start": 768,
        "lg-start": 1024,
        "xl-start": 1280,
        "2xl-start": 1536,
        "sm-end": 640,
        "md-end": 768,
        "lg-end": 1024,
        "xl-end": 1280,
        "2xl-end": 1536,
      };

      const matchingBreakpoint = Object.entries(breakpoints).find(
        ([key, value]) => responsive === key && windowWidth >= value
      );

      return matchingBreakpoint
        ? matchingBreakpoint?.[0].split("-")[1]
        : alignment;
    };

    setNewAlignment(responsiveAlignment());
  }, [responsive, alignment, windowWidth, newAlignment]);

  useEffect(() => {
    const calculatePlacement = () => {
      if (position === "dropright") {
        return "right-start";
      }

      if (position === "dropleft") {
        return "left-start";
      }

      const isEnd = popperElement && newAlignment === "end";

      if (position === "dropup") {
        return isEnd ? "top-end" : "top-start";
      }

      return isEnd ? "bottom-end" : "bottom-start";
    };

    setPlacement(calculatePlacement());
  }, [position, alignment, newAlignment, popperElement]);

  const { styles } = usePopper(
    referenceElement,
    popperElement,
    display === "dynamic"
      ? {
          placement: placement,
          modifiers: [
            flip,
            {
              name: "offset",
              options: {
                offset,
              },
            },
          ],
          ...popperConfig,
        }
      : {
          modifiers: [
            {
              name: "applyStyles",
              enabled: false,
            },
          ],
        }
  );

  const menu = (
    <Tag
      className={classes}
      ref={setPopperElement}
      style={{
        position: "absolute",
        zIndex: 1000,
        ...(display === "dynamic" ? styles.popper : {}),
      }}
      alignment={newAlignment}
      {...props}
    >
      {Children.map(children, (child, idx) =>
        cloneElement(child, {
          tabIndex: idx,
          "data-te-active": activeIndex === idx && true,
        })
      )}
    </Tag>
  );

  return (
    <>{show && (appendToBody ? createPortal(menu, document.body) : menu)}</>
  );
};

export default TEDropdownMenu;
