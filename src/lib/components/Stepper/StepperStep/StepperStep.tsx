import React, { useMemo, useRef, useContext, useEffect } from "react";
import clx from "clsx";
import StepperStepTheme from "./stepperStepTheme";
import StepperContext from "../StepperContext";
import { StepperStepProps } from "./types";
import useHeadIconClasses from "../hooks/useHeadIconClasses";
import useIsStepCompleted from "../hooks/useIsStepCompleted";
import useStepperHeight from "../hooks/useHorizontalStepperHeight";
import { getTranslateDirection } from "../utils/utils";
import useHeadClasses from "../hooks/useHeadClasses";

const TEStepperStep: React.FC<StepperStepProps> = ({
  theme: customTheme,
  className,
  contentClassName,
  headClassName,
  itemId = 1,
  headIcon = "",
  headText = "",
  children,
  style,
}) => {
  const stepRef = useRef<HTMLLIElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const {
    activeStep,
    onChange,
    vertical,
    linear,
    stepsAmount,
    setActiveStepContent,
    stepsValidity,
  } = useContext(StepperContext);

  const isInvalid = useMemo(() => {
    if (!linear) {
      return false;
    }
    return (
      stepsValidity?.["step" + itemId].wasValidated &&
      !stepsValidity?.["step" + itemId].isValid
    );
  }, [stepsValidity, itemId]);

  const animationDirection = useMemo(() => {
    return getTranslateDirection(activeStep, itemId);
  }, [activeStep, itemId]);

  const isActive = useMemo(() => {
    return activeStep === itemId;
  }, [activeStep, itemId]);

  const isLastStep = useMemo(() => {
    return itemId === stepsAmount;
  }, [itemId, stepsAmount]);

  const isCompleted = useIsStepCompleted(activeStep, isActive, itemId);
  const theme = {
    ...StepperStepTheme,
    ...customTheme,
  };

  const headIconClasses = useHeadIconClasses(
    theme,
    vertical,
    isActive,
    isCompleted,
    isInvalid
  );
  const stepperHeadClasses = clx(useHeadClasses(theme, itemId), headClassName);
  const stepperStepClasses = clx(
    vertical
      ? isLastStep
        ? theme.stepperLastStepVertical
        : theme.stepperStepVertical
      : theme.stepperStep,

    className
  );

  const dynamicAnimationDirection: string = `stepperContentTranslate${animationDirection}`;
  const stepperContentClasses = clx(
    vertical ? theme.stepperVerticalContent : theme.stepperContent,
    !vertical && theme[dynamicAnimationDirection as keyof typeof theme],
    contentClassName,
    isActive ? "pb-6" : "pb-0"
  );

  useEffect(() => {
    if (isActive && contentRef.current && setActiveStepContent) {
      setActiveStepContent(contentRef.current);
    }
  }, [isActive, contentRef, children]);

  const headClickHandler = () => {
    itemId != activeStep && onChange?.(itemId);
  };

  useStepperHeight(isActive, headRef, contentRef, vertical, children);

  return (
    <li className={stepperStepClasses} ref={stepRef}>
      <div
        className={stepperHeadClasses}
        onClick={headClickHandler}
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
        style={{
          visibility: isActive ? "visible" : "hidden",
          display: vertical ? "grid" : "block",
          gridTemplateRows: isActive ? "1fr" : "0fr",
        }}
        className={theme.stepperContentWrapper}
      >
        <div className={stepperContentClasses} style={style} ref={contentRef}>
          {children}
        </div>
      </div>
    </li>
  );
};

export default TEStepperStep;
