import { SyntheticEvent, useCallback, useEffect, useContext } from "react";
import { isNode } from "../../../components/Dropdown/helpers/typeguards";
import { DropdownContext } from "../../../components/Dropdown/context/DropdownContext";

export const useClickOutside = () => {
  const {
    isOpenState,
    setIsOpenState,
    setActiveIndex,
    popperElement,
    referenceElement,
    autoClose,
    onHide,
    onHidden,
  } = useContext(DropdownContext);

  const handleClickOutside = useCallback(
    (e: MouseEvent | SyntheticEvent) => {
      if (
        !isOpenState ||
        !isNode(e.target) ||
        (popperElement && popperElement.contains(e.target)) ||
        (referenceElement && referenceElement.contains(e.target)) ||
        e.defaultPrevented
      ) {
        return;
      }
      onHide?.(e);
      setIsOpenState(false);

      setTimeout(() => {
        setActiveIndex(-1), onHidden?.(e);
      }, 300);
    },
    [
      isOpenState,
      setIsOpenState,
      setActiveIndex,
      popperElement,
      referenceElement,
      onHide,
      onHidden,
    ]
  );

  useEffect(() => {
    if (autoClose === false || autoClose === "inside") {
      return;
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside, autoClose]);
};
