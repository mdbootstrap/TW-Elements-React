/*
--------------------------------------------------------------------------
Tailwind Elements React is an open-source UI kit of advanced components for TailwindCSS.
Copyright © 2023 MDBootstrap.com

Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
--------------------------------------------------------------------------
*/

import clsx from "clsx";
import React, { useCallback, useEffect, useState } from "react";
import type { PopoverProps } from "./types";
import ReactDOM from "react-dom";
import { usePopper } from "react-popper";
import PopoverTheme from "./popoverTheme";

const TEPopover: React.FC<PopoverProps> = ({
  className,
  btnClassName,
  btnChildren,
  children,
  tag: Tag = "button",
  onShow,
  onHide,
  popperTag: PopperTag = "div",
  isOpen = false,
  placement = "right",
  dismiss = false,
  options,
  poperStyle,
  onClick,
  theme: customTheme,
  ...props
}): JSX.Element => {
  const [referenceElement, setReferenceElement] = useState<HTMLElement>();
  const [popperElement, setPopperElement] = useState<HTMLElement>();
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    ...options,
  });
  const [isOpenState, setIsOpenState] = useState<boolean>(isOpen ?? false);
  const [attachELements, setAttachELements] = useState(false);

  const [isClickOutside, setIsClickOutside] = useState(false);

  const theme = {
    ...PopoverTheme,
    ...customTheme,
  };

  const classes = clsx(
    theme.popover,
    theme.fade,
    attachELements && isOpenState ? "opacity-100" : "opacity-0",
    className
  );

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
      setAttachELements(isOpenState);
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
    <>
      <Tag
        onClick={handleBtnClick}
        className={btnClassName}
        {...props}
        ref={setReferenceElement}
      >
        {btnChildren}
      </Tag>

      {(attachELements || isOpenState) &&
        ReactDOM.createPortal(
          <PopperTag
            className={classes}
            ref={setPopperElement}
            style={{ ...styles.popper, ...poperStyle }}
            {...attributes.popper}
          >
            {children}
          </PopperTag>,
          document.body
        )}
    </>
  );
};

export default TEPopover;
