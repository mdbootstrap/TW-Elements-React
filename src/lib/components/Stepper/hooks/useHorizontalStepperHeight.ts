import { useEffect, useContext, RefObject } from "react";
import StepperContext from "../StepperContext";

const useStepperHeight = (
  isActive: boolean,
  headRef: RefObject<HTMLDivElement>,
  stepRef: RefObject<HTMLDivElement>,
  vertical: boolean,
  children: React.ReactNode | React.ReactNode[]
) => {
  const { setStepperHeight } = useContext(StepperContext);

  useEffect(() => {
    if (vertical) {
      return;
    }
    const headHeight = headRef.current?.offsetHeight || 0;

    const handleResize = (entries: Array<any>) => {
      if (!isActive || !stepRef.current) {
        return;
      }
      const stepHeight = entries[0].contentRect.height;
      const computed = window.getComputedStyle(stepRef.current as Element);

      const offsetY =
        parseFloat(computed.paddingTop) +
        parseFloat(computed.paddingBottom) +
        parseFloat(computed.marginBottom) +
        parseFloat(computed.marginTop);

      setStepperHeight(`${stepHeight + offsetY + headHeight}px`);
    };

    const observer = new ResizeObserver((entries) => {
      handleResize(entries);
    });

    observer.observe(stepRef.current as Element);
    return () => {
      observer.disconnect();
    };
  }, [isActive, children]);
};

export default useStepperHeight;
