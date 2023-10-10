import React from "react";
import { TEAnimation } from "tw-elements-react";

export default function AnimationsFadingGallery(): JSX.Element {
  return (
    <>
      <div className="text-center h-[1500px] mt-5">
        <h2 className="font-normal text-xl">
          With animation on scroll you can create an impressive gallery that
          will appear smoothly step by step. Scroll down to see the effect.
          <br />
          Animation will launch <strong>every time</strong> it's reached.
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-16 mx-16">
        <TEAnimation
          animation="[fade-in_1s_ease-in-out]"
          start="onScroll"
          repeatOnScroll
        >
          <img
            src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
            className="rounded"
          />
        </TEAnimation>
        <TEAnimation
          animation="[fade-in_1s_ease-in-out]"
          start="onScroll"
          repeatOnScroll
          delay={300}
        >
          <img
            src="https://tecdn.b-cdn.net/img/new/standard/city/042.webp"
            className="rounded"
          />
        </TEAnimation>
        <TEAnimation
          animation="[fade-in_1s_ease-in-out]"
          start="onScroll"
          repeatOnScroll
          delay={500}
        >
          <img
            src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
            className="rounded"
          />
        </TEAnimation>
        <TEAnimation
          animation="[fade-in_1s_ease-in-out]"
          start="onScroll"
          repeatOnScroll
        >
          <img
            src="https://tecdn.b-cdn.net/img/new/standard/city/044.webp"
            className="rounded"
          />
        </TEAnimation>
        <TEAnimation
          animation="[fade-in_1s_ease-in-out]"
          start="onScroll"
          repeatOnScroll
          delay={300}
        >
          <img
            src="https://tecdn.b-cdn.net/img/new/standard/city/045.webp"
            className="rounded"
          />
        </TEAnimation>
        <TEAnimation
          animation="[fade-in_1s_ease-in-out]"
          start="onScroll"
          repeatOnScroll
          delay={500}
        >
          <img
            src="https://tecdn.b-cdn.net/img/new/standard/city/046.webp"
            className="rounded"
          />
        </TEAnimation>
      </div>
    </>
  );
}
