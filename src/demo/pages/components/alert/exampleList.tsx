import React from "react";

import BasicExample from "./examples/BasicExamples";
import LinkColor from "./examples/LinkColor";
import Icons from "./examples/Icons";
import AdditionalContent from "./examples/AdditionalContent";
import DismissingExample from "./examples/DismissingExample";
import TriggerExample from "./examples/TriggerExample";

export default [
  {
    name: "BasicExample",
    path: "/components/alert/examples/basic-example",
    element: <BasicExample />,
  },
  {
    name: "LinkColor",
    path: "/components/alert/examples/link-color",
    element: <LinkColor />,
  },
  {
    name: "Icons",
    path: "/components/alert/examples/icons",
    element: <Icons />,
  },
  {
    name: "AdditionalContent",
    path: "/components/alert/examples/additional-content",
    element: <AdditionalContent />,
  },
  {
    name: "DismissingExample",
    path: "/components/alert/examples/dismissing-example",
    element: <DismissingExample />,
  },
  {
    name: "TriggerExample",
    path: "/components/alert/examples/trigger-example",
    element: <TriggerExample />,
  },
];
