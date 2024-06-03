import { HTMLAttributes } from "react";
interface ToastTheme {
    wrapper: string;
    wrapperTransition: string;
    wrapperVisible: string;
    wrapperHidden: string;
    defaultColor: string;
}
interface ToastProps extends HTMLAttributes<HTMLElement> {
    open?: boolean;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    animation?: boolean;
    autohide?: boolean;
    children?: React.ReactNode;
    color?: string;
    delay?: number;
    onClose?: () => void;
    onClosed?: () => void;
    onShow?: () => void;
    onShown?: () => void;
    staticToast?: boolean;
    tag?: React.ElementType;
    theme?: ToastTheme;
}
export type { ToastProps };
