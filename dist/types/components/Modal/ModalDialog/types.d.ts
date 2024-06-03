import { BaseComponent } from "../../../types/baseComponent";
interface ModalDialogTheme {
    centered?: string;
    fullscreen?: string;
    hidden?: string;
    scrollable?: string;
    show?: string;
    sizeDefault?: string;
    wrapper?: string;
    wrapperPositionDefault?: string;
    "bottom-left"?: string;
    "bottom-right"?: string;
    "top-left"?: string;
    "top-right"?: string;
    sm?: string;
    lg?: string;
    xl?: string;
}
interface ModalDialogProps extends BaseComponent {
    centered?: boolean;
    size?: "sm" | "lg" | "xl" | "fullscreen";
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
    theme?: ModalDialogTheme;
}
export { ModalDialogProps };
