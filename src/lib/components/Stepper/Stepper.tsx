import clsx from "clsx";
import React, { useRef, useState, useMemo } from "react";
import StepperContext from "./StepperContext";
import { StepperStepProps } from "./StepperStep/types";
import StepperTheme from "./stepperTheme";
import useActiveValue from "../../hooks/useActiveValue";
import type { StepperProps } from "./types";
import { validateStepContent, checkStepsBetweenValidity } from "./utils/utils";

interface StepsValidity {
  [key: string]: {
    wasValidated: boolean;
    isValid: boolean;
  };
}

const TEStepper: React.FC<StepperProps> = ({
  theme: customTheme,
  className,
  defaultStep = 1,
  activeStep: activeStepProp,
  children,
  onChange,
  onInvalid,
  type = "horizontal",
  linear,
  style,
  customValidation,
}) => {
  const theme = {
    ...StepperTheme,
    ...customTheme,
  };
  const vertical = type === "vertical";
  const classes = clsx(
    vertical ? theme.stepperVertical : theme.stepperHorizontal,
    className
  );
  const [activeStepState, setActiveStepState] = useState<number>(defaultStep);
  const activeStep = useActiveValue(activeStepProp, activeStepState);
  const stepperRef = useRef<HTMLUListElement>(null);
  const [activeStepContent, setActiveStepContent] =
    useState<HTMLElement | null>(null);
  const [stepperHeight, setStepperHeight] = useState<string>("auto");

  const childrenArray = useMemo(() => {
    return React.Children.toArray(
      children
    ) as React.ReactElement<StepperStepProps>[];
  }, [children]);

  const [stepsValidity, setStepsValidity] = useState<StepsValidity>(() => {
    if (!linear) {
      return {};
    }

    const obj: StepsValidity = {};

    childrenArray.forEach((_, i) => {
      obj["step" + Number(i + 1)] = {
        wasValidated: false,
        isValid: false,
      };
    });

    return obj;
  });

  const onChangeHandler = (targetStepId: number) => {
    if (linear) {
      if (!activeStepContent) {
        return;
      }

      const isGoingForward = activeStep < targetStepId;

      const isCurrentStepValid = validateStepContent(
        activeStepContent as HTMLElement,
        customValidation
      );

      const isStepsBetweenValid = checkStepsBetweenValidity(
        activeStep,
        targetStepId,
        stepsValidity,
        setStepsValidity
      );

      setStepsValidity((prev) => {
        return {
          ...prev,

          ["step" + activeStep]: {
            wasValidated: true,
            isValid: isCurrentStepValid,
          },

          ["step" + targetStepId]: {
            wasValidated: prev![`step${targetStepId}`].wasValidated,
            isValid: false,
          },
        };
      });
      if ((!isCurrentStepValid || !isStepsBetweenValid) && isGoingForward) {
        onInvalid?.(activeStep, targetStepId);
        return;
      }
    }
    onChange?.(activeStep, targetStepId);
    setActiveStepState(targetStepId);
  };
  return (
    <>
      <StepperContext.Provider
        value={{
          activeStep,
          onChange: onChangeHandler,
          stepperRef,
          stepperHeight,
          stepsValidity,
          setStepperHeight,
          setActiveStepContent,

          vertical,
          stepsAmount: childrenArray.length,
          linear,
        }}
      >
        <ul
          className={classes}
          ref={stepperRef}
          style={{ height: vertical ? "" : stepperHeight, ...style }}
        >
          {childrenArray.map((ChildComponent, index: number) => {
            return React.cloneElement(ChildComponent, {
              itemId: index + 1,
              activeStep,
              key: "stepper-step-" + index,
              onChange: onChangeHandler,
            });
          })}
        </ul>
      </StepperContext.Provider>
    </>
  );
};

export type { StepsValidity };
export default TEStepper;
