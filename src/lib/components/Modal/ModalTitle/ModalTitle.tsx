import React from "react";
import clsx from "clsx";
import type { ModalTitleProps } from "./types";
import modalTitleTheme from "./modalTitleTheme";

const TEModalTitle: React.FC<ModalTitleProps> = React.forwardRef<
  HTMLAllCollection,
  ModalTitleProps
>(({ className, children, theme: customTheme, tag: Tag, ...props }, ref) => {
  const theme = { ...modalTitleTheme, ...customTheme };

  const classes = clsx(theme.wrapper, className);

  return (
    <Tag className={classes} {...props} ref={ref}>
      {children}
    </Tag>
  );
});

TEModalTitle.defaultProps = { tag: "h5" };

export default TEModalTitle;
