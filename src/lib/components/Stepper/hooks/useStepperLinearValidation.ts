import { useContext, useEffect, useState, useMemo } from "react";
import StepperContext from "../StepperContext";

export default function useStepperLinearValidaTion(
  itemId: number,
  contentRef: React.RefObject<HTMLDivElement>
) {
  const { activeStep, linear, stepsAmount } = useContext(StepperContext);
  const [isStepValid, setIsStepValid] = useState(true);
  const isActive = useMemo(() => activeStep === itemId, [activeStep]);
  useEffect(() => {
    if (!linear || !isActive) return;
    // const form = contentRef.current?.querySelector("form");
    // const inputs = form?.querySelectorAll("input, select, textarea");
    // const isFormValid = form?.checkValidity();
    // console.log("isFormValid", isFormValid);
    // const isInputsValid = Array.from(inputs || []).every((input) =>
    // input.checkValidity()
    // );
    // const isStepValid = isFormValid && isInputsValid;
    // setIsStepValid(isStepValid);

    // if (!isStepValid) {
    // form?.reportValidity();
    // }
  }, [activeStep, linear, stepsAmount, isStepValid, isActive]);
  return true;
}
