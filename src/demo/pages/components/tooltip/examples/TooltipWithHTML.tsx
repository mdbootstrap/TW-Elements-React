import React from "react";
import { TETooltip } from "tw-elements-react";

export default function TooltipWithHTML(): JSX.Element {
  return (
    <div className="flex justify-center items-center py-10">
      <TETooltip
        title={
          <>
            <em>Tooltip</em> <u>with</u> <b>HTML</b>
          </>
        }
        wrapperClass="rounded bg-primary-100 px-6 py-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
      >
        Tooltip with HTML
      </TETooltip>
    </div>
  );
}
