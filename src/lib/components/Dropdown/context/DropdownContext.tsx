import { createContext } from "react";
import { DropdownContextProps } from "./types";
export const DropdownContext = createContext<DropdownContextProps>({
  activeIndex: -1,
  animation: true,
  isOpenState: false,
  setIsOpenState: () => {},
  setReferenceElement: () => {},
  setPopperElement: () => {},
  setActiveIndex: () => {},
  popperElement: null,
  referenceElement: null,
  autoClose: true,
  onHide: () => {},
  onHidden: () => {},
  onShow: () => {},
  onShown: () => {},
});
