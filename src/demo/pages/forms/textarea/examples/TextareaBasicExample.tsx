import React from "react";
import { TETextarea } from "tw-elements-react";

export default function TextareaBasicExample(): JSX.Element {
  return (
    <div className="flex justify-center">
      <div className="relative mb-3 md:w-96 pt-5">
        <TETextarea id="textareaExample" label="Message" rows={4}></TETextarea>
      </div>
    </div>
  );
}
