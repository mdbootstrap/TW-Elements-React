import React, { useEffect, useRef } from "react";

const useTransition = (
  referenceElement:
    | React.MutableRefObject<HTMLElement | null>
    | HTMLElement
    | null,
  setShow?: React.Dispatch<React.SetStateAction<boolean>>,
  classNames?: string
) => {
  const transitionTime = useRef<number>(0);
  const tiemoutShowRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tiemoutHideRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const transitionDurationSet = useRef(false);

  const getTransitionTime = (element: HTMLElement) => {
    if (element !== null && !transitionDurationSet.current) {
      transitionDurationSet.current = true;

      const { transitionDuration } = window.getComputedStyle(
        element as HTMLElement
      );
      const time = Number(transitionDuration.replace("s", "")) * 1000;
      transitionTime.current = time;

      return;
    }

    if (!classNames) {
      return;
    }

    const arrayOfClasses = classNames?.split(" ");

    if (classNames?.includes("duration")) {
      const durationClass = arrayOfClasses?.filter((className) =>
        className.includes("duration")
      );

      const time = Number(
        durationClass?.join("").split("-")[1].replace(/\D/g, "")
      );
      transitionTime.current = time;

      return;
    } else if (classNames?.includes("transition")) {
      transitionTime.current = 150;
    }
  };

  useEffect(() => {
    getTransitionTime(referenceElement as HTMLElement);
  }, [referenceElement]);

  const onTransitionShow = async (callback?: () => any) => {
    if (tiemoutShowRef.current !== null) {
      clearTimeout(tiemoutShowRef.current);
    }

    setShow?.(true);
    tiemoutShowRef.current = setTimeout(() => {
      callback?.();
    }, transitionTime.current);
  };

  const onTransitionHide = (callback?: () => any) => {
    if (transitionDurationSet.current === false) {
      return;
    }

    if (tiemoutHideRef.current !== null) {
      clearTimeout(tiemoutHideRef.current);
    }

    tiemoutHideRef.current = setTimeout(() => {
      setShow?.(false);
      callback?.();
    }, transitionTime.current);
  };

  return {
    transitionDuration: transitionTime.current,
    onTransitionShow,
    onTransitionHide,
  };
};

export { useTransition };
