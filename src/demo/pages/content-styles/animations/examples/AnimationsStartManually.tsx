import React, { useState } from "react";
import { TEAnimation, TERipple } from "tw-elements-react";

export default function AnimationsStartManually(): JSX.Element {
  const [toggle, setToggle] = useState(false);

  const handleStart = () => {
    setToggle(true);
  };

  const handleStop = () => {
    setToggle(false);
  };

  return (
    <div className="flex flex-col items-center justify-around md:flex-row">
      <div className="flex items-center space-x-2">
        <TEAnimation
          animation="[fade-in_1s_ease-in-out]"
          start="manually"
          toggle={toggle}
          repeat={true}
          className="[&>svg]:w-11 w-11"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
          </svg>
        </TEAnimation>
        <TERipple rippleColor="light">
          <button
            type="button"
            onClick={handleStart}
            className="rounded bg-[#3b71ca] px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#386bc0] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#386bc0] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-[#3566b6] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          >
            Start
          </button>
        </TERipple>
        <TERipple rippleColor="light">
          <button
            type="button"
            onClick={handleStop}
            className="rounded bg-[#3b71ca] px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#386bc0] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#386bc0] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-[#3566b6] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          >
            Stop
          </button>
        </TERipple>
      </div>
    </div>
  );
}
