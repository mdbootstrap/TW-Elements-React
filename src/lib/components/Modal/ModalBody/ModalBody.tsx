import React, { useContext } from "react";
import clsx from "clsx";
import type { ModalBodyProps } from "./types";
import modalBodyTheme from "./modalBodyTheme";
import { ModalContext } from "../context/ModalContext";

const TEModalBody: React.FC<ModalBodyProps> = React.forwardRef<
  HTMLAllCollection,
  ModalBodyProps
>(
  (
    { className, children, theme: customTheme, tag: Tag = "div", ...props },
    ref
  ) => {
    const theme = { ...modalBodyTheme, ...customTheme };

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

export default TEModalBody;
