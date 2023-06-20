import { BaseComponent } from "../../../types/baseComponent";

interface TabsPaneTheme {
  tabsPaneStyles?: string;
  isShown?: string;
  isHidden?: string;
  activeTabsPane?: string;
  inactiveTabsPane?: string;
}

interface TabsPaneProps extends BaseComponent {
  show?: boolean;
  tag?: React.ComponentProps<any>;
  ref?: React.Ref<any>;
  theme?: TabsPaneTheme;
}

export { TabsPaneProps };
