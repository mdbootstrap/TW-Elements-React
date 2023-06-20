import clsx from "clsx";
import React, { useState, useEffect } from "react";
import type { TabsPaneProps } from "./types";
import TabsPaneTheme from "./tabsPaneTheme";

const TETabsPane: React.FC<TabsPaneProps> = React.forwardRef<
  HTMLAllCollection,
  TabsPaneProps
>(
  (
    { className, tag: Tag, show, theme: customTheme, children, ...props },
    ref
  ) => {
    const [isReadyToHide, setIsReadyToHide] = useState(false);

    const theme = {
      ...TabsPaneTheme,
      ...customTheme,
    };

    const classes = clsx(
      theme.tabsPaneStyles,
      show ? theme.isShown : theme.isHidden,
      isReadyToHide ? theme.activeTabsPane : theme.inactiveTabsPane,
      className
    );

    useEffect(() => {
      let timer: ReturnType<typeof setTimeout>;

      if (show) {
        timer = setTimeout(() => {
          setIsReadyToHide(true);
        }, 100);
      } else {
        setIsReadyToHide(false);
      }
      return () => {
        clearTimeout(timer);
      };
    }, [show]);

    return (
      <Tag className={classes} role="tabpanel" ref={ref} {...props}>
        {children}
      </Tag>
    );
  }
);

TETabsPane.defaultProps = { tag: "div", show: false };

export default TETabsPane;
