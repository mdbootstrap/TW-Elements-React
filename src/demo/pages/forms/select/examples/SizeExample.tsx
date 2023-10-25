import React from "react";
import { TESelect } from "tw-elements-react";

export default function SizeExample(): JSX.Element {
  const data = [
    { text: "One", value: 1 },
    { text: "Two", value: 2 },
    { text: "Three", value: 3 },
    { text: "Four", value: 4 },
    { text: "Five", value: 5 },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative mb-3 md:w-96 pt-5">
        <TESelect data={data} size="sm" label="Size sm" />
      </div>
      <div className="relative mb-3 md:w-96 pt-5">
        <TESelect data={data} label="Size default" />
      </div>
      <div className="relative mb-3 md:w-96 pt-5">
        <TESelect data={data} size="lg" label="Size lg" />
      </div>
    </div>
  );
}
