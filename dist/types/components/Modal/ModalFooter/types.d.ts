import { BaseComponent } from "../../../types/baseComponent";
interface ModalFooterTheme {
    wrapper?: string;
}
interface ModalFooterProps extends BaseComponent {
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
    theme?: ModalFooterTheme;
}
export { ModalFooterProps };
