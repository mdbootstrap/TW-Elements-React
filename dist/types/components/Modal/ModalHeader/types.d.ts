import { BaseComponent } from "../../../types/baseComponent";
interface ModalHeaderTheme {
    wrapper?: string;
}
interface ModalHeaderProps extends BaseComponent {
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
    theme?: ModalHeaderTheme;
}
export { ModalHeaderProps };
