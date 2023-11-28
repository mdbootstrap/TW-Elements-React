import React from "react";
import StepperControlledStep from "./examples/StepperControlledStep";
import StepperVerticalExample from "./examples/StepperVerticalExample";
import StepperBasicExample from "./examples/StepperBasicExample";
import StepperNoEditable from "./examples/StepperNoEditable";

const StepperPage = () => {
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
          <StepperBasicExample />
        </div>

        <hr className="my-10" />

        <h2 className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-6">
          Controlled active step
        </h2>

        <div className="rounded-lg border dark:border-neutral-600 p-4">
          <StepperControlledStep />
        </div>

        <hr className="my-10" />

        <h2 className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-6">
          Vertical stepper
        </h2>

        <div className="rounded-lg border dark:border-neutral-600 p-4 w-1/2">
          <StepperVerticalExample />
        </div>

        <hr className="my-10" />

        <h2 className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-6">
          Stepper with no editable steps
        </h2>

        <div className="rounded-lg border dark:border-neutral-600 p-4">
          <StepperNoEditable />
        </div>
      </div>
    </div>
  );
};

export default StepperPage;
