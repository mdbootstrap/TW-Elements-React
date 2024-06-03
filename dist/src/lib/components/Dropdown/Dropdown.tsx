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
