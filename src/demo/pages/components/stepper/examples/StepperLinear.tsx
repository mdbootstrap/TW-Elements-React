import React, { useState } from "react";
import { TEStepper, TEStepperStep, TEInput } from "tw-elements-react";

const validTheme = {
  notchLeadingDefault: "border-green-300 dark:border-green-600",
  notchMiddleDefault: "border-green-300 dark:border-green-600",
  notchTrailingDefault: "border-green-300 dark:border-green-600",
  focusedNotchLeadingDefault:
    "shadow-[-1px_0_0_#10b339,_0_1px_0_0_#10b339,_0_-1px_0_0_#10b339] border-green-300 dark:border-green-600",
  focusedNotchMiddleDefault:
    "shadow-[0_1px_0_0_#10b339] border-green-300 dark:border-green-600",
  focusedNotchTrailingDefault:
    "shadow-[1px_0_0_#10b339,_0_1px_0_0_#10b339,_0_-1px_0_0_#10b339] border-green-300 dark:border-green-600",
  labelDefault: "text-green-500 dark:text-green-600",
};

const invalidTheme = {
  notchLeadingDefault: "border-red-300 dark:border-red-600",
  notchMiddleDefault: "border-red-300 dark:border-red-600",
  notchTrailingDefault: "border-red-300 dark:border-red-600",
  focusedNotchLeadingDefault:
    "shadow-[-1px_0_0_#f87171,_0_1px_0_0_#f87171,_0_-1px_0_0_#f87171] border-red-300 dark:border-red-600",
  focusedNotchMiddleDefault:
    "shadow-[0_1px_0_0_#f87171] border-red-300 dark:border-red-600",
  focusedNotchTrailingDefault:
    "shadow-[1px_0_0_#f87171,_0_1px_0_0_#f87171,_0_-1px_0_0_#f87171] border-red-300 dark:border-red-600",
  labelDefault: "text-red-300 dark:text-red-600",
};

const isFormValid = (formValidity: object) => {
  return Object.values(formValidity).every((item) => item);
};

export default function StepperLinearExample() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isStepValidated, setIsStepValidated] = useState<boolean>(false);

  const [step1FormValidity, setStep1FormValidity] = useState<any>({
    email: false,
  });

  const [step2FormValidity, setStep2FormValidity] = useState<any>({
    firstName: false,
    lastName: false,
    phone: false,
  });

  const handleStepChange = (stepId: number) => {
    setIsStepValidated(true);
    if (
      (activeStep === 1 && !isFormValid(step1FormValidity)) ||
      (activeStep === 2 && !isFormValid(step2FormValidity))
    ) {
      return;
    }

    setActiveStep(stepId);
    setIsStepValidated(false);
  };

  return (
    <TEStepper activeStep={activeStep} onChange={handleStepChange}>
      <TEStepperStep headText="Step 1" headIcon={"1"}>
        <form className="text-center border-2 p-8 rounded-lg pb-10">
          <h3 className="text-lg font-semibold mb-4">
            Enter your email and start the adventure of your life!
          </h3>

          <div className="w-1/2 mx-auto">
            <TEInput
              type="email"
              autoComplete="email"
              label="Email (required)"
              required
              theme={
                !isStepValidated
                  ? {}
                  : step1FormValidity.email
                  ? validTheme
                  : invalidTheme
              }
              onChange={(e) => {
                setStep1FormValidity({ email: e.target.checkValidity() });
              }}
            />
          </div>

          <button
            className="mt-5 inline-block rounded bg-primary px-8 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            onClick={() => {
              handleStepChange(2);
            }}
          >
            I'm ready!
          </button>
        </form>
      </TEStepperStep>
      <TEStepperStep headText="Step 2" headIcon={"2"}>
        <form className="text-center border-2 p-8 rounded-lg pb-10">
          <h3 className="text-lg font-semibold mb-4">
            You're almost there! Just a few more details!
          </h3>
          <div className="w-1/2 mx-auto mb-4">
            <TEInput
              type="text"
              label="First Name"
              autoComplete="given-name"
              name="firstName"
              required
              theme={
                !isStepValidated
                  ? {}
                  : step2FormValidity.firstName
                  ? validTheme
                  : invalidTheme
              }
              onChange={(e) => {
                setStep2FormValidity((prev: object) => {
                  return { ...prev, firstName: e.target.checkValidity() };
                });
              }}
            />
          </div>
          <div className="w-1/2 mx-auto mb-4">
            <TEInput
              type="text"
              label="Last Name"
              autoComplete="family-name"
              required
              theme={
                !isStepValidated
                  ? {}
                  : step2FormValidity.lastName
                  ? validTheme
                  : invalidTheme
              }
              onChange={(e) => {
                setStep2FormValidity((prev: object) => {
                  return { ...prev, lastName: e.target.checkValidity() };
                });
              }}
            />
          </div>

          <div className="w-1/2 mx-auto mb-4">
            <TEInput
              type="tel"
              label="Phone"
              autoComplete="tel"
              required
              theme={
                !isStepValidated
                  ? {}
                  : step2FormValidity.phone
                  ? validTheme
                  : invalidTheme
              }
              onChange={(e) => {
                setStep2FormValidity((prev: object) => {
                  return { ...prev, phone: e.target.checkValidity() };
                });
              }}
            />
          </div>
        </form>

        <div className="flex justify-between items-center mt-10">
          <button
            className="inline-block rounded bg-secondary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#999999] transition duration-150 ease-in-out hover:bg-secondary-600 hover:shadow-[0_8px_9px_-4px_#999,0_4px_18px_0_rgba(59,113,202,0.2)] "
            onClick={() => {
              handleStepChange(1);
            }}
          >
            Go back
          </button>

          <button
            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            onClick={() => {
              handleStepChange(3);
            }}
          >
            Next
          </button>
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
  );
}
