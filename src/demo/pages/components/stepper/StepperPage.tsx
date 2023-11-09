import React from "react";
import TEStepper from "../../../../lib/components/Stepper/Stepper";
import TEStepperStep from "../../../../lib/components/Stepper/StepperStep/StepperStep";

const StepperPage = () => {
  return (
    <TEStepper>
      <TEStepperStep headText="Step 1">
        <div>Step 1 content</div>
      </TEStepperStep>
      <TEStepperStep headText="Step 2">
        <div>Step 2 content</div>
      </TEStepperStep>
      <TEStepperStep headText="Step 3">
        <div>Step 3 content</div>
      </TEStepperStep>
    </TEStepper>
  );
};

export default StepperPage;
