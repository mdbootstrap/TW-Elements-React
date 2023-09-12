import { BaseComponent } from "../../../types/baseComponent";
import { ReactElement, ComponentProps } from "react";

interface DropdownMenuTheme {
  menu?: string;
  aninimationIn?: string;
  aninimationOut?: string;
}

export interface DropdownMenuProps extends BaseComponent {
  appendToBody?: boolean;
  responsive?:
    | ""
    | "sm-start"
    | "md-start"
    | "lg-start"
    | "xl-start"
    | "xxl-start"
    | "sm-end"
    | "md-end"
    | "lg-end"
    | "xl-end"
    | "xxl-end";
  position?: "" | "dropup" | "dropright" | "dropleft";
  alignment?: "" | "end";
  tag?: ComponentProps<any>;
  children: ReactElement[] | ReactElement;
  alwaysOpen?: boolean;
  theme?: DropdownMenuTheme;
}
