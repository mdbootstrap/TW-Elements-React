import { BaseComponent } from "../../types/baseComponent";
import type { StepperStepProps } from "./StepperStep/types";
import type { StepperThemeProps } from "./stepperTheme";

type customValidationType = (
  validableElement: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
) => boolean;

type StepperProps = Omit<BaseComponent, "children"> & {
  activeStep?: number;
  defaultStep?: number;
  linear?: boolean;
  theme?: StepperThemeProps;
  type?: "horizontal" | "vertical";
  onChange?: (prevStepId: number, nextStepId: number) => void;
  onInvalid?: (prevStepId: number, nextStepId: number) => void;
  children:
    | React.ReactElement<StepperStepProps>[]
    | React.ReactElement<StepperStepProps>;
  customValidation?: customValidationType;
};

export type { StepperProps, StepperThemeProps, customValidationType };
