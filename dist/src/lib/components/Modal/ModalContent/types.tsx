import { BaseComponent } from "../../../types/baseComponent";

interface ModalContentTheme {
  scrollable?: string;
  wrapper?: string;
}

interface ModalContentProps extends BaseComponent {
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
  theme?: ModalContentTheme;
}

export { ModalContentProps };
