import { SyntheticEvent } from "react";
import { BaseComponent } from "../../types/baseComponent";
import { placement } from "../../types/placement";

interface TooltipTheme {
  tooltip?: string;
  tooltipInner?: string;
  fade?: string;
}

interface TooltipProps extends BaseComponent {
  disableMouseDown?: boolean;
  options?: Record<string, unknown>;
  placement?: placement;
  tag?: React.ComponentProps<any>;
  tooltipTag?: React.ComponentProps<any>;
  title?: React.ReactNode;
  wrapperProps?: Record<string, unknown>;
  tooltipClassName?: string;
  theme?: TooltipTheme;
  onShow?: (e: SyntheticEvent) => any;
  onHide?: (e: SyntheticEvent) => any;
  onMouseEnter?: (e: SyntheticEvent) => any;
  onMouseLeave?: (e: SyntheticEvent) => any;
}

export { TooltipProps };
