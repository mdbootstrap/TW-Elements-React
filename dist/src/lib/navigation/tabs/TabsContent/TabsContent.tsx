import clsx from "clsx";
import React from "react";
import type { TabsContentProps } from "./types";
import TabsContentTheme from "./tabsContentTheme";

const TETabsContent: React.FC<TabsContentProps> =
  /*#__PURE__*/ React.forwardRef<HTMLAllCollection, TabsContentProps>(
    (
      { className, tag: Tag = "div", children, theme: customTheme, ...props },
      ref
    ) => {
      const theme = {
        ...TabsContentTheme,
        ...customTheme,
      };
      const classes = clsx(theme.tabsContent, className);

      return (
        <Tag className={classes} ref={ref} {...props}>
          {children}
        </Tag>
      );
    }
  );

export default TETabsContent;
