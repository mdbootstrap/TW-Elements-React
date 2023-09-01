import {
  CarouselActionJumpTo,
  CarouselActionLoadItems,
  CarouselActionSlideNext,
  CarouselActionSlidePrev,
  CarouselActionStartRotation,
  CarouselActionStopRotation,
  CarouselActionTransitionEnd,
  CarouselActionType,
  CarouselActionUpdateItems
} from "./types";

export function carouselLoadItems(items: CarouselItemData[]): CarouselActionLoadItems {
  return { type: CarouselActionType.LoadItems, payload: items };
}

export function carouselUpdateItems(items: CarouselItemData[]): CarouselActionUpdateItems {
  return { type: CarouselActionType.UpdateItems, payload: items };
}

export function carouselSlidePrev(): CarouselActionSlidePrev {
  return { type: CarouselActionType.SlidePrev };
}

export function carouselSlideNext(): CarouselActionSlideNext {
  return { type: CarouselActionType.SlideNext };
}

export function carouselTransitionEnd(): CarouselActionTransitionEnd {
  return { type: CarouselActionType.TransitionEnd };
}

export function carouselJumpTo(index: number): CarouselActionJumpTo {
  return { type: CarouselActionType.JumpTo, payload: index };
}

export function carouselStartRotation(): CarouselActionStartRotation {
  return { type: CarouselActionType.StartRotation };
}

export function carouselStopRotation(): CarouselActionStopRotation {
  return { type: CarouselActionType.StopRotation };
}