import React from "react";
import PopoverBasicExample from "./examples/PopoverBasicExample";
import PopoverFourDirections from "./examples/PopoverFourDirections";
import PopoverDismiss from "./examples/PopoverDismiss";
import PopoverDisabled from "./examples/PopoverDisabled";

export default [
  {
    name: "PopoverBasicExample",
    path: "/components/popover/examples/popover-basic-example",
    element: <PopoverBasicExample />,
  },
  {
    name: "PopoverFourDiections",
    path: "/components/popover/examples/popover-four-directions",
    element: <PopoverFourDirections />,
  },
  {
    name: "PopoverDismiss",
    path: "/components/popover/examples/popover-dismiss",
    element: <PopoverDismiss />,
  },
  {
    name: "PopoverDisabled",
    path: "/components/popover/examples/popover-disabled",
    element: <PopoverDisabled />,
  },
];
