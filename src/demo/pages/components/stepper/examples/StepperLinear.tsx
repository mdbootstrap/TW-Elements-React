import React from "react";
import { TEStepper, TEStepperStep, TEInput } from "tw-elements-react";

export default function StepperLinearExample() {
  return (
    <form>
      <TEStepper linear>
        <TEStepperStep headText="Step 1" headIcon={"1"}>
          <h3 className="text-lg font-semibold mb-4">
            Enter your email and start the adventure of your life!
          </h3>

          <div className="w-1/2 mx-auto">
            <TEInput type="email" label="Email (required)" required />
          </div>
        </TEStepperStep>
        <TEStepperStep headText="Step 2" headIcon={"2"}>
          <h3 className="text-lg font-semibold mb-4">
            You're almost there! Just a few more details!
          </h3>
          <div className="w-1/2 mx-auto mb-4">
            <TEInput label="First Name" autoComplete="given-name" required />
          </div>
          <div className="w-1/2 mx-auto mb-4">
            <TEInput label="Last Name" autoComplete="family-name" required />
          </div>

          <div className="w-1/2 mx-auto mb-4">
            <TEInput label="Phone" autoComplete="tel" required />
          </div>
        </TEStepperStep>
        <TEStepperStep headText="Step 3" headIcon={"3"}>
          <div className="text-center mt-10 mb-10">
            <h3 className="text-lg font-semibold mb-4">
              You're all set! We will contact you soon!
            </h3>
          </div>
        </TEStepperStep>
      </TEStepper>
    </form>
  );
}
