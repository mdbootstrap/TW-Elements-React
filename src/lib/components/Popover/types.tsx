import { placement } from "../../types/placement";
import { BaseComponent } from "../../types/baseComponent";

interface PopoverProps extends BaseComponent {
  dismiss?: boolean;
  isOpen?: boolean;
  options?: Record<string, unknown>;
  placement?: placement;
  tag?: React.ComponentProps<any>;
  onShow?: () => any;
  onHide?: () => any;
}

export { PopoverProps };
