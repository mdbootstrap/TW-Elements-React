import { BaseComponent } from "../../../types/baseComponent";
import { ReactNode, ComponentProps } from "react";
export interface DropdownItemProps extends BaseComponent {
    tag?: ComponentProps<any>;
    children?: ReactNode;
    preventCloseOnClick?: boolean;
}
