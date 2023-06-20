import clsx from "clsx";
import React from "react";
import type { TabsContentProps } from "./types";
import TabsContentTheme from "./tabsContentTheme";

const TETabsContent: React.FC<TabsContentProps> = React.forwardRef<
  HTMLAllCollection,
  TabsContentProps
>(({ className, tag: Tag, children, theme: customTheme, ...props }, ref) => {
  const theme = {
    ...TabsContentTheme,
    ...customTheme,
  };
  const classes = clsx(theme.tabsContentStyles, className);

  return (
    <Tag className={classes} ref={ref} {...props}>
      {children}
    </Tag>
  );
});

TETabsContent.defaultProps = { tag: "div" };

export default TETabsContent;
