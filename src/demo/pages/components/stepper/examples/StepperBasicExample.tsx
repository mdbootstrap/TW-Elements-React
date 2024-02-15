import React from "react";
import { TEStepper, TEStepperStep } from "tw-elements-react";

export default function StepperBasicExample(): JSX.Element {
  return (
    <TEStepper>
      <TEStepperStep headText="Step 1" headIcon="1">
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
