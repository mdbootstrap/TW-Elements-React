import { placement } from "../../types/placement";
import { BaseComponent } from "../../types/baseComponent";

interface PopoverProps extends BaseComponent {
  dismiss?: boolean;
  isOpen?: boolean;
  popperConfig?: Record<string, unknown>;
  placement?: placement;
  tag?: React.ComponentProps<any>;
  offset?: [number, number];
  fallbackPlacements?: placement[];
  boundary?: "clippingParents" | "scrollParent" | "viewport" | "window";
  onShow?: () => any;
  onHide?: () => any;
}

export { PopoverProps };
