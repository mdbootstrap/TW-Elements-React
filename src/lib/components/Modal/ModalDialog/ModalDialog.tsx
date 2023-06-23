import React, { useContext, useEffect, useState, useRef } from "react";
import clsx from "clsx";
import type { ModalDialogProps } from "./types";
import modalDialogTheme from "./modalDialogTheme";
import { ModalContext } from "../context/ModalContext";

const MDBModalDialog: React.FC<ModalDialogProps> = ({
  className,
  centered,
  position,
  animationDirection = "top",
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

  const interval = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const dialogTransitionTimeRef = useRef<number>(0);

  const classes = clsx(
    theme.wrapper,
    isOpen ? theme.show : theme.hidden,
    scrollable && theme.scrollable,
    centered && theme.centered,
    position ? theme[position] : theme.wrapperPositionDefault,
    size && theme[size] ? theme[size] : theme.sizeDefault,
    className
  );

  useEffect(() => {
    if (dialogRef.current) {
      const { transitionDuration } = window.getComputedStyle(dialogRef.current);
      const time = Number(transitionDuration.replace("s", "")) * 1000;
      dialogTransitionTimeRef.current = time;
      setTransitionDuration(time);
    }
  }, []);

  useEffect(() => {
    if (isOpenModal) {
      interval.current = setTimeout(() => {
        setIsOpen(isOpenModal);
      }, 50);
    } else {
      setIsOpen(isOpenModal);
    }
    return () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  }, [isOpenModal]);

  return (
    <Tag className={classes} {...props} ref={dialogRef}>
      {children}
    </Tag>
  );
};

export default MDBModalDialog;
