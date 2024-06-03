import React from "react";
import clsx from "clsx";
import type { ModalHeaderProps } from "./types";
import modalHeaderTheme from "./modalHeaderTheme";

const TEModalHeader: React.FC<ModalHeaderProps> = React.forwardRef<
  HTMLAllCollection,
  ModalHeaderProps
>(
  (
    { className, children, theme: customTheme, tag: Tag = "div", ...props },
    ref
  ) => {
    const theme = { ...modalHeaderTheme, ...customTheme };
    const classes = clsx(theme.wrapper, className);

    return (
      <Tag className={classes} {...props} ref={ref}>
        {children}
      </Tag>
    );
  }
);

export default TEModalHeader;
