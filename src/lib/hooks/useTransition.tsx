import React, { useState, useEffect, SyntheticEvent } from "react";

const useTransition = (
  referenceElement: React.RefObject<any>,
  setShow: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const [transitionDuration, setTransitionDuration] = useState<number>(0);

  useEffect(() => {
    if (referenceElement.current) {
      const element = referenceElement.current;
      const { transitionDuration } = window.getComputedStyle(element);
      const time = Number(transitionDuration.replace("s", "")) * 1000;
      setTransitionDuration(time);
    } else {
      setTransitionDuration(0);
    }
  }, [referenceElement]);

  const onTransitionStart = (callback: (e?: SyntheticEvent) => any) => {
    setShow(true);
    const timer = setTimeout(() => {
      callback();
    }, transitionDuration);

    return () => {
      clearTimeout(timer);
    };
  };

  const onTransitionEnd = (callback: (e?: SyntheticEvent) => any) => {
    const timer = setTimeout(() => {
      setShow(false);
      callback();
    }, transitionDuration);

    return () => {
      clearTimeout(timer);
    };
  };

  return {
    transitionDuration,
    onTransitionStart,
    onTransitionEnd,
  };
};

export { useTransition };
