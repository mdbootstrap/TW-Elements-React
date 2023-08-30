import { placement } from "../../types/placement";
import { BaseComponent } from "../../types/baseComponent";

interface PopoverTheme {
  popover?: string;
  fade?: string;
}

interface PopoverProps extends BaseComponent {
  btnChildren?: React.ReactNode;
  btnClassName?: string;
  dismiss?: boolean;
  isOpen?: boolean;
  options?: Record<string, unknown>;
  placement?: placement;
  poperStyle?: React.CSSProperties;
  popperTag?: React.ComponentProps<any>;
  tag?: React.ComponentProps<any>;
  theme?: PopoverTheme;
  onShow?: () => any;
  onHide?: () => any;
}

export { PopoverProps };
