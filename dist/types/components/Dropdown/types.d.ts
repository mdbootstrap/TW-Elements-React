import { BaseComponent } from "../../types/baseComponent";
import { ReactNode, ComponentProps, SyntheticEvent } from "react";
interface DropdownTheme {
    dropdown?: string;
}
export interface DropdownProps extends BaseComponent {
    animation?: boolean;
    isOpen?: boolean;
    children?: ReactNode;
    tag?: ComponentProps<any>;
    theme?: DropdownTheme;
    autoClose?: boolean | string;
    onHide?: (e: MouseEvent | SyntheticEvent | KeyboardEvent) => any;
    onHidden?: (e: MouseEvent | SyntheticEvent | KeyboardEvent) => any;
    onShow?: (e: MouseEvent | SyntheticEvent | KeyboardEvent) => any;
    onShown?: (e: MouseEvent | SyntheticEvent | KeyboardEvent) => any;
}
export {};
