import React from "react";
import StepperBasicExample from "./examples/StepperBasicExample";
import StepperControlledStep from "./examples/StepperControlledStep";
import StepperVerticalExample from "./examples/StepperVerticalExample";
import StepperLinearExample from "./examples/StepperLinear";
import StepperLinearCustomValidationExample from "./examples/StepperLinearCustomValidation";
import StepperNoEditable from "./examples/StepperNoEditable";

export default [
  {
    name: "StepperBasicExample",
    path: "/components/stepper/examples/stepper-basic-example",
    element: <StepperBasicExample />,
  },
  {
    name: "StepperControlledStep",
    path: "/components/stepper/examples/stepper-controlled-step",
    element: <StepperControlledStep />,
  },
  {
    name: "StepperVerticalExample",
    path: "/components/stepper/examples/stepper-vertical-example",
    element: <StepperVerticalExample />,
  },
  {
    name: "StepperNoEditable",
    path: "/components/stepper/examples/stepper-no-editable-example",
    element: <StepperNoEditable />,
  },
  {
    name: "StepperLinearExample",
    path: "/components/stepper/examples/stepper-linear-example",
    element: <StepperLinearExample />,
  },
  {
    name: "StepperLinearCustomValidationExample",
    path: "/components/stepper/examples/stepper-linear-custom-validation-example",
    element: <StepperLinearCustomValidationExample />,
  },
];
