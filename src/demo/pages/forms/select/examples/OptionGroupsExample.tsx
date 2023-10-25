import React from "react";
import { TESelect } from "tw-elements-react";

export default function OptionGroupsExample(): JSX.Element {
  const data = [
    { text: "Label 1", optgroup: true, disabled: true },
    { text: "One", value: 1 },
    { text: "Two", value: 2 },
    { text: "Three", value: 3 },
    { text: "Label 2", optgroup: true, disabled: true },
    { text: "Four", value: 4 },
    { text: "Five", value: 5 },
    { text: "Six", value: 6 },
  ];

  return (
    <div className="flex justify-center">
      <div className="relative mb-3 md:w-96 pt-5">
        <TESelect data={data} />
      </div>
    </div>
  );
}
