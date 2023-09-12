/*
--------------------------------------------------------------------------
Tailwind Elements React is an open-source UI kit of advanced components for TailwindCSS.
Copyright © 2023 MDBootstrap.com

Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
--------------------------------------------------------------------------
*/

import React, { useContext, MouseEvent } from "react";
import { DropdownItemProps } from "./types";
import { DropdownContext } from "../context/DropdownContext";
import DropdownItemTheme from "./DrodpownItemTheme";
import { DrodpownItemChild } from "./DropdownItemChild/DropdownItemChild";

const TEDropdownItem: React.FC<DropdownItemProps> = ({
  tag: Tag = "li",
  className,
  theme: customTheme,
  childTag: ChildTag,
  onClick,
  link,
  linkClasses,
  divider,
  header,
  disabled,
  children,
  href,
  preventCloseOnClick,
  ...props
}) => {
  const theme = {
    ...customTheme,
    ...DropdownItemTheme,
  };

  const { setIsOpenState, onHide, setActiveIndex } =
    useContext(DropdownContext);

  const handleClose = (e: MouseEvent<HTMLElement>) => {
    onHide?.(e);
    onClick?.(e);
    if (disabled || preventCloseOnClick || e.defaultPrevented) {
      return;
    }

    setTimeout(() => setActiveIndex(-1), 300);
    setIsOpenState(false);
  };

  return (
    <Tag onClick={handleClose} className={className} {...props}>
      <DrodpownItemChild
        className={linkClasses}
        theme={theme}
        link={link}
        href={href}
        childTag={ChildTag}
        children={children}
        divider={divider}
        header={header}
        disabled={disabled}
      />
    </Tag>
  );
};

export default TEDropdownItem;
