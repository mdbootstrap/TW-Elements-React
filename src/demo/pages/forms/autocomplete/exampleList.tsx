import React from "react";
import BasicExample from "./examples/BasicExample";
import DisplayValue from "./examples/DisplayValue";
import AsynchronousSearch from "./examples/AsynchronousSearch";
import Threshold from "./examples/Threshold";
import CustomItemTemplate from "./examples/CustomItemTemplate";
import CustomContent from "./examples/CustomContent";
import Validation from "./examples/Validation";
import AutoSelect from "./examples/AutoSelect";

export default [
  {
    name: "BasicExample",
    path: "/forms/autocomplete/examples/basic-example",
    element: <BasicExample />,
  },
  {
    name: "DisplayValue",
    path: "/forms/autocomplete/examples/display-value",
    element: <DisplayValue />,
  },
  {
    name: "AsynchronousSearch",
    path: "/forms/autocomplete/examples/asynchronous-search",
    element: <AsynchronousSearch />,
  },
  {
    name: "Threshold",
    path: "/forms/autocomplete/examples/threshold",
    element: <Threshold />,
  },
  {
    name: "CustomItemTemplate",
    path: "/forms/autocomplete/examples/custom-item-template",
    element: <CustomItemTemplate />,
  },
  {
    name: "CustomContent",
    path: "/forms/autocomplete/examples/custom-content",
    element: <CustomContent />,
  },
  {
    name: "Validation",
    path: "/forms/autocomplete/examples/validation",
    element: <Validation />,
  },
  {
    name: "AutoSelect",
    path: "/forms/autocomplete/examples/auto-select",
    element: <AutoSelect />,
  },
];
