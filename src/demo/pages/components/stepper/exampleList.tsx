import React from "react";
import StepperBasicExample from "./examples/StepperBasicExample";
import StepperControlledStep from "./examples/StepperControlledStep";
import StepperVerticalExample from "./examples/StepperVerticalExample";

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
];
