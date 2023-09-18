import { SyntheticEvent } from "react";
import { BaseComponent } from "../../types/baseComponent";
import { placement } from "../../types/placement";

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
  boundary?: "clippingParents" | "scrollParent" | "viewport" | "window";
  enabled?: boolean;
  onShow?: (e: SyntheticEvent) => any;
  onShown?: (e: SyntheticEvent) => any;
  onHide?: (e: SyntheticEvent) => any;
  onHidden?: (e: SyntheticEvent) => any;
  onMouseEnter?: (e: SyntheticEvent) => any;
  onMouseLeave?: (e: SyntheticEvent) => any;
}

export { TooltipProps };
