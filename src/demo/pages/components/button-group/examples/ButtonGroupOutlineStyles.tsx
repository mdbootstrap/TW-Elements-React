import React from "react";
import { TERipple } from "tw-elements-react";

export default function ButtonGroupOutlineStyles(): JSX.Element {
  return (
    <div className="flex items-center justify-center">
      <div className="inline-flex" role="group">
        <TERipple rippleColor="light">
          <button
            type="button"
            className="inline-block rounded-l border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          >
            Left
          </button>
        </TERipple>
        <TERipple rippleColor="light">
          <button
            type="button"
            className="-ml-0.5 inline-block border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          >
            Middle
          </button>
        </TERipple>
        <TERipple rippleColor="light">
          <button
            type="button"
            className="-ml-0.5 inline-block rounded-r border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          >
            Right
          </button>
        </TERipple>
      </div>
    </div>
  );
}
