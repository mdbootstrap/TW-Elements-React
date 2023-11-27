import { BaseComponent } from "../../types/baseComponent";
import type { StepperStepProps } from "./StepperStep/types";

interface StepperThemeProps {
  stepper: string;
  stepperVertical: string;
}

type StepperProps = Omit<BaseComponent, "children"> & {
  activeStep?: number;
  defaultStep?: number;
  linear?: boolean;
  theme?: StepperThemeProps;
  type?: "horizontal" | "vertical";
  onChange?: (id: number) => void;
  children:
    | React.ReactElement<StepperStepProps>[]
    | React.ReactElement<StepperStepProps>;
};

export type { StepperProps };
