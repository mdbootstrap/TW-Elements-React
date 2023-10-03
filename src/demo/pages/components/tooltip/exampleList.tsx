import React from "react";
import TooltipBasicExample from "./examples/TooltipBasicExample";
import TooltipFourDirections from "./examples/TooltipFourDirections";
import TooltipWithHTML from "./examples/TooltipWithHTML";
import TooltipDisabled from "./examples/TooltipDisabled";

export default [
  {
    name: "TooltipBasicExample",
    path: "/components/tooltip/examples/tooltip-basic-example",
    element: <TooltipBasicExample />,
  },
  {
    name: "TooltipFourDirections",
    path: "/components/tooltip/examples/tooltip-four-directions",
    element: <TooltipFourDirections />,
  },
  {
    name: "TooltipWithHTML",
    path: "/components/tooltip/examples/tooltip-with-html",
    element: <TooltipWithHTML />,
  },
  {
    name: "TooltipDisabled",
    path: "/components/tooltip/examples/tooltip-disabled",
    element: <TooltipDisabled />,
  },
];
