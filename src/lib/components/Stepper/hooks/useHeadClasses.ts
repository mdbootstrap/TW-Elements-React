import { useContext, useMemo } from "react";
import StepperContext from "../StepperContext";

export default function useHeadClasses(theme: any, itemId: number) {
  const { stepsAmount, vertical } = useContext(StepperContext);

  const isFirstStep = useMemo(() => itemId === 1, [itemId]);
  const isLastStep = useMemo(
    () => itemId === stepsAmount,
    [itemId, stepsAmount]
  );

  if (vertical) return theme.stepperHeadVertical;
  if (isFirstStep) return theme.stepperFirstStepHeadHorizontal;
  if (isLastStep) return theme.stepperLastStepHeadHorizontal;
  return theme.stepperHeadHorizontal;
}
