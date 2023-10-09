import React from "react";
import { BaseComponent } from "../../types/baseComponent";

interface PopoverProps extends BaseComponent {
  isOpen?: boolean;
  tag?: React.ComponentProps<any>;
  enabled?: boolean;
  trigger?: string;
  onShow?: () => any;
  onShown?: () => any;
  onHide?: () => any;
  onHidden?: () => any;
  onMouseEnter?: () => any;
  onMouseLeave?: () => any;
}

export { PopoverProps };
