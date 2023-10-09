import React, { useState, useEffect, useRef } from "react";

const useTransition = (
  referenceElement:
    | React.MutableRefObject<HTMLElement | null>
    | HTMLElement
    | null,
  setShow?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const [transitionDuration, setTransitionDuration] = useState<number>(150);
  const tiemoutShowRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tiemoutHideRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (referenceElement !== null) {
      const { transitionDuration } = window.getComputedStyle(
        referenceElement as HTMLElement
      );
      const time = Number(transitionDuration.replace("s", "")) * 1000;
      setTransitionDuration(time);
    }
  }, [referenceElement]);

  const onTransitionStart = (callback?: () => any) => {
    if (tiemoutShowRef.current !== null) {
      clearTimeout(tiemoutShowRef.current);
    }

    setShow?.(true);
    tiemoutShowRef.current = setTimeout(() => {
      callback?.();
    }, transitionDuration);
  };

  const onTransitionEnd = (callback?: () => any) => {
    if (tiemoutHideRef.current !== null) {
      clearTimeout(tiemoutHideRef.current);
    }

    tiemoutHideRef.current = setTimeout(() => {
      setShow?.(false);
      callback?.();
    }, transitionDuration);
  };

  return {
    transitionDuration,
    onTransitionStart,
    onTransitionEnd,
  };
};

export { useTransition };
