import React from "react";
import { BaseComponent } from "../../../types/baseComponent";

import type { StepperStepThemeProps } from "./stepperStepTheme";

interface StepperStepProps extends BaseComponent {
  theme?: StepperStepThemeProps;
  headClassName?: string;
  contentClassName?: string;
  itemId?: number;
  headIcon?: React.ReactNode;
  headText?: React.ReactNode;
}

export type { StepperStepProps };
