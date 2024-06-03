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
