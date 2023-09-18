import { BaseComponent } from "../../../types/baseComponent";

interface PopoverContentTheme {
  popoverContent?: string;
  fade?: string;
}

interface PopoverContentProps extends BaseComponent {
  poperStyle?: React.CSSProperties;
  popperTag?: React.ComponentProps<any>;
  theme?: PopoverContentTheme;
  container?: string | boolean;
}

export { PopoverContentProps };
