import { BaseComponent } from "../../../types/baseComponent";
import { placement } from "../../../types/placement";
import { Boundary } from "@popperjs/core";
interface PopoverContentTheme {
    popoverContent?: string;
    fade?: string;
}
interface PopoverContentProps extends BaseComponent {
    popperTag?: React.ComponentProps<any>;
    theme?: PopoverContentTheme;
    container?: string | boolean;
    placement?: placement;
    popperConfig?: Record<string, unknown>;
    offset?: [number, number];
    fallbackPlacements?: placement[];
    boundary?: Boundary;
}
export { PopoverContentProps };
