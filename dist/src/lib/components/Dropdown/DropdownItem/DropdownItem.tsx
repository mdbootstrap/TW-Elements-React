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
