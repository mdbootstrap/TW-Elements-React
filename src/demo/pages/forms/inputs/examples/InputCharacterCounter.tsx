import React from "react";
import { TEInput } from "tw-elements-react";

export default function InputCharacterCounter(): JSX.Element {
  return (
    <div className="flex justify-center">
      <div className="relative mb-3 xl:w-96 pt-5">
        <TEInput
          type="text"
          id="exampleFormControlInputCounter"
          label="Example label"
          counter
          maxLength={20}
        ></TEInput>
      </div>
    </div>
  );
}
