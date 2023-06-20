interface TabsItemTheme {
  fillTabsItem?: string;
  justifyTabsItem?: string;
  verticalTabsItem?: string;
  tabsLinkStyles?: string;
  pillsLinkStyles?: string;
  inactiveTabsLinkStyles?: string;
  inactivePillsLinkStyles?: string;
  disabledTabsLinkStyles?: string;
  disabledPillsLinkStyles?: string;
  activePrimaryPillsLink?: string;
  activeSecondaryPillsLink?: string;
  activeSuccessPillsLink?: string;
  activeDangerPillsLink?: string;
  activeWarningPillsLink?: string;
  activeInfoPillsLink?: string;
  activeLightPillsLink?: string;
  activeDarkPillsLink?: string;
  activePrimaryTabsLink?: string;
  activeSecondaryTabsLink?: string;
  activeSuccessTabsLink?: string;
  activeDangerTabsLink?: string;
  activeWarningTabsLink?: string;
  activeInfoTabsLink?: string;
  activeLightTabsLink?: string;
  activeDarkTabsLink?: string;
}

interface TabsItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  ref?: React.Ref<any>;
  theme?: TabsItemTheme;
  tag?: React.ComponentProps<any>;
  wrapperClass?: string;
  active?: boolean;
  disabled?: boolean;
  color?: string;
  onShow?: () => any;
  onHide?: () => any;
}

export { TabsItemProps };
