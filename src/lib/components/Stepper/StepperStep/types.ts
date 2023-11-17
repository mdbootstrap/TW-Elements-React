import React from "react";
import { BaseComponent } from "../../../types/baseComponent";

interface StepperThemeProps {
  stepperStep: string;
  stepperHead: string;
  stepperHeadActive: string;
  stepperHeadIcon: string;
  stepperHeadText: string;
  stepperHeadTextActive: string;
  stepperContent: string;
  stepperContentActive: string;
}

interface StepperStepProps extends BaseComponent {
  theme?: StepperThemeProps;
  headClassName?: string;
  contentClassName?: string;
  itemId?: number;
  headIcon?: React.ReactNode;
  headText?: React.ReactNode;
  onComplete?: (id: number) => void;
  activeStep?: number;
}

export type { StepperStepProps };
