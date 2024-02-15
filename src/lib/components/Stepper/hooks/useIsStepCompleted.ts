import { useState, useEffect, useRef } from "react";

const useIsStepCompleted = (
  activeStep: number,
  isActive: boolean,
  itemId: number
) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const wasActive = useRef(isActive || false);

  useEffect(() => {
    if (isActive) {
      wasActive.current = isActive;
    }
    if (wasActive.current && activeStep >= itemId) {
      setIsCompleted(true);
    }
  }, [isActive]);

  return isCompleted;
};

export default useIsStepCompleted;
