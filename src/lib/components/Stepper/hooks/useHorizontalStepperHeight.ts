import { useEffect, useContext, RefObject } from "react";
import StepperContext from "../StepperContext";

const useStepperHeight = (
  isActive: boolean,
  headRef: RefObject<HTMLDivElement>,
  stepRef: RefObject<HTMLDivElement>,
  vertical: boolean,
  children: React.ReactNode | React.ReactNode[]
) => {
  if (vertical) return;
  const { setStepperHeight } = useContext(StepperContext);

  const handleResize = () => {
    if (!isActive) {
      return;
    }
    if (stepRef.current && headRef.current) {
      setStepperHeight(
        String(stepRef.current.scrollHeight + headRef.current.scrollHeight)
      );
    }
  };
  // if (vertical) {
  //   return setStepperHeight("unset");
  // }

  useEffect(() => {
    handleResize();
  }, [isActive, children]);

  useEffect(() => {
    if (!isActive) return;
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isActive, children]);
};

export default useStepperHeight;
