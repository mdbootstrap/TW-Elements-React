import { useContext, useMemo } from "react";
import StepperContext from "../StepperContext";
import type { StepperStepThemeProps } from "../StepperStep/stepperStepTheme";

export default function useHeadClasses(
  theme: StepperStepThemeProps,
  itemId: number
) {
  const { stepsAmount, vertical } = useContext(StepperContext);

  const isFirstStep = useMemo(() => itemId === 1, [itemId]);
  const isLastStep = useMemo(
    () => itemId === stepsAmount,
    [itemId, stepsAmount]
  );

  if (vertical) {
    return theme.stepperHeadVertical;
  }
  if (isFirstStep) {
    return theme.stepperFirstStepHeadHorizontal;
  }
  if (isLastStep) {
    return theme.stepperLastStepHeadHorizontal;
  }
  return theme.stepperHeadHorizontal;
}
