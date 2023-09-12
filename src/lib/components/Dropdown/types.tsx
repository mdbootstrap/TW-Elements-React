import { BaseComponent } from "../../types/baseComponent";
import { ReactNode, ComponentProps, SyntheticEvent } from "react";

interface DropdownTheme {
  dropdown?: string;
}

export interface DropdownProps extends BaseComponent {
  animation?: boolean;
  isOpen?: boolean;
  options?: Record<string, unknown>;
  children?: ReactNode;
  tag?: ComponentProps<any>;
  theme?: DropdownTheme;
  onHide?: (e: MouseEvent | SyntheticEvent | KeyboardEvent) => any;
  onShow?: (e: MouseEvent | SyntheticEvent | KeyboardEvent) => any;
}
