import React from "react";
import { TEInput } from "tw-elements-react";

export default function InputEmail(): JSX.Element {
  return (
    <div className="flex justify-center">
      <div className="relative mb-3 xl:w-96 pt-5">
        <TEInput
          type="email"
          id="exampleFormControlInputEmail"
          label="Email input"
        ></TEInput>
      </div>
    </div>
  );
}
