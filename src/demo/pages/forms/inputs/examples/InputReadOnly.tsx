import React from "react";
import { TEInput } from "tw-elements-react";

export default function InputReadOnly(): JSX.Element {
  return (
    <div className="flex justify-center">
      <div className="relative mb-3 xl:w-96 pt-5">
        <TEInput
          type="text"
          id="exampleFormControlInput50"
          label="Readonly input"
          value="Readonly input here..."
          readOnly
        ></TEInput>
      </div>
    </div>
  );
}
