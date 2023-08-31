import React from "react";
import {
  TEPopover,
  TEPopoverBody,
  TEPopoverContent,
  TEPopoverToggler,
  TERipple,
} from "tw-elements-react";

export default function PopoverFourDirections(): JSX.Element {
  return (
    <div className="flex flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-1 justify-center items-center py-24">
      <TEPopover placement="top">
        <TERipple rippleColor="light">
          <TEPopoverToggler className="max-w-[160px] rounded bg-primary-100 px-6 py-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
            Popover on top
          </TEPopoverToggler>
        </TERipple>

        <TEPopoverContent>
          <TEPopoverBody className="rounded-t-lg">
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
          </TEPopoverBody>
        </TEPopoverContent>
      </TEPopover>
      <TEPopover placement="right">
        <TERipple rippleColor="light">
          <TEPopoverToggler className="max-w-[160px] rounded bg-primary-100 px-6 py-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
            Popover on right
          </TEPopoverToggler>
        </TERipple>

        <TEPopoverContent>
          <TEPopoverBody className="rounded-t-lg">
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
          </TEPopoverBody>
        </TEPopoverContent>
      </TEPopover>
      <TEPopover placement="bottom">
        <TERipple rippleColor="light">
          <TEPopoverToggler className="max-w-[180px] rounded bg-primary-100 px-6 py-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
            Popover on bottom
          </TEPopoverToggler>
        </TERipple>

        <TEPopoverContent>
          <TEPopoverBody className="rounded-t-lg">
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
          </TEPopoverBody>
        </TEPopoverContent>
      </TEPopover>
      <TEPopover placement="left">
        <TERipple rippleColor="light">
          <TEPopoverToggler className="max-w-[160px] rounded bg-primary-100 px-6 py-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
            Popover on left
          </TEPopoverToggler>
        </TERipple>

        <TEPopoverContent>
          <TEPopoverBody className="rounded-t-lg">
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
          </TEPopoverBody>
        </TEPopoverContent>
      </TEPopover>
    </div>
  );
}
