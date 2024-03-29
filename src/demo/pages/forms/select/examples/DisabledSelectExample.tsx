import React from "react";
import { TESelect } from "tw-elements-react";

export default function DisabledSelectExample(): JSX.Element {
  const data = [
    { text: "One", value: 1 },
    { text: "Two", value: 2 },
    { text: "Three", value: 3 },
    { text: "Four", value: 4 },
    { text: "Five", value: 5 },
  ];

  return (
    <div className="flex justify-center">
      <div className="relative mb-3 md:w-96 pt-5">
        <TESelect data={data} disabled />
      </div>
    </div>
  );
}
