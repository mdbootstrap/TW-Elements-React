import React from "react";
import { TERipple } from "tw-elements-react";

export default function RippleColored2(): JSX.Element {
  return (
    <div className="flex flex-col justify-center space-y-2 md:flex-row md:space-x-2 md:space-y-0">
      <TERipple rippleColor="red">
        <button
          type="button"
          className="block w-full rounded bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg"
        >
          Red
        </button>
      </TERipple>
      <TERipple rippleColor="green">
        <button
          type="button"
          className="block w-full rounded bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg"
        >
          Green
        </button>
      </TERipple>
      <TERipple rippleColor="blue">
        <button
          type="button"
          className="block w-full rounded bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg"
        >
          blue
        </button>
      </TERipple>
      <TERipple rippleColor="yellow">
        <button
          type="button"
          className="block w-full rounded bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg"
        >
          Yellow
        </button>
      </TERipple>
      <TERipple rippleColor="orange">
        <button
          type="button"
          className="block w-full rounded bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg"
        >
          Orange
        </button>
      </TERipple>
      <TERipple rippleColor="purple">
        <button
          type="button"
          className="block w-full rounded bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg"
        >
          Purple
        </button>
      </TERipple>
      <TERipple rippleColor="aqua">
        <button
          type="button"
          className="block w-full rounded bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg"
        >
          Aqua
        </button>
      </TERipple>
    </div>
  );
}
