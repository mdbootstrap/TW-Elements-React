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

type formItemsValidityTypes = {
  email: boolean | null;
  firstName: boolean | null;
  lastName: boolean | null;
  phone: boolean | null;
};

export default function StepperLinearCustomValidationExample() {
  const [formItemsValidity, setFormItemsValidity] =
    useState<formItemsValidityTypes>({
      email: false,
      firstName: false,
      lastName: false,
      phone: false,
    });

  const [validatedSteps, setValidatedSteps] = useState({
    step1: false,
    step2: false,
    step3: false,
  });

  return (
    <form>
      <TEStepper
        onChange={(prevStep, nextStep) => {
          setValidatedSteps({
            ...validatedSteps,
            ["step" + nextStep]: false,
          });
        }}
        onInvalid={(stepId) => {
          setValidatedSteps({
            ...validatedSteps,
            ["step" + stepId]: true,
          });
        }}
        linear
        customValidation={(el) => {
          let isValid = true;

          switch (el.name) {
            case "email":
              const isDomainExample = el.value.split("@")[1] === "example.com";
              isValid = isDomainExample;
              !isValid &&
                el.setCustomValidity(
                  "Please enter a valid email address with @example.com domain"
                );

              el.reportValidity();
              setFormItemsValidity((prev) => {
                return {
                  ...prev,
                  email: isValid,
                };
              });
              break;

            case "firstName":
              isValid = el.checkValidity();
              setFormItemsValidity((prev) => {
                return {
                  ...prev,
                  firstName: isValid,
                };
              });

              break;

            case "lastName":
              isValid = el.checkValidity();
              setFormItemsValidity((prev) => {
                return {
                  ...prev,
                  lastName: isValid,
                };
              });

              break;

            case "phone":
              isValid = el.checkValidity();
              setFormItemsValidity((prev) => {
                return {
                  ...prev,
                  phone: isValid,
                };
              });

              break;
          }

          return isValid;
        }}
      >
        <TEStepperStep headText="Step 1" headIcon={"1"}>
          <h3 className="text-lg font-semibold mb-4">
            Enter your email and start the adventure of your life!
          </h3>

          <div className="w-1/2 mx-auto">
            <TEInput
              type="email"
              autoComplete="email"
              label="Email (required)"
              name="email"
              onBlur={(e) => {
                e.target.setCustomValidity(" ");
              }}
              onInput={(e) => {
                (e.target as HTMLInputElement).setCustomValidity(" ");
              }}
              required
              theme={
                !validatedSteps.step1
                  ? {}
                  : formItemsValidity.email
                  ? validTheme
                  : invalidTheme
              }
            />
          </div>
        </TEStepperStep>
        <TEStepperStep headText="Step 2" headIcon={"2"}>
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
                !validatedSteps.step2
                  ? {}
                  : formItemsValidity.firstName
                  ? validTheme
                  : invalidTheme
              }
            />
          </div>
          <div className="w-1/2 mx-auto mb-4">
            <TEInput
              type="text"
              label="Last Name"
              autoComplete="family-name"
              name="lastName"
              required
              theme={
                !validatedSteps.step2
                  ? {}
                  : formItemsValidity.lastName
                  ? validTheme
                  : invalidTheme
              }
            />
          </div>

          <div className="w-1/2 mx-auto mb-4">
            <TEInput
              type="tel"
              label="Phone"
              autoComplete="tel"
              name="phone"
              required
              theme={
                !validatedSteps.step2
                  ? {}
                  : formItemsValidity.phone
                  ? validTheme
                  : invalidTheme
              }
            />
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
