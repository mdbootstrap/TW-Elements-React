import React, { SyntheticEvent } from "react";
import { BaseComponent } from "../../types/baseComponent";
interface PopoverProps extends BaseComponent {
    isOpen?: boolean;
    tag?: React.ComponentProps<any>;
    enabled?: boolean;
    trigger?: string;
    onShow?: (e: SyntheticEvent) => any;
    onShown?: () => any;
    onHide?: (e: SyntheticEvent) => any;
    onHidden?: () => any;
    onMouseEnter?: (e: SyntheticEvent) => any;
    onMouseLeave?: (e: SyntheticEvent) => any;
}
export { PopoverProps };
