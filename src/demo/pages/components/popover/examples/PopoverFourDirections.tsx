import React from "react";
import {
  TEPopover,
  TEPopoverContent,
  TEPopoverToggler,
  TERipple,
} from "tw-elements-react";

export default function PopoverFourDirections(): JSX.Element {
  return (
    <div className="grid grid-cols-1 gap-1 text-center sm:gap-0 sm:flex sm:space-x-1 sm:justify-center py-24">
      <TEPopover>
        <TERipple rippleColor="light">
          <TEPopoverToggler className="max-w-[160px] rounded bg-primary-100 px-6 py-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
            Popover on top
          </TEPopoverToggler>
        </TERipple>

        <TEPopoverContent placement="top">
          <div className="p-4 text-[#212529] rounded-lg shadow-[0_0px_3px_0_rgba(0,0,0,0.07),0_2px_2px_0_rgba(0,0,0,0.04)] bg-white bg-clip-padding border border-t-0 border-neutral-100 empty:hidden dark:text-white dark:border-0 dark:bg-neutral-700">
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
          </div>
        </TEPopoverContent>
      </TEPopover>
      <TEPopover className="text-left">
        <TERipple rippleColor="light">
          <TEPopoverToggler className="max-w-[160px] rounded bg-primary-100 px-6 py-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
            Popover on right
          </TEPopoverToggler>
        </TERipple>

        <TEPopoverContent>
          <div className="p-4 text-[#212529] rounded-lg shadow-[0_0px_3px_0_rgba(0,0,0,0.07),0_2px_2px_0_rgba(0,0,0,0.04)] bg-white bg-clip-padding border border-t-0 border-neutral-100 empty:hidden dark:text-white dark:border-0 dark:bg-neutral-700">
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
          </div>
        </TEPopoverContent>
      </TEPopover>
      <TEPopover>
        <TERipple rippleColor="light">
          <TEPopoverToggler className="max-w-[180px] rounded bg-primary-100 px-6 py-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
            Popover on bottom
          </TEPopoverToggler>
        </TERipple>

        <TEPopoverContent placement="bottom">
          <div className="p-4 text-[#212529] rounded-lg shadow-[0_0px_3px_0_rgba(0,0,0,0.07),0_2px_2px_0_rgba(0,0,0,0.04)] bg-white bg-clip-padding border border-t-0 border-neutral-100 empty:hidden dark:text-white dark:border-0 dark:bg-neutral-700">
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
          </div>
        </TEPopoverContent>
      </TEPopover>
      <TEPopover className="text-right">
        <TERipple rippleColor="light">
          <TEPopoverToggler className="max-w-[160px] rounded bg-primary-100 px-6 py-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
            Popover on left
          </TEPopoverToggler>
        </TERipple>

        <TEPopoverContent placement="left">
          <div className="p-4 text-[#212529] rounded-lg shadow-[0_0px_3px_0_rgba(0,0,0,0.07),0_2px_2px_0_rgba(0,0,0,0.04)] bg-white bg-clip-padding border border-t-0 border-neutral-100 empty:hidden dark:text-white dark:border-0 dark:bg-neutral-700">
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
          </div>
        </TEPopoverContent>
      </TEPopover>
    </div>
  );
}
