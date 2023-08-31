import React from "react";
import {
  TEPopover,
  TEPopoverBody,
  TEPopoverContent,
  TEPopoverToggler,
} from "tw-elements-react";

export default function PopoverDisabled(): JSX.Element {
  return (
    <TEPopover className="py-10 md:text-center">
      <TEPopoverToggler className="inline-block" tag="span">
        <button
          type="button"
          className="pointer-events-none inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] disabled:opacity-70 dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          disabled
        >
          Disabled button
        </button>
      </TEPopoverToggler>

      <TEPopoverContent>
        <TEPopoverBody className="rounded-t-lg">Disabled popover</TEPopoverBody>
      </TEPopoverContent>
    </TEPopover>
  );
}
