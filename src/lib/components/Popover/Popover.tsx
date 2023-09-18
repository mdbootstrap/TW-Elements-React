/*
--------------------------------------------------------------------------
Tailwind Elements React is an open-source UI kit of advanced components for TailwindCSS.
Copyright © 2023 MDBootstrap.com

Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
--------------------------------------------------------------------------
*/

import React, { useCallback, useEffect, useState } from "react";
import type { PopoverProps } from "./types";
import { usePopper } from "react-popper";
import { PopoverContext } from "./context/PopoverContext";

const TEPopover: React.FC<PopoverProps> = ({
  children,
  tag: Tag = "div",
  onShow,
  onHide,
  isOpen = false,
  placement = "right",
  dismiss = false,
  popperConfig,
  offset = [0, 0],
  fallbackPlacements = ["top", "bottom", "right", "left"],
  boundary = "clippingParents",
  onClick,
  ...props
}): JSX.Element => {
  const [isOpenState, setIsOpenState] = useState<boolean>(isOpen ?? false);
  const [attachELements, setAttachElements] = useState(false);
  const [isClickOutside, setIsClickOutside] = useState(false);
  const [referenceElement, setReferenceElement] = useState<HTMLElement>();
  const [popperElement, setPopperElement] = useState<HTMLElement>();

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
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
  });

  const handleBtnClick = (e: any) => {
    if (isOpenState && !dismiss) {
      onHide?.();
    } else if (!isOpenState) {
      onShow?.();
    }
    if (dismiss) {
      setIsClickOutside(true);
      setIsOpenState(true);
    } else {
      setIsOpenState(!isOpenState);
    }

    onClick && onClick(e);
  };

  useEffect(() => {
    if (!isOpen) {
      setIsOpenState(false);
    }
  }, [isOpen]);

  const handleClickOutside = useCallback(
    (e: any) => {
      if (
        isClickOutside &&
        popperElement &&
        popperElement !== null &&
        isOpenState &&
        referenceElement &&
        referenceElement !== null
      ) {
        if (!referenceElement.contains(e.target as Node)) {
          setIsOpenState(false);
          onHide?.();
        }
      }
    },
    [isClickOutside, isOpenState, popperElement, referenceElement, onHide]
  );

  useEffect(() => {
    const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
      setAttachElements(isOpenState);
    }, 150);

    return () => {
      clearTimeout(timer);
    };
  }, [isOpenState]);

  useEffect(() => {
    if (isOpenState) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside, isOpenState]);

  return (
    <PopoverContext.Provider
      value={{
        handleBtnClick,
        setReferenceElement,
        attachELements,
        isOpenState,
        setPopperElement,
        styles,
        attributes,
      }}
    >
      <Tag {...props}>{children}</Tag>
    </PopoverContext.Provider>
  );
};

export default TEPopover;
