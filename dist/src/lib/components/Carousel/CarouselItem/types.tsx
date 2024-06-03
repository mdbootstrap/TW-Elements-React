import React from "react";
import type { BaseComponent } from "../../../types/baseComponent";

interface CarouselItemProps extends BaseComponent {
  tag?: React.ComponentProps<any>;
  itemID: number;
}

export type { CarouselItemProps };
