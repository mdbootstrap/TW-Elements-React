import React from "react";

import BasicExample from "./examples/BasicExamples";
import Colors from "./examples/Colors";
import TriggerExample from "./examples/TriggerExample";

export default [
  {
    name: "BasicExample",
    path: "/components/toasts/examples/basic-example",
    element: <BasicExample />,
  },
  {
    name: "Colors",
    path: "/components/toasts/examples/colors",
    element: <Colors />,
  },
  {
    name: "TriggerExample",
    path: "/components/toasts/examples/trigger-example",
    element: <TriggerExample />,
  },
];
