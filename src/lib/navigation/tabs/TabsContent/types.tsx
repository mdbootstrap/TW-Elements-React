import { BaseComponent } from "../../../types/baseComponent";

interface TabsContentTheme {
  tabsContent?: string;
}

interface TabsContentProps extends BaseComponent {
  tag?: React.ComponentProps<any>;
  ref?: React.Ref<any>;
  theme?: TabsContentTheme;
}

export { TabsContentProps };
