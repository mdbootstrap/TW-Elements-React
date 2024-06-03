import { ComponentProps, HTMLAttributes, RefObject } from "react";
interface CollapseTheme {
    visible?: string;
    hidden?: string;
    baseTransition?: string;
    collapsing?: string;
    collapsingHorizontal?: string;
    collapseStyles?: string;
    scrollStyles?: string;
}
interface CollapseProps extends HTMLAttributes<HTMLElement> {
    collapseRef?: RefObject<HTMLElement>;
    show?: boolean;
    tag?: ComponentProps<any>;
    onShow?: any;
    onHide?: any;
    horizontal?: boolean;
    scroll?: boolean;
    theme?: CollapseTheme;
}
export type { CollapseProps };
