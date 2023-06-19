import React from "react";
import clsx from "clsx";
import type { ModalFooterProps } from "./types";
import modalFooterTheme from "./modalFooterTheme";

const TEModalFooter: React.FC<ModalFooterProps> = React.forwardRef<
  HTMLAllCollection,
  ModalFooterProps
>(({ className, children, theme: customTheme, tag: Tag, ...props }, ref) => {
  const theme = { ...modalFooterTheme, ...customTheme };

  const classes = clsx(theme.wrapper, className);

  return (
    <Tag className={classes} {...props} ref={ref}>
      {children}
    </Tag>
  );
});

TEModalFooter.defaultProps = { tag: "div" };

export default TEModalFooter;
