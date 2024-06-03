import React, {
  useCallback,
  useEffect,
  useState,
  useRef,
  SyntheticEvent,
} from "react";
import type { PopoverProps } from "./types";
import { PopoverContext } from "./context/PopoverContext";

const TEPopover: React.FC<PopoverProps> = ({
  children,
  tag: Tag = "div",
  isOpen = false,
  enabled = true,
  trigger = "click",
  onShow,
  onHide,
  onShown,
  onHidden,
  onMouseEnter,
  onMouseLeave,
  ...props
}): JSX.Element => {
  const [isOpenState, setIsOpenState] = useState<boolean>(isOpen ?? false);
  const [isFocused, setIsFocused] = useState(false);

  const referenceElement = useRef(null);

  const handleMouseAndClick = useCallback(
    (
      e: SyntheticEvent | React.MouseEvent,
      eventType: "mouseenter" | "mouseleave" | "mousedown"
    ) => {
      if (!enabled) return;

      eventType === "mouseenter" && onMouseEnter?.(e);
      eventType === "mouseleave" && onMouseLeave?.(e);

      if (
        (eventType === "mouseleave" && !trigger.includes("click")) ||
        ((eventType === "mouseenter" || eventType === "mouseleave") &&
          trigger !== "click" &&
          trigger !== "focus")
      ) {
        if (
          (eventType === "mouseenter" && isFocused) ||
          (eventType === "mouseleave" && !isOpenState) ||
          (trigger.includes("click") &&
            trigger.includes("focus") &&
            !trigger.includes("hover"))
        ) {
          return;
        }
        if (eventType === "mouseenter") {
          !isFocused && onShow?.(e);
          !e.defaultPrevented && setIsOpenState(true);
        } else {
          !isFocused && onHide?.(e);
          !e.defaultPrevented && setIsOpenState(false);
        }
      } else if (eventType === "mousedown") {
        if (e.target === referenceElement.current) {
          if (trigger === "click") {
            !isOpenState && onShow?.(e);
            isOpenState && onHide?.(e);
            setIsOpenState((prevState) => !prevState);
          } else if (trigger.includes("focus")) {
            !isFocused && !isOpenState && onShow?.(e);
            setIsFocused(true);
          } else if (trigger.includes("click")) {
            !isFocused && !isOpenState && onShow?.(e);
            isFocused && onHide?.(e);
            setIsFocused((prev) => !prev);
            isFocused && setIsOpenState(false);
          }
        } else {
          if (trigger.includes("focus")) {
            isFocused && onHide?.(e);
            setIsFocused(false);
          }
        }
      }
    },
    [enabled, trigger, isOpenState, isFocused]
  );

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const handleEvent = (event: any) => {
      handleMouseAndClick(event, "mousedown");
    };

    document.addEventListener("mousedown", handleEvent);
    return () => {
      document.removeEventListener("mousedown", handleEvent);
    };
  }, [enabled, handleMouseAndClick]);

  useEffect(() => {
    if (!isOpen) {
      setIsOpenState(false);
    }
  }, [isOpen]);

  return (
    <PopoverContext.Provider
      value={{
        referenceElement,
        isOpenState,
        isFocused,
        enabled,
        trigger,
        onShown,
        onHidden,
        handleMouseAndClick,
      }}
    >
      <Tag {...props}>{children}</Tag>
    </PopoverContext.Provider>
  );
};

export default TEPopover;
