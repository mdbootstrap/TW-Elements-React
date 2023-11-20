import { useContext, useMemo } from "react";
import StepperContext from "../StepperContext";
import clsx from "clsx";

export default function useHeadClasses(theme: any, itemId: number) {
  const { stepsAmount, vertical } = useContext(StepperContext);

  const beforeLine = vertical ? "" : "stepperHeadBeforeLineHorizontal";
  const afterLine = vertical
    ? "stepperHeadAfterLineVertical"
    : "stepperHeadAfterLineHorizontal";

  const isFirstStep = useMemo(() => itemId === 1, [itemId]);
  const isLastStep = useMemo(
    () => itemId === stepsAmount,
    [itemId, stepsAmount]
  );

  const stepperHeadClasses = clsx(
    vertical ? theme.stepperHeadVertical : theme.stepperHead,
    !isFirstStep && theme[beforeLine],
    !isLastStep && theme[afterLine]
  );

  return stepperHeadClasses;
}
