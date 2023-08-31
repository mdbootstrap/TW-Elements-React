import React from "react";
import {
  TEPopover,
  TEPopoverHeader,
  TEPopoverBody,
  TEPopoverToggler,
  TEPopoverContent,
  TERipple,
} from "tw-elements-react";

export default function PopoverBasicExample(): JSX.Element {
  return (
    <TEPopover className="py-10 md:text-center">
      <TERipple rippleColor="light">
        <TEPopoverToggler className="inline-block rounded bg-danger px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]">
          Click to toggle popover
        </TEPopoverToggler>
      </TERipple>

      <TEPopoverContent>
        <TEPopoverHeader>Popover title</TEPopoverHeader>
        <TEPopoverBody>
          And here's some amazing content. It's very engaging. Right?
        </TEPopoverBody>
      </TEPopoverContent>
    </TEPopover>
  );
}
