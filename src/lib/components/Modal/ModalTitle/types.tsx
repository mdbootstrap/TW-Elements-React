import { BaseComponent } from "../../../types/baseComponent";

interface ModalTitleTheme {
  wrapper: string;
}

interface ModalTitleProps extends BaseComponent {
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
  theme?: ModalTitleTheme;
}

export { ModalTitleProps };
