import React from "react";
import { TETooltip } from "tw-elements-react";

export default function TooltipFourDirections(): JSX.Element {
  return (
    <div className="grid grid-cols-1 place-items-center gap-1 text-center sm:gap-0 sm:flex sm:space-x-1 sm:justify-center">
      <TETooltip
        title="Tooltip on top"
        className="max-w-[160px] rounded bg-primary-100 px-6 py-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
      >
        Tooltip on top
      </TETooltip>
      <div className="w-full text-left sm:w-auto">
        <TETooltip
          title="Tooltip on right"
          placement="right"
          className="max-w-[160px] rounded bg-primary-100 px-6 py-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
        >
          Tooltip on right
        </TETooltip>
      </div>
      <TETooltip
        title="Tooltip on bottom"
        placement="bottom"
        className="max-w-[180px] rounded bg-primary-100 px-6 py-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
      >
        Tooltip on bottom
      </TETooltip>
      <div className="w-full text-right sm:w-auto">
        <TETooltip
          title="Tooltip on left"
          placement="left"
          className="max-w-[160px] rounded bg-primary-100 px-6 py-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
        >
          Tooltip on left
        </TETooltip>
      </div>
    </div>
  );
}
