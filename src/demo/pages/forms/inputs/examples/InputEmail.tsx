import React from "react";
import { TEInput } from "tw-elements-react";

export default function InputEmail(): JSX.Element {
  return (
    <div className="flex justify-center pt-3">
      <TEInput
        type="email"
        id="exampleFormControlInputEmail"
        label="Email input"
        placeholder="Example label"
      ></TEInput>
    </div>
  );
}
