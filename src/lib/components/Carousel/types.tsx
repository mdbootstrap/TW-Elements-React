import type { BaseComponent } from "../../types/baseComponent";

interface CarouselTheme {
  carouselWrapper?: string;
  pointer?: string;
  block?: string;
  visible?: string;
  invisible?: string;
  slideRight?: string;
  slideLeft?: string;
  nextBtn?: string;
  prevBtn?: string;
  indicatorsWrapper?: string;
  indicator?: string;
  activeIndicator?: string;
}

interface CarouselProps extends BaseComponent {
  theme?: CarouselTheme;
  interval?: number | boolean;
  keyboard?: boolean;
  pause?: "hover" | boolean;
  touch?: boolean;
  showIndicators?: boolean;
  showControls?: boolean;
  ride?: "carousel" | boolean;
  wrap?: boolean;
  prevBtnIcon?: JSX.Element;
  nextBtnIcon?: JSX.Element;
  stopSliding?: boolean;
  current?: number;
  crossfade?: boolean;
  onSlide?: () => void;
  onSlid?: () => void;
}

export type { CarouselProps };
