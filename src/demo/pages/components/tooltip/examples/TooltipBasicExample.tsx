import React from "react";
import { TETooltip } from "tw-elements-react";

export default function TooltipBasicExample(): JSX.Element {
  return (
    <div className="text-center py-10">
      <p className="mb-0">
        Hover the link to see the{" "}
        <TETooltip
          tag="a"
          title="Hi! I'm a tooltip!"
          className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 pointer-events-auto cursor-pointer"
        >
          tooltip
        </TETooltip>
      </p>
    </div>
  );
}
