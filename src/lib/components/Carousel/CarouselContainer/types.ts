import React from "react";

import { BaseComponent } from "../../../types/baseComponent";

interface CarouselContainerProps extends BaseComponent {
  items: React.ReactNode[];
  renderItem: (props: React.PropsWithChildren<any>) => JSX.Element
}

export { CarouselContainerProps };