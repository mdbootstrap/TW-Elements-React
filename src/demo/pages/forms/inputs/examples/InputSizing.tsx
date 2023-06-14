import React from "react";
import { TEInput } from "tw-elements-react";

export default function InputSizing(): JSX.Element {
  return (
    <div className="flex justify-center">
      <div>
        <div className="relative mb-3 xl:w-96 pt-5">
          <TEInput
            type="text"
            id="exampleFormControlInput2"
            label="Form control lg"
            placeholder="Form control lg"
            size="lg"
          ></TEInput>
        </div>
        <div className="relative mb-3 xl:w-96">
          <TEInput
            type="text"
            id="exampleFormControlInput3"
            label="Default input"
            placeholder="Default input"
            size="base"
          ></TEInput>
        </div>
        <div className="relative mb-3 xl:w-96">
          <TEInput
            type="text"
            id="exampleFormControlInput4"
            label="Form control sm"
            placeholder="Form control sm"
            size="sm"
          ></TEInput>
        </div>
      </div>
    </div>
  );
}
