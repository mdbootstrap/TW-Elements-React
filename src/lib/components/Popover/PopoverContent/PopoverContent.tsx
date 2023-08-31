/*
--------------------------------------------------------------------------
Tailwind Elements React is an open-source UI kit of advanced components for TailwindCSS.
Copyright © 2023 MDBootstrap.com

Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
--------------------------------------------------------------------------
*/

import React, { useContext } from "react";
import ReactDOM from "react-dom";
import clsx from "clsx";
import type { PopoverContentProps } from "../PopoverContent/types";
import { PopoverContext } from "../context/PopoverContext";
import PopoverContentTheme from "./PopoverContentTheme";

const TEPopoverContent: React.FC<PopoverContentProps> = ({
  className,
  children,
  theme: customTheme,
  popperStyle,
  popperTag: PopperTag = "div",
}): JSX.Element => {
  const { attachELements, isOpenState, setPopperElement, styles, attributes } =
    useContext(PopoverContext);

  const theme = {
    ...PopoverContentTheme,
    ...customTheme,
  };

  const classes = clsx(
    theme.popoverContent,
    theme.fade,
    attachELements && isOpenState ? "opacity-100" : "opacity-0",
    className
  );

  return (
    <>
      {(attachELements || isOpenState) &&
        ReactDOM.createPortal(
          <PopperTag
            className={classes}
            ref={setPopperElement}
            style={{ ...styles.popper, ...popperStyle }}
            {...attributes.popper}
          >
            {children}
          </PopperTag>,
          document.body
        )}
    </>
  );
};

export default TEPopoverContent;
