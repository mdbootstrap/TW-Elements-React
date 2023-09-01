export enum CarouselActionType {
  LoadItems,
  UpdateItems,
  SlidePrev,
  SlideNext,
  TransitionEnd,
  StartRotation,
  StopRotation,
  JumpTo
}

export interface CarouselActionLoadItems {
  readonly type: CarouselActionType.LoadItems;
  payload: CarouselItemData[];
}

export interface CarouselActionUpdateItems {
  readonly type: CarouselActionType.UpdateItems;
  payload: CarouselItemData[];
}

export interface CarouselActionSlidePrev {
  readonly type: CarouselActionType.SlidePrev;
}

export interface CarouselActionSlideNext {
  readonly type: CarouselActionType.SlideNext;
}

export interface CarouselActionTransitionEnd {
  readonly type: CarouselActionType.TransitionEnd;
}

export interface CarouselActionStartRotation {
  readonly type: CarouselActionType.StartRotation;
}

export interface CarouselActionStopRotation {
  readonly type: CarouselActionType.StopRotation;
}

export interface CarouselActionJumpTo {
  readonly type: CarouselActionType.JumpTo;
  payload: number;
}

export type CarouselAction = 
  CarouselActionLoadItems |
  CarouselActionUpdateItems |
  CarouselActionSlidePrev |
  CarouselActionSlideNext |
  CarouselActionTransitionEnd |
  CarouselActionStartRotation |
  CarouselActionStopRotation |
  CarouselActionJumpTo