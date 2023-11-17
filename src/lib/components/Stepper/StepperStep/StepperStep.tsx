import React, { useMemo, useRef, useContext } from "react";
import StepperStepTheme from "./stepperStepTheme";
import StepperContext from "../StepperContext";
import { StepperStepProps } from "./types";
import clx from "clsx";
import useHeadIconClasses from "../hooks/useHeadIconClasses";
import useIsStepCompleted from "../hooks/useIsStepCompleted";
import useStepperHeight from "../hooks/useHorizontalStepperHeight";
import { getTranslateDirection } from "../utils/utils";

const TEStepperStep: React.FC<StepperStepProps> = ({
  theme: customTheme,
  className,
  itemId = 1,
  headIcon = "",
  headText = "",
  children,
}) => {
  const headRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { activeStep, onChange } = useContext(StepperContext);

  const animationDirection = useMemo(() => {
    return getTranslateDirection(activeStep, itemId);
  }, [activeStep, itemId]);

  const isActive = useMemo(() => {
    return activeStep === itemId;
  }, [activeStep, itemId]);
  const isCompleted = useIsStepCompleted(activeStep, isActive, itemId);
  const theme = {
    ...StepperStepTheme,
    ...customTheme,
  };

  const stepperStepClasses = clx(theme.stepperStep, className);
  const headIconClasses = useHeadIconClasses(
    isActive,
    isCompleted,
    false,
    theme
  );

  useStepperHeight(isActive, headRef, contentRef, false, children);
  const dynamicAnimationDirection: string = `stepperContentTranslated${animationDirection}`;

  return (
    <li className={stepperStepClasses}>
      <div
        className={theme.stepperHead}
        onClick={() => onChange?.(itemId)}
        ref={headRef}
      >
        <span className={headIconClasses}>{headIcon}</span>
        <span
          className={
            isActive ? theme.stepperHeadTextActive : theme.stepperHeadText
          }
        >
          {headText}
        </span>
      </div>
      <div
        className={
          isActive
            ? theme.stepperContentActive
            : theme[dynamicAnimationDirection as keyof typeof theme]
        }
        style={{ visibility: isActive ? "visible" : "hidden" }}
        onTransitionEnd={(e) => {
          console.log(e);
        }}
        ref={contentRef}
      >
        {children}
      </div>
    </li>
  );
};

export default TEStepperStep;
