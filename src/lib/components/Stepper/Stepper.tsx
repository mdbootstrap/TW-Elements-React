import clsx from "clsx";
import React, { useEffect, useRef, useState, useMemo } from "react";
import StepperContext from "./StepperContext";
import { StepperStepProps } from "./StepperStep/types";
import StepperTheme from "./stepperTheme";
import useActiveValue from "../../hooks/useActiveValue";
import type { StepperProps } from "./types";
// import MDBStepperMobileHead from "./StepperMobileHead/StepperMobileHead";
// import MDBStepperMobileFooter from "./StepperMobileFooter/StepperMobileFooter";

const TEStepper: React.FC<StepperProps> = ({
  theme: customTheme,
  className,
  defaultStep = 1,
  activeStep: activeStepProp,
  children,
  onChange,
}) => {
  const theme = {
    ...StepperTheme,
    ...customTheme,
  };
  const classes = clsx(theme.stepper, className);
  const [activeStepState, setActiveStepState] = useState<number>(defaultStep);
  const activeStep = useActiveValue(activeStepProp, activeStepState);
  const stepperRef = useRef<HTMLUListElement>(null);
  const [stepperHeight, setStepperHeight] = useState<string>("0");

  const childrenArray = useMemo(() => {
    return React.Children.toArray(
      children
    ) as React.ReactElement<StepperStepProps>[];
  }, [children]);

  const onChangeHandler = (id: number) => {
    onChange?.(id);
    setActiveStepState(id);
  };
  return (
    <>
      <StepperContext.Provider
        value={{
          activeStep,
          onChange: onChangeHandler,
          stepperRef,
          stepperHeight,
          setStepperHeight,
        }}
      >
        <ul
          className={classes}
          ref={stepperRef}
          style={{ height: `${stepperHeight}px` }}
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

export default TEStepper;
