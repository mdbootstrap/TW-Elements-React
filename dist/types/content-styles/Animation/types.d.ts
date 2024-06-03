import React from "react";
import { BaseComponent } from "../../types/baseComponent";
interface AnimationProps extends BaseComponent {
    animation?: string;
    reset?: boolean;
    start?: string;
    repeat?: boolean | number;
    delay?: number;
    reverse?: boolean;
    interval?: number;
    toggle?: boolean;
    animationRef?: React.RefObject<any>;
    offset?: number;
    repeatOnScroll?: boolean;
    showOnLoad?: boolean;
    beginHidden?: boolean;
    onStart?: () => any;
    onEnd?: () => any;
    onShow?: () => any;
    onHide?: () => any;
}
export { AnimationProps };
