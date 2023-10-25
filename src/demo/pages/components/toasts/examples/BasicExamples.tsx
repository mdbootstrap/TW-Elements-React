import React, { useState } from "react";
import { TEToast } from "tw-elements-react";

export default function BasicExample(): JSX.Element {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <TEToast staticToast open={open}>
        <div className="flex items-center justify-between rounded-t-lg border-b-2 border-neutral-100 border-opacity-100 bg-clip-padding px-4 pb-2 pt-2.5">
          <p className="font-bold text-neutral-500 dark:text-neutral-200">
            MDBootstrap
          </p>
          <div className="flex items-center">
            <p className="text-xs text-neutral-600 dark:text-neutral-300">
              11 mins ago
            </p>
            <button
              type="button"
              className="ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              <span className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div className="break-words rounded-b-lg px-4 py-4 text-neutral-700 dark:text-neutral-200">
          Static Example
        </div>
      </TEToast>
    </div>
  );
}
