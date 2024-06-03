import { BaseComponent } from "../../../types/baseComponent";
interface ModalBodyTheme {
    wrapper?: string;
}
interface ModalBodyProps extends BaseComponent {
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
    theme?: ModalBodyTheme;
}
export { ModalBodyProps };
