import React from "react";
import { TERipple } from "tw-elements-react";

export default function RippleColored3(): JSX.Element {
  return (
    <div className="flex flex-col justify-center space-y-2 md:flex-row md:space-x-2 md:space-y-0">
      <TERipple rippleColor="#c953d6">
        <button
          type="button"
          className="block w-full rounded bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg"
        >
          #c953d6
        </button>
      </TERipple>
      <TERipple rippleColor="#44c6e3">
        <button
          type="button"
          className="block w-full rounded bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg"
        >
          #44c6e3
        </button>
      </TERipple>
      <TERipple rippleColor="#fcc834">
        <button
          type="button"
          className="block w-full rounded bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg"
        >
          #fcc834
        </button>
      </TERipple>
      <TERipple rippleColor="#386f06">
        <button
          type="button"
          className="block w-full rounded bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg"
        >
          #386f06
        </button>
      </TERipple>
      <TERipple rippleColor="#c1303a">
        <button
          type="button"
          className="block w-full rounded bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg"
        >
          #c1303a
        </button>
      </TERipple>
      <TERipple rippleColor="#a57c3e">
        <button
          type="button"
          className="block w-full rounded bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg"
        >
          #a57c3e
        </button>
      </TERipple>
      <TERipple rippleColor="#192ced">
        <button
          type="button"
          className="block w-full rounded bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg"
        >
          #192ced
        </button>
      </TERipple>
    </div>
  );
}
