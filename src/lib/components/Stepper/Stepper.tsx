import clsx from "clsx";
import React, { useRef, useState, useMemo } from "react";
import StepperContext from "./StepperContext";
import { StepperStepProps } from "./StepperStep/types";
import StepperTheme from "./stepperTheme";
import useActiveValue from "../../hooks/useActiveValue";
import type { StepperProps } from "./types";

const TEStepper: React.FC<StepperProps> = ({
  theme: customTheme,
  className,
  defaultStep = 1,
  activeStep: activeStepProp,
  children,
  noEditable = false,
  onChange,
  type = "horizontal",
  style,
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
  const [stepperHeight, setStepperHeight] = useState<string>("auto");

  const childrenArray = useMemo(() => {
    return React.Children.toArray(
      children
    ) as React.ReactElement<StepperStepProps>[];
  }, [children]);

  const stepChangeHandler = (id: number) => {
    if (noEditable && id < activeStep) return;
    onChange?.(id);
    setActiveStepState(id);
  };
  return (
    <>
      <StepperContext.Provider
        value={{
          activeStep,
          onChange: stepChangeHandler,
          stepperRef,
          stepperHeight,
          setStepperHeight,
          vertical,
          stepsAmount: childrenArray.length,
          noEditable,
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
              onChange: stepChangeHandler,
            });
          })}
        </ul>
      </StepperContext.Provider>
    </>
  );
};

export default TEStepper;
