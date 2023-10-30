/*
--------------------------------------------------------------------------
TW Elements React is an open-source UI kit of advanced components for TailwindCSS.
Copyright © 2023 MDBootstrap.com

Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
--------------------------------------------------------------------------
*/

import { SyntheticEvent, useCallback, useEffect, useContext } from "react";
import { isNode } from "../../../components/Dropdown/helpers/typeguards";
import { DropdownContext } from "../../../components/Dropdown/context/DropdownContext";

export const useClickOutside = () => {
  const {
    isOpenState,
    setIsOpenState,
    setActiveIndex,
    popperElement,
    referenceElement,
    autoClose,
    onHide,
    onHidden,
  } = useContext(DropdownContext);

  const handleClickOutside = useCallback(
    (e: MouseEvent | SyntheticEvent) => {
      if (
        !isOpenState ||
        !isNode(e.target) ||
        (popperElement && popperElement.contains(e.target)) ||
        (referenceElement && referenceElement.contains(e.target)) ||
        e.defaultPrevented
      ) {
        return;
      }
      onHide?.(e);
      setIsOpenState(false);

      setTimeout(() => {
        setActiveIndex(-1), onHidden?.(e);
      }, 300);
    },
    [
      isOpenState,
      setIsOpenState,
      setActiveIndex,
      popperElement,
      referenceElement,
      onHide,
      onHidden,
    ]
  );

  useEffect(() => {
    if (autoClose === false || autoClose === "inside") {
      return;
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside, autoClose]);
};
