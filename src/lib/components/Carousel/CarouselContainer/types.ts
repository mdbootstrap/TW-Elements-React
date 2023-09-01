import React from "react";

import { BaseComponent } from "../../../types/baseComponent";

interface CarouselContainerProps extends BaseComponent {
  items: React.ReactNode[];
}

export { CarouselContainerProps };