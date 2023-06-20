import { BaseComponent } from "../../types/baseComponent";

interface TabsTheme {
  defaultTabsStyles?: string;
  verticalTabsStyles?: string;
  pillsTabsStyles?: string;
}

interface TabsProps extends BaseComponent {
  ref?: React.Ref<any>;
  theme?: TabsTheme;
  fill?: boolean;
  justify?: boolean;
  vertical?: boolean;
  pills?: boolean;
}

export { TabsProps };
