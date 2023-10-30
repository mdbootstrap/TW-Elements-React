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
import { DropdownItemProps } from "./types";
import { DropdownContext } from "../context/DropdownContext";

const TEDropdownItem: React.FC<DropdownItemProps> = ({
  tag: Tag = "li",
  onClick,
  children,
  preventCloseOnClick,
  ...props
}) => {
  const { autoClose, setIsOpenState, onHide, onHidden, setActiveIndex } =
    useContext(DropdownContext);

  const handleClose = (e: MouseEvent<HTMLElement>) => {
    if (preventCloseOnClick || e.defaultPrevented) {
      return;
    }

    if (autoClose === true || autoClose === "inside") {
      onHide?.(e);
      onClick?.(e);

      setTimeout(() => {
        setActiveIndex(-1), onHidden?.(e);
      }, 300);
      setIsOpenState(false);
    }
  };

  return (
    <Tag onClick={handleClose} {...props}>
      {children}
    </Tag>
  );
};

export default TEDropdownItem;
