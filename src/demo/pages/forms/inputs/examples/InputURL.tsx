import React from "react";
import { TEInput } from "tw-elements-react";

export default function InputURL(): JSX.Element {
  return (
    <div className="flex justify-center">
      <div className="relative mb-3 xl:w-96 pt-5">
        <TEInput
          type="url"
          id="exampleFormControlInputURL"
          label="URL input"
        ></TEInput>
      </div>
    </div>
  );
}
