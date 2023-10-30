import React from "react";
import { TESelect } from "tw-elements-react";

export default function DisabledOptionsExample(): JSX.Element {
  const data = [
    { text: "One", value: 1 },
    { text: "Two", value: 2, disabled: true },
    { text: "Three", value: 3, disabled: true },
    { text: "Four", value: 4 },
    { text: "Five", value: 5 },
  ];

  return (
    <div className="flex justify-center">
      <div className="relative mb-3 md:w-96 pt-5">
        <TESelect data={data} />
      </div>
    </div>
  );
}
