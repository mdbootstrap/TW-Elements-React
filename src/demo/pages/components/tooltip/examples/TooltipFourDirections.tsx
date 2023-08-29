import React from "react";
import { TETooltip } from "tw-elements-react";

export default function TooltipFourDirections(): JSX.Element {
  return (
    <div className="flex flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-1 justify-center items-center py-10">
      <TETooltip
        title="Tooltip on top"
        wrapperClass="max-w-[160px] rounded bg-primary-100 px-6 py-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
      >
        Tooltip on top
      </TETooltip>
      <TETooltip
        title="Tooltip on right"
        placement="right"
        wrapperClass="max-w-[160px] rounded bg-primary-100 px-6 py-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
      >
        Tooltip on right
      </TETooltip>
      <TETooltip
        title="Tooltip on bottom"
        placement="bottom"
        wrapperClass="max-w-[180px] rounded bg-primary-100 px-6 py-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
      >
        Tooltip on bottom
      </TETooltip>
      <TETooltip
        title="Tooltip on left"
        placement="left"
        wrapperClass="max-w-[160px] rounded bg-primary-100 px-6 py-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
      >
        Tooltip on left
      </TETooltip>
    </div>
  );
}
