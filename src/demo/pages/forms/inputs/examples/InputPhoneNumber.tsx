import React from "react";
import { TEInput } from "tw-elements-react";

export default function InputPhoneNumber(): JSX.Element {
  return (
    <div className="flex justify-center">
      <div className="relative mb-3 xl:w-96 pt-5">
        <TEInput
          type="tel"
          id="exampleFormControlInputTel"
          label="Phone input"
        ></TEInput>
      </div>
    </div>
  );
}
