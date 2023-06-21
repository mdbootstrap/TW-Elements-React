import clsx from "clsx";
import React from "react";
import type { TabsProps } from "./types";
import tabsTheme from "./tabsTheme";
import { TabsContext } from "./context/TabsContext";

const TETabs: React.FC<TabsProps> = React.forwardRef<
  HTMLUListElement,
  TabsProps
>(
  (
    {
      className,
      children,
      theme: customTheme,
      fill,
      justify,
      vertical,
      pills,
      ...props
    },
    ref
  ) => {
    const theme = {
      ...tabsTheme,
      ...customTheme,
    };

    const classes = clsx(
      pills
        ? vertical
          ? theme.verticalTabs
          : theme.pillsTabs
        : vertical
        ? theme.verticalTabs
        : theme.defaultTabs,
      className
    );

    return (
      <TabsContext.Provider
        value={{
          fill: fill,
          justify: justify,
          vertical: vertical,
          pills: pills,
        }}
      >
        <ul className={classes} ref={ref} {...props}>
          {children}
        </ul>
      </TabsContext.Provider>
    );
  }
);

TETabs.defaultProps = {
  fill: false,
  justify: false,
  vertical: false,
  pills: false,
};

export default TETabs;
