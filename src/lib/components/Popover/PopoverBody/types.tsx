import { BaseComponent } from "../../../types/baseComponent";

interface PopoverBodyTheme {
  popoverBody?: string;
}

interface PopoverBodyProps extends BaseComponent {
  tag?: React.ComponentProps<any>;
  theme?: PopoverBodyTheme;
}

export { PopoverBodyProps };
