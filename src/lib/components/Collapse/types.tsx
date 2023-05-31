import { ComponentProps, HTMLAttributes, RefObject } from "react";

interface CollapseTheme {
  visible?: string;
  hidden?: string;
  baseTransition?: string;
  collapsing?: string;
  collapsingHorizontal?: string;
}

interface CollapseProps extends HTMLAttributes<HTMLElement> {
  collapseRef?: RefObject<HTMLElement>;
  show?: boolean;
  tag?: ComponentProps<any>;
  navbar?: boolean;
  direction?: "vertical" | "horizontal";
  onShow?: any;
  onHide?: any;
  theme?: CollapseTheme;
}

export type { CollapseProps };
