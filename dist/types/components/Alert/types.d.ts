import { HTMLAttributes } from "react";
interface AlertTheme {
    wrapper: string;
    wrapperTransition: string;
    wrapperVisible: string;
    wrapperHidden: string;
    defaultColor: string;
    dismissButton: string;
    dismissButtonWrapper: string;
}
interface AlertProps extends HTMLAttributes<HTMLElement> {
    open?: boolean;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    animation?: boolean;
    autohide?: boolean;
    children?: React.ReactNode;
    color?: string;
    delay?: number;
    dismiss?: boolean;
    dismissTemplate?: React.ReactNode;
    onClose?: () => void;
    onClosed?: () => void;
    staticAlert?: boolean;
    tag?: React.ElementType;
    theme?: AlertTheme;
}
export type { AlertProps };
