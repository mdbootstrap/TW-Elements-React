import clsx from "clsx";
import React, { useContext } from "react";
import type { TabsItemProps } from "./types";
import { TabsContext } from "../context/TabsContext";
import TabsItemTheme from "./tabsItemTheme";

const TETabsItem: React.FC<TabsItemProps> = /*#__PURE__*/ React.forwardRef<
  HTMLAnchorElement | HTMLButtonElement | HTMLLIElement,
  TabsItemProps
>(
  (
    {
      className,
      wrapperClass,
      active = false,
      disabled = false,
      color = "primary",
      children,
      theme: customTheme,
      tag: Tag = "a",
      ...props
    },
    ref
  ) => {
    const { fill, justify, vertical, pills } = useContext(TabsContext);
    const theme = {
      ...TabsItemTheme,
      ...customTheme,
    };
    const wrapperClasses = clsx(
      fill && theme.fillTabsItem,
      justify && theme.justifyTabsItem,
      vertical && theme.verticalTabsItem,
      disabled && theme.disabledTabsItem,
      wrapperClass
    );

    const tabsColors = {
      primary: {
        tabs: theme.activePrimaryTabsLink,
        pills: theme.activePrimaryPillsLink,
      },
      secondary: {
        tabs: theme.activeSecondaryTabsLink,
        pills: theme.activeSecondaryPillsLink,
      },
      success: {
        tabs: theme.activeSuccessTabsLink,
        pills: theme.activeSuccessPillsLink,
      },
      danger: {
        tabs: theme.activeDangerTabsLink,
        pills: theme.activeDangerPillsLink,
      },
      warning: {
        tabs: theme.activeWarningTabsLink,
        pills: theme.activeWarningPillsLink,
      },
      info: {
        tabs: theme.activeInfoTabsLink,
        pills: theme.activeInfoPillsLink,
      },
      light: {
        tabs: theme.activeLightTabsLink,
        pills: theme.activeLightPillsLink,
      },
      dark: {
        tabs: theme.activeDarkTabsLink,
        pills: theme.activeDarkPillsLink,
      },
    };

    const classes = clsx(
      pills ? theme.pillsLink : theme.tabsLink,
      disabled
        ? pills
          ? theme.disabledPillsLink
          : theme.disabledTabsLink
        : "",
      pills && !disabled
        ? active
          ? tabsColors[color].pills
          : theme.inactivePillsLink
        : active
        ? tabsColors[color].tabs
        : theme.inactiveTabsLink,
      className
    );

    return (
      <li className={wrapperClasses} role="presentation" ref={ref} {...props}>
        <Tag className={classes} ref={ref} role="tab" {...props}>
          {children}
        </Tag>
      </li>
    );
  }
);

export default TETabsItem;
