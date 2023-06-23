import React from "react";
import { TEInput } from "tw-elements-react";

export default function InputHelperText(): JSX.Element {
  return (
    <div className="flex justify-center">
      <div className="relative mb-3 xl:w-96 pt-5">
        <TEInput type="text" id="exampleFormControlInputHelper" label="Input">
          <div className="absolute w-full text-sm text-neutral-500 peer-focus:text-primary dark:text-neutral-200 dark:peer-focus:text-primary">
            Text helper
          </div>
        </TEInput>
      </div>
    </div>
  );
}
