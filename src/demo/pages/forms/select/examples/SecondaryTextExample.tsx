import React from "react";
import { TESelect } from "tw-elements-react";

export default function SecondaryTextExample(): JSX.Element {
  const data = [
    { text: "One", value: 1, secondaryText: "Secondary text" },
    { text: "Two", value: 2, secondaryText: "Secondary text" },
    { text: "Three", value: 3, secondaryText: "Secondary text" },
    { text: "Four", value: 4, secondaryText: "Secondary text" },
    { text: "Five", value: 5, secondaryText: "Secondary text" },
  ];

  return (
    <div className="flex justify-center">
      <div className="relative mb-3 md:w-96 pt-5">
        <TESelect data={data} optionHeight={52} />
      </div>
    </div>
  );
}
