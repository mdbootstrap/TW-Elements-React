import { BaseComponent } from "../../types/baseComponent";
interface TabsTheme {
    defaultTabs?: string;
    verticalTabs?: string;
    pillsTabs?: string;
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
