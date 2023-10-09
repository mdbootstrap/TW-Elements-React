import { BaseComponent } from "../../types/baseComponent";
import { placement } from "../../types/placement";
import { Boundary } from "@popperjs/core";

interface TooltipTheme {
  tooltip?: string;
  tooltipInner?: string;
  fade?: string;
}

interface TooltipProps extends BaseComponent {
  popperConfig?: Record<string, unknown>;
  placement?: placement;
  tag?: React.ComponentProps<any>;
  tooltipTag?: React.ComponentProps<any>;
  title?: React.ReactNode;
  wrapperProps?: Record<string, unknown>;
  tooltipClassName?: string;
  theme?: TooltipTheme;
  container?: string | boolean;
  trigger?: "hover" | "click" | "focus";
  offset?: [number, number];
  fallbackPlacements?: placement[];
  boundary?: Boundary;
  enabled?: boolean;
  onShow?: () => any;
  onShown?: () => any;
  onHide?: () => any;
  onHidden?: () => any;
  onMouseEnter?: () => any;
  onMouseLeave?: () => any;
}

export { TooltipProps };
