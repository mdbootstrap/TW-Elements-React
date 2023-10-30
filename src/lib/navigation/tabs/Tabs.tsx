/*
--------------------------------------------------------------------------
TW Elements React is an open-source UI kit of advanced components for TailwindCSS.
Copyright © 2023 MDBootstrap.com

Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
--------------------------------------------------------------------------
*/

import clsx from "clsx";
import React from "react";
import type { TabsProps } from "./types";
import tabsTheme from "./tabsTheme";
import { TabsContext } from "./context/TabsContext";

const TETabs: React.FC<TabsProps> = /*#__PURE__*/ React.forwardRef<
  HTMLUListElement,
  TabsProps
>(
  (
    {
      className,
      children,
      theme: customTheme,
      fill = false,
      justify = false,
      vertical = false,
      pills = false,
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

export default TETabs;
