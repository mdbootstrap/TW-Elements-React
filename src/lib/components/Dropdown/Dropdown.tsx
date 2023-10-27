/*
--------------------------------------------------------------------------
TW Elements React is an open-source UI kit of advanced components for TailwindCSS.
Copyright © 2023 MDBootstrap.com

Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
--------------------------------------------------------------------------
*/

import React, { useEffect, useState } from "react";
import clsx from "clsx";
import type { DropdownProps } from "./types";
import { DropdownContext } from "./context/DropdownContext";
import DropdownTheme from "./DropdownTheme";

const TEDropdown: React.FC<DropdownProps> = ({
  className,
  tag: Tag = "div",
  animation = true,
  isOpen = false,
  onHide,
  onHidden,
  onShow,
  onShown,
  children,
  autoClose = true,
  theme: customTheme,
  ...props
}) => {
  const [isOpenState, setIsOpenState] = useState<boolean>(isOpen);
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null
  );
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  useEffect(() => {
    setIsOpenState(isOpen);
  }, [isOpen]);

  const theme = {
    ...customTheme,
    ...DropdownTheme,
  };

  const classes = clsx(theme.dropdown, className);
  return (
    <DropdownContext.Provider
      value={{
        animation,
        activeIndex,
        isOpenState,
        setReferenceElement,
        setPopperElement,
        setActiveIndex,
        popperElement,
        setIsOpenState,
        referenceElement,
        autoClose,
        onHide,
        onHidden,
        onShow,
        onShown,
      }}
    >
      <Tag className={classes} {...props}>
        {children}
      </Tag>
    </DropdownContext.Provider>
  );
};

export default TEDropdown;
