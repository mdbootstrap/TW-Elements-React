import React from "react";
import { BaseComponent } from "../../types/baseComponent";
import { StepperStepProps } from "./StepperStep/types";

interface StepperThemeProps {
  stepper: string;
}

type StepperProps = Omit<BaseComponent, "children"> & {
  stepperTheme?: StepperThemeProps;
  disableHeadSteps?: boolean;
  defaultStep?: number;
  activeStep?: number;
  linear?: boolean;
  noEditable?: boolean;
  type?: "horizontal" | "vertical";
  onChange?: (id: number) => void;
  children:
    | React.ReactElement<StepperStepProps>[]
    | React.ReactElement<StepperStepProps>;
};

export type { StepperProps };
