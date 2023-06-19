import React from "react";
import { TEInput } from "tw-elements-react";

export default function InputSizing(): JSX.Element {
  return (
    <div className="flex justify-center pt-6">
      <div>
        <div className="relative mb-3 xl:w">
          <TEInput
            type="text"
            id="exampleFormControlInput2"
            label="Form control lg"
            size="lg"
          ></TEInput>
        </div>
        <div className="relative mb-3 xl:w-96">
          <TEInput
            type="text"
            id="exampleFormControlInput3"
            label="Default input"
            size="base"
          ></TEInput>
        </div>
        <div className="relative mb-3 xl:w-96">
          <TEInput
            type="text"
            id="exampleFormControlInput4"
            label="Form control sm"
            size="sm"
          ></TEInput>
        </div>
      </div>
    </div>
  );
}
