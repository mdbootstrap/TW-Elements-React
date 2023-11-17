import React, { useState } from "react";
import TEStepper from "../../../../lib/components/Stepper/Stepper";
import TEStepperStep from "../../../../lib/components/Stepper/StepperStep/StepperStep";

const StepperPage = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  return (
    <div
      className="
          max-w-[540px] sm:max-w-[604px] md:max-w-[720px] lg:max-w-[972px]
          xl:max-w-full xl:px-12 2xl:max-w-[1400px] mx-auto
         flex"
    >
      <div className="flex w-full flex-col">
        <h2 className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-6 h-">
          Basic example
        </h2>
        <div className="rounded-lg border dark:border-neutral-600 p-4">
          <TEStepper>
            <TEStepperStep headText="Step 1" headIcon="1">
              <div className="mt-5">Step 1 content</div>
              <div>XXXXs</div>
              <div className="mt-5">Step 1 content</div>
              <div>XXXXs</div>
              <div className="mt-5">Step 1 content</div>
              <div>XXXXs</div>
              <div className="mt-5">Step 1 content</div>
              <div>XXXXs</div>
              <div className="mt-5">Step 1 content</div>
              <div>XXXXs</div>
            </TEStepperStep>
            <TEStepperStep headText="Step 2" headIcon={"2"}>
              <div>Step 2 content</div>
            </TEStepperStep>
            <TEStepperStep headText="Step 3" headIcon={"3"}>
              <div>Step 3 content</div>
            </TEStepperStep>
          </TEStepper>
        </div>

        <hr className="my-10" />

        <h2 className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-6">
          Controlled active step
        </h2>

        <div className="rounded-lg border dark:border-neutral-600 p-4">
          <TEStepper
            activeStep={activeStep}
            onChange={(stepId) => {
              console.log("onChange: ", stepId);
              setActiveStep(stepId);
            }}
          >
            <TEStepperStep headText="Step 1" headIcon="1">
              <div className="mt-5">Step 1 content</div>
              <div>XXXXs</div>
              <div className="mt-5">Step 1 content</div>
              <div>XXXXs</div>
              <div className="mt-5">Step 1 content</div>
              <div>XXXXs</div>
              <div className="mt-5">Step 1 content</div>
              <div>XXXXs</div>
              <div className="mt-5">Step 1 content</div>
              <div>XXXXs</div>
            </TEStepperStep>
            <TEStepperStep headText="Step 2" headIcon={"2"}>
              <div>Step 2 content</div>
            </TEStepperStep>
            <TEStepperStep headText="Step 3" headIcon={"3"}>
              <div>Step 3 content</div>
            </TEStepperStep>
          </TEStepper>
        </div>
      </div>
    </div>
  );
};

export default StepperPage;
