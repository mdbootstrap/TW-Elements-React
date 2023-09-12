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
import { useFade } from "../../../hooks/components/Dropdown/useFade";
import { usePopper } from "react-popper";
import { Placement, flip } from "@popperjs/core";
import clsx from "clsx";
import DropdownMenuTheme from "./DrodpownMenuTheme";

const TEDropdownMenu: React.FC<DropdownMenuProps> = ({
  className,
  tag: Tag = "ul",
  children,
  appendToBody = false,
  alwaysOpen,
  theme: customTheme,
  responsive,
  position,
  alignment,
  ...props
}) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [newAlignment, setNewAlignment] = useState<string | undefined>(
    alignment
  );
  const [placement, setPlacement] = useState<Placement | undefined>(
    "bottom-start"
  );

  const {
    activeIndex,
    setPopperElement,
    animation,
    referenceElement,
    popperElement,
    options,
  } = useContext(DropdownContext);

  const { show, isFadeIn, isFadeOut } = useFade();

  useKeyboard(children);

  const theme = {
    ...customTheme,
    ...DropdownMenuTheme,
  };

  const classes = clsx(
    theme.menu,
    animation === true &&
      ((isFadeIn && theme.animationIn) || (isFadeOut && theme.animationOut)),
    className
  );

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

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

      return matchingBreakpoint && responsive?.endsWith("-end")
        ? "end"
        : "start";
    };

    if (responsive) {
      setNewAlignment(responsiveAlignment());
    }
  }, [responsive, windowWidth]);

  useEffect(() => {
    const calculatePlacement = () => {
      if (position === "dropright") {
        return "right-start";
      }

      if (position === "dropleft") {
        return "left-start";
      }

      const isEnd = (popperElement && alignment) || newAlignment === "end";

      if (position === "dropup") {
        return isEnd ? "top-end" : "top-start";
      }

      return isEnd ? "bottom-end" : "bottom-start";
    };

    setPlacement(calculatePlacement());
  }, [position, alignment, newAlignment, popperElement]);

  const { styles } = usePopper(referenceElement, popperElement, {
    placement: placement,
    modifiers: [flip],
    ...options,
  });

  const menu = (
    <Tag
      className={classes}
      ref={setPopperElement}
      style={{ position: "absolute", zIndex: 1000, ...styles.popper }}
      alignment={responsive ? newAlignment : alignment}
      {...props}
    >
      {Children.map(children, (child, idx) =>
        cloneElement(child, {
          tabIndex: idx,
          "data-active": activeIndex === idx && true,
        })
      )}
    </Tag>
  );

  return (
    <>
      {!show && !alwaysOpen
        ? null
        : appendToBody
        ? createPortal(menu, document.body)
        : menu}
    </>
  );
};

export default TEDropdownMenu;
