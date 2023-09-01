import { CarouselAction, CarouselActionType } from "../actions/types"

export function carouselReducer(state: CarouselState, action: CarouselAction): CarouselState {
  switch(action.type) {
    case CarouselActionType.LoadItems:
      return {
        ...state,
        items: action.payload,
        activeItemId: 0,
        desiredItemId: 0,
      }
    case CarouselActionType.UpdateItems:
      return {
        ...state,
        items: action.payload,
      }
    case CarouselActionType.SlidePrev:
      return {
        ...state,
        desiredItemId: (state.activeItemId || state.items.length) - 1,
      }
    case CarouselActionType.SlideNext:
      return {
        ...state,
        desiredItemId: (state.activeItemId + 1) % state.items.length
      }
    case CarouselActionType.TransitionEnd:
      return {
        ...state,
        activeItemId: state.desiredItemId
      }
    case CarouselActionType.JumpTo:
      return action.payload < state.items.length && action.payload >= 0
        ? {
          ...state,
          desiredItemId: action.payload
        }
        : state
    case CarouselActionType.StartRotation:
      return {
        ...state,
        isRotating: true
      }
    case CarouselActionType.StopRotation:
      return {
        ...state,
        isRotating: false
      }
    default:
      return state
  }
}