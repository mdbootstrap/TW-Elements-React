import { BaseComponent } from "../../../types/baseComponent";

interface CarouselControlProps extends BaseComponent {
  direction: 'prev' | 'next';
}

export { CarouselControlProps };