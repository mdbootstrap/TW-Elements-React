/*
--------------------------------------------------------------------------
TW Elements React is an open-source UI kit of advanced components for TailwindCSS.
Copyright © 2023 MDBootstrap.com

Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
--------------------------------------------------------------------------
*/

import React, { useContext, MouseEvent } from "react";
import type { DropdownToggleProps } from "./types";
import { DropdownContext } from "../context/DropdownContext";
import { useClickOutside } from "../../../hooks/components/Dropdown/useClickOutside";

const TEDropdownToggle: React.FC<DropdownToggleProps> = ({
  tag: Tag = "button",
  children,
  onClick,
  ...props
}) => {
  const {
    setIsOpenState,
    setReferenceElement,
    isOpenState,
    autoClose,
    setActiveIndex,
    onHide,
    onHidden,
    onShow,
    onShown,
  } = useContext(DropdownContext);

  const handleOpenToggle = (e: MouseEvent<HTMLElement>) => {
    onClick?.(e);

    if (isOpenState && (autoClose === "outside" || autoClose === "inside")) {
      return;
    }

    isOpenState ? onHide?.(e) : onShow?.(e);

    if (e.defaultPrevented) {
      return;
    }
    setIsOpenState((prev) => !prev);

    setTimeout(() => {
      setActiveIndex(-1), isOpenState ? onHidden?.(e) : onShown?.(e);
    }, 300);
  };

  useClickOutside();

  return (
    <Tag
      onClick={handleOpenToggle}
      ref={setReferenceElement}
      aria-expanded={isOpenState ? true : false}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default TEDropdownToggle;
