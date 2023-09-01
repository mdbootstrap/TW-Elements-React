import React from "react";

import { BaseComponent } from "../../types/baseComponent";

interface CarouselConfig {
  interval: number;
  touch: boolean;
  keyboard: boolean;
}

interface CarouselProps extends BaseComponent {
  items: React.ReactNode[]
}

export { CarouselConfig, CarouselProps };