import React, { useState } from "react";
import { TEAnimation, TERipple } from "tw-elements-react";

export default function AnimationsChangeType(): JSX.Element {
  const [changeAnimation, setChangeAnimation] = useState(false);

  const handleClick = () => {
    setChangeAnimation((prevAnimation) => !prevAnimation);
  };

  return (
    <div className="flex justify-center items-center space-x-2">
      <TEAnimation
        animation={
          changeAnimation
            ? "[fade-in_1s_ease-in-out]"
            : "[fade-out_1s_ease-in-out]"
        }
        start="onLoad"
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
          onClick={handleClick}
          className="rounded bg-[#3b71ca] px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#386bc0] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#386bc0] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-[#3566b6] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        >
          Change animation
        </button>
      </TERipple>
    </div>
  );
}
