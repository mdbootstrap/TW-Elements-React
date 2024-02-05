import React, { useState } from "react";
import { TEStepper, TEStepperStep } from "tw-elements-react";

export default function StepperControlledStep(): JSX.Element {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <TEStepper
      activeStep={activeStep}
      onChange={(_, next) => {
        setActiveStep(next);
      }}
    >
      <TEStepperStep headText="Step 1" headIcon={"1"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </TEStepperStep>
      <TEStepperStep headText="Step 2" headIcon={"2"}>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </TEStepperStep>
      <TEStepperStep headText="Step 3" headIcon={"3"}>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </TEStepperStep>
    </TEStepper>
  );
}
