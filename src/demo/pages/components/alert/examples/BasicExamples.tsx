import React from "react";
import { TEAlert } from "tw-elements-react";

export default function BasicExample(): JSX.Element {
  return (
    <div>
      <TEAlert staticAlert open={true}>
        A simple primary alert—check it out!
      </TEAlert>
      <TEAlert
        staticAlert
        open={true}
        color="bg-secondary-100 text-secondary-800"
      >
        A simple secondary alert—check it out!
      </TEAlert>
      <TEAlert staticAlert open={true} color="bg-success-100 text-success-700">
        A simple success alert—check it out!
      </TEAlert>
      <TEAlert staticAlert open={true} color="bg-danger-100 text-danger-700">
        A simple danger alert—check it out!
      </TEAlert>
      <TEAlert staticAlert open={true} color="bg-warning-100 text-warning-800">
        A simple warning alert—check it out!
      </TEAlert>
      <TEAlert staticAlert open={true} color="bg-info-100 text-info-800">
        A simple indigo alert—check it out!
      </TEAlert>
      <TEAlert staticAlert open={true} color="bg-neutral-50 text-neutral-600">
        A simple light alert—check it out!
      </TEAlert>
      <TEAlert staticAlert open={true} color="bg-neutral-800 text-neutral-50">
        A simple dark alert—check it out!
      </TEAlert>
    </div>
  );
}
