import React from "react";
import { TEAnimation } from "tw-elements-react";

export default function AnimationsShowOnLoad(): JSX.Element {
  return (
    <>
      <div className="text-center h-[1500px] mt-5">
        <h2 className="font-normal text-xl">
          Use <code>showOnLoad</code> property to show element and animation on
          page load. Scroll down and refresh the page to see it in action.
          <br />
          Animation will also launch <strong>every time</strong> it's reached.
        </h2>
      </div>
      <div className="flex justify-center mb-16">
        <TEAnimation
          animation="[slide-right_1s_ease-in-out]"
          start="onScroll"
          repeatOnScroll
          showOnLoad
          className="[&>svg]:w-16"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
          </svg>
        </TEAnimation>
      </div>
    </>
  );
}
