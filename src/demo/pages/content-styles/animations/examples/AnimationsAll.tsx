import React from "react";
import { TEAnimation } from "tw-elements-react";

export default function AnimationsAll(): JSX.Element {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 place-items-center">
      <TEAnimation
        animation="[fade-in_1s_ease-in-out]"
        start="onHover"
        reset
        className="m-[20px] h-[130px] w-[130px] bg-[#fbfbfb] pt-10 text-center shadow-[0_2px_10px_0_rgba(0,0,0,0.14)] dark:bg-neutral-600"
      >
        fade-in
      </TEAnimation>
      <TEAnimation
        animation="[fade-in-down_1s_ease-in-out]"
        start="onHover"
        reset
        className="m-[20px] h-[130px] w-[130px] bg-[#fbfbfb] pt-10 text-center shadow-[0_2px_10px_0_rgba(0,0,0,0.14)] dark:bg-neutral-600"
      >
        fade-in-down
      </TEAnimation>
      <TEAnimation
        animation="[fade-in-left_1s_ease-in-out]"
        start="onHover"
        reset
        className="m-[20px] h-[130px] w-[130px] bg-[#fbfbfb] pt-10 text-center shadow-[0_2px_10px_0_rgba(0,0,0,0.14)] dark:bg-neutral-600"
      >
        fade-in-left
      </TEAnimation>
      <TEAnimation
        animation="[fade-in-right_1s_ease-in-out]"
        start="onHover"
        reset
        className="m-[20px] h-[130px] w-[130px] bg-[#fbfbfb] pt-10 text-center shadow-[0_2px_10px_0_rgba(0,0,0,0.14)] dark:bg-neutral-600"
      >
        fade-in-right
      </TEAnimation>
      <TEAnimation
        animation="[fade-in-up_1s_ease-in-out]"
        start="onHover"
        reset
        className="m-[20px] h-[130px] w-[130px] bg-[#fbfbfb] pt-10 text-center shadow-[0_2px_10px_0_rgba(0,0,0,0.14)] dark:bg-neutral-600"
      >
        fade-in-up
      </TEAnimation>
      <TEAnimation
        animation="[fade-out_1s_ease-in-out]"
        start="onHover"
        reset
        className="m-[20px] h-[130px] w-[130px] bg-[#fbfbfb] pt-10 text-center shadow-[0_2px_10px_0_rgba(0,0,0,0.14)] dark:bg-neutral-600"
      >
        fade-out
      </TEAnimation>
      <TEAnimation
        animation="[fade-out-down_1s_ease-in-out]"
        start="onHover"
        reset
        className="m-[20px] h-[130px] w-[130px] bg-[#fbfbfb] pt-10 text-center shadow-[0_2px_10px_0_rgba(0,0,0,0.14)] dark:bg-neutral-600"
      >
        fade-out-down
      </TEAnimation>
      <TEAnimation
        animation="[fade-out-left_1s_ease-in-out]"
        start="onHover"
        reset
        className="m-[20px] h-[130px] w-[130px] bg-[#fbfbfb] pt-10 text-center shadow-[0_2px_10px_0_rgba(0,0,0,0.14)] dark:bg-neutral-600"
      >
        fade-out-left
      </TEAnimation>
      <TEAnimation
        animation="[fade-out-right_1s_ease-in-out]"
        start="onHover"
        reset
        className="m-[20px] h-[130px] w-[130px] bg-[#fbfbfb] pt-10 text-center shadow-[0_2px_10px_0_rgba(0,0,0,0.14)] dark:bg-neutral-600"
      >
        fade-out-right
      </TEAnimation>
      <TEAnimation
        animation="[fade-out-up_1s_ease-in-out]"
        start="onHover"
        reset
        className="m-[20px] h-[130px] w-[130px] bg-[#fbfbfb] pt-10 text-center shadow-[0_2px_10px_0_rgba(0,0,0,0.14)] dark:bg-neutral-600"
      >
        fade-out-up
      </TEAnimation>
      <TEAnimation
        animation="[slide-in-down_1s_ease-in-out]"
        start="onHover"
        reset
        className="m-[20px] h-[130px] w-[130px] bg-[#fbfbfb] pt-10 text-center shadow-[0_2px_10px_0_rgba(0,0,0,0.14)] dark:bg-neutral-600"
      >
        slide-in-down
      </TEAnimation>
      <TEAnimation
        animation="[slide-in-left_1s_ease-in-out]"
        start="onHover"
        reset
        className="m-[20px] h-[130px] w-[130px] bg-[#fbfbfb] pt-10 text-center shadow-[0_2px_10px_0_rgba(0,0,0,0.14)] dark:bg-neutral-600"
      >
        slide-in-left
      </TEAnimation>
      <TEAnimation
        animation="[slide-in-right_1s_ease-in-out]"
        start="onHover"
        reset
        className="m-[20px] h-[130px] w-[130px] bg-[#fbfbfb] pt-10 text-center shadow-[0_2px_10px_0_rgba(0,0,0,0.14)] dark:bg-neutral-600"
      >
        slide-in-right
      </TEAnimation>
      <TEAnimation
        animation="[slide-in-up_1s_ease-in-out]"
        start="onHover"
        reset
        className="m-[20px] h-[130px] w-[130px] bg-[#fbfbfb] pt-10 text-center shadow-[0_2px_10px_0_rgba(0,0,0,0.14)] dark:bg-neutral-600"
      >
        slide-in-up
      </TEAnimation>
      <TEAnimation
        animation="[slide-out-down_1s_ease-in-out]"
        start="onHover"
        reset
        className="m-[20px] h-[130px] w-[130px] bg-[#fbfbfb] pt-10 text-center shadow-[0_2px_10px_0_rgba(0,0,0,0.14)] dark:bg-neutral-600"
      >
        slide-out-down
      </TEAnimation>
      <TEAnimation
        animation="[slide-out-left_1s_ease-in-out]"
        start="onHover"
        reset
        className="m-[20px] h-[130px] w-[130px] bg-[#fbfbfb] pt-10 text-center shadow-[0_2px_10px_0_rgba(0,0,0,0.14)] dark:bg-neutral-600"
      >
        slide-out-left
      </TEAnimation>
      <TEAnimation
        animation="[slide-out-right_1s_ease-in-out]"
        start="onHover"
        reset
        className="m-[20px] h-[130px] w-[130px] bg-[#fbfbfb] pt-10 text-center shadow-[0_2px_10px_0_rgba(0,0,0,0.14)] dark:bg-neutral-600"
      >
        slide-out-right
      </TEAnimation>
      <TEAnimation
        animation="[slide-out-up_1s_ease-in-out]"
        start="onHover"
        reset
        className="m-[20px] h-[130px] w-[130px] bg-[#fbfbfb] pt-10 text-center shadow-[0_2px_10px_0_rgba(0,0,0,0.14)] dark:bg-neutral-600"
      >
        slide-out-up
      </TEAnimation>
      <TEAnimation
        animation="[slide-down_1s_ease-in-out]"
        start="onHover"
        reset
        className="m-[20px] h-[130px] w-[130px] bg-[#fbfbfb] pt-10 text-center shadow-[0_2px_10px_0_rgba(0,0,0,0.14)] dark:bg-neutral-600"
      >
        slide-down
      </TEAnimation>
      <TEAnimation
        animation="[slide-left_1s_ease-in-out]"
        start="onHover"
        reset
        className="m-[20px] h-[130px] w-[130px] bg-[#fbfbfb] pt-10 text-center shadow-[0_2px_10px_0_rgba(0,0,0,0.14)] dark:bg-neutral-600"
      >
        slide-left
      </TEAnimation>
      <TEAnimation
        animation="[slide-right_1s_ease-in-out]"
        start="onHover"
        reset
        className="m-[20px] h-[130px] w-[130px] bg-[#fbfbfb] pt-10 text-center shadow-[0_2px_10px_0_rgba(0,0,0,0.14)] dark:bg-neutral-600"
      >
        slide-right
      </TEAnimation>
      <TEAnimation
        animation="[slide-up_1s_ease-in-out]"
        start="onHover"
        reset
        className="m-[20px] h-[130px] w-[130px] bg-[#fbfbfb] pt-10 text-center shadow-[0_2px_10px_0_rgba(0,0,0,0.14)] dark:bg-neutral-600"
      >
        slide-up
      </TEAnimation>
      <TEAnimation
        animation="[zoom-in_1s_ease-in-out]"
        start="onHover"
        reset
        className="m-[20px] h-[130px] w-[130px] bg-[#fbfbfb] pt-10 text-center shadow-[0_2px_10px_0_rgba(0,0,0,0.14)] dark:bg-neutral-600"
      >
        zoom-in
      </TEAnimation>
      <TEAnimation
        animation="[zoom-out_1s_ease-in-out]"
        start="onHover"
        reset
        className="m-[20px] h-[130px] w-[130px] bg-[#fbfbfb] pt-10 text-center shadow-[0_2px_10px_0_rgba(0,0,0,0.14)] dark:bg-neutral-600"
      >
        zoom-out
      </TEAnimation>
      <TEAnimation
        animation="[tada_1s_ease-in-out]"
        start="onHover"
        reset
        className="m-[20px] h-[130px] w-[130px] bg-[#fbfbfb] pt-10 text-center shadow-[0_2px_10px_0_rgba(0,0,0,0.14)] dark:bg-neutral-600"
      >
        tada
      </TEAnimation>
      <TEAnimation
        animation="[spinner-grow_1s_ease-in-out]"
        start="onHover"
        reset
        className="m-[20px] h-[130px] w-[130px] bg-[#fbfbfb] pt-10 text-center shadow-[0_2px_10px_0_rgba(0,0,0,0.14)] dark:bg-neutral-600"
      >
        spinner-grow
      </TEAnimation>
    </div>
  );
}
