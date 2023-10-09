import React, { useContext, useEffect, useState, useRef } from "react";
import clsx from "clsx";
import type { ModalDialogProps } from "./types";
import modalDialogTheme from "./modalDialogTheme";
import { ModalContext } from "../context/ModalContext";
import { useTransition } from "../../../hooks/useTransition";

const MDBModalDialog: React.FC<ModalDialogProps> = ({
  className,
  centered,
  position,
  children,
  size,
  theme: customTheme,
  tag: Tag = "div",
  ...props
}) => {
  const theme = { ...modalDialogTheme, ...customTheme };

  const { isOpenModal, setTransitionDuration, scrollable } =
    useContext(ModalContext);

  const [isOpen, setIsOpen] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);

  const classes = clsx(
    theme.wrapper,
    isOpen ? theme.show : theme.hidden,
    scrollable && theme.scrollable,
    centered && theme.centered,
    position ? theme[position] : theme.wrapperPositionDefault,
    size && theme[size] ? theme[size] : theme.sizeDefault,
    className
  );

  const { transitionDuration } = useTransition(dialogRef.current);

  useEffect(() => {
    setTransitionDuration(transitionDuration);
  }, [transitionDuration]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isOpenModal) {
      timer = setTimeout(() => {
        setIsOpen(true);
      }, 50);
    } else {
      setIsOpen(false);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isOpenModal]);

  return (
    <Tag className={classes} {...props} ref={dialogRef}>
      {children}
    </Tag>
  );
};

export default MDBModalDialog;
