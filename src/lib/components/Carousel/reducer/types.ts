interface CarouselItemData {
  tabId?: string;
  panelId?: string;
}

interface CarouselState {
  items: CarouselItemData[];
  activeItemId: number;
  desiredItemId: number;
  isRotating: boolean;
}