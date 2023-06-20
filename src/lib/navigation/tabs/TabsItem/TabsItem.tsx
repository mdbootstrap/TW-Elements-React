import clsx from "clsx";
import React, { useContext, useEffect } from "react";
import type { TabsItemProps } from "./types";
import { TabsContext } from "../tabs-context";
import TabsItemTheme from "./tabsItemTheme";

const TETabsItem: React.FC<TabsItemProps> = React.forwardRef<
  HTMLAnchorElement | HTMLButtonElement | HTMLLIElement,
  TabsItemProps
>(
  (
    {
      className,
      wrapperClass,
      active,
      disabled,
      color,
      children,
      onShow,
      onHide,
      theme: customTheme,
      tag: Tag,
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

    const classes = clsx(
      pills ? theme.pillsLinkStyles : theme.tabsLinkStyles,
      disabled
        ? pills
          ? theme.disabledPillsLinkStyles
          : theme.disabledTabsLinkStyles
        : "",
      pills && !disabled
        ? active
          ? color === "primary"
            ? theme.activePrimaryPillsLink
            : color === "secondary"
            ? theme.activeSecondaryPillsLink
            : color === "success"
            ? theme.activeSuccessPillsLink
            : color === "danger"
            ? theme.activeDangerPillsLink
            : color === "warning"
            ? theme.activeWarningPillsLink
            : color === "info"
            ? theme.activeInfoPillsLink
            : color === "light"
            ? theme.activeLightPillsLink
            : color === "dark"
            ? theme.activeDarkPillsLink
            : theme.activePrimaryPillsLink
          : theme.inactivePillsLinkStyles
        : active
        ? color === "primary"
          ? theme.activePrimaryTabsLink
          : color === "secondary"
          ? theme.activeSecondaryTabsLink
          : color === "success"
          ? theme.activeSuccessTabsLink
          : color === "danger"
          ? theme.activeDangerTabsLink
          : color === "warning"
          ? theme.activeWarningTabsLink
          : color === "info"
          ? theme.activeInfoTabsLink
          : color === "light"
          ? theme.activeLightTabsLink
          : color === "dark"
          ? theme.activeDarkTabsLink
          : theme.activePrimaryTabsLink
        : theme.inactiveTabsLinkStyles,
      className
    );

    useEffect(() => {
      if (active) {
        onShow?.();
      } else {
        onHide?.();
      }
      // eslint-disable-next-line
    }, [active, disabled]);

    return (
      <li className={wrapperClasses} role="presentation" ref={ref} {...props}>
        <Tag className={classes} ref={ref} role="tab" {...props}>
          {children}
        </Tag>
      </li>
    );
  }
);

TETabsItem.defaultProps = { tag: "a", active: false, disabled: false };

export default TETabsItem;
