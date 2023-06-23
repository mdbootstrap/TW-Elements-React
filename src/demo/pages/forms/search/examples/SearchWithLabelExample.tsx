import React from "react";
import { TEInput } from "tw-elements-react";

export default function SearchWithLabelExample(): JSX.Element {
  return (
    <div className="flex justify-center">
      <div className="relative mb-3 md:w-96 pt-5 mx-auto">
        <TEInput
          type="search"
          id="exampleFormControlInput1"
          label="Type query"
        ></TEInput>
      </div>
    </div>
  );
}
