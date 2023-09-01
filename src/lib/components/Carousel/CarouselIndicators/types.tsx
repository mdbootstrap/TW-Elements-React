import { JSXElementConstructor } from "react";

import { BaseComponent } from "../../../types/baseComponent";

interface CarouselIndicatorsProps extends BaseComponent {
  Component: JSXElementConstructor<unknown>,
  ActiveComponent: JSXElementConstructor<unknown>
}

export { CarouselIndicatorsProps };