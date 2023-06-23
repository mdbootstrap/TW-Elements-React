import React, { useContext } from "react";
import clsx from "clsx";
import type { ModalContentProps } from "./types";
import modalContentTheme from "./modalContentTheme";
import { ModalContext } from "../context/ModalContext";

const TEModalContent: React.FC<ModalContentProps> = React.forwardRef<
  HTMLAllCollection,
  ModalContentProps
>(
  (
    { className, children, theme: customTheme, tag: Tag = "div", ...props },
    ref
  ) => {
    const theme = { ...modalContentTheme, ...customTheme };

    const { scrollable } = useContext(ModalContext);

    const classes = clsx(
      theme.wrapper,
      scrollable && theme.scrollable,
      className
    );

    return (
      <Tag className={classes} {...props} ref={ref}>
        {children}
      </Tag>
    );
  }
);

export default TEModalContent;
