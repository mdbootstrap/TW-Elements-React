interface TabsItemTheme {
    fillTabsItem?: string;
    justifyTabsItem?: string;
    verticalTabsItem?: string;
    tabsLink?: string;
    pillsLink?: string;
    inactiveTabsLink?: string;
    inactivePillsLink?: string;
    disabledTabsLink?: string;
    disabledPillsLink?: string;
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
    color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
}
export { TabsItemProps };
