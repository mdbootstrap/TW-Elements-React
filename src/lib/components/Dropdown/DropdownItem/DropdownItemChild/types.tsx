import { ReactNode, ComponentProps } from "react";
import { DropdownItemTheme } from "../types";

export interface DropdownItemChildProps {
  className?: string;
  theme: DropdownItemTheme;
  childTag?: ComponentProps<any>;
  children?: ReactNode;
  disabled?: boolean;
  link?: boolean;
  divider?: boolean;
  header?: boolean;
  href?: string;
}
