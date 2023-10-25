import React from "react";
import CarouselBasicExample from "./examples/CarouselBasicExample";
import CarouselSlidesOnly from "./examples/CarouselSlidesOnly";
import CarouselWithControls from "./examples/CarouselWithControls";
import CarouselWithIndicators from "./examples/CarouselWIthIndicators";
import CarouselCrossfade from "./examples/CarouselCrossfade";
import CarouselDarkVariant from "./examples/CarouselDarkVariant";

export default function ModalPage(): JSX.Element {
  return (
    <div className="container my-12 mx-5 w-auto">
      {/* <!-- Section: Basic example --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="basic"
          data-te-spy-item
        >
          Basic example
        </h2>

        {/* <!-- Description --> */}
        <p className="mb-3">
          <code>TECarousel</code> component is useful to navigate through a
          collection of images in a sequential fashion, moving to the
          previous/next one through the arrows on the sides.
        </p>

        <CarouselBasicExample />
      </section>
      {/* <!-- Section: Basic example --> */}

      {/* <!-- Section: Slides only --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="my-5 text-3xl font-semibold leading-normal"
          id="slides-only"
          data-te-spy-item
        >
          Slides only
        </h2>

        {/* <!-- Description --> */}
        <p className="mb-3">
          Carousel slides only allows you to automatically and smoothly switch
          between gallery images without controls. It is a useful component for
          dynamic design where user involvement is important.
        </p>

        <CarouselSlidesOnly />
      </section>
      {/* <!-- Section: Slides only --> */}

      {/* <!-- Section: With controls --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="my-5 text-3xl font-semibold leading-normal"
          id="with-controls"
          data-te-spy-item
        >
          With controls
        </h2>

        {/* <!-- Description --> */}
        <p className="mb-3">
          Use the <code>showControls</code> property to add the previous and
          next buttons which allow you to control automatically moving gallery
          items.
        </p>

        <CarouselWithControls />
      </section>
      {/* <!-- Section: With controls --> */}

      {/* <!-- Section: With indicators --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="my-5 text-3xl font-semibold leading-normal"
          id="with-indicators"
          data-te-spy-item
        >
          With indicators
        </h2>

        {/* <!-- Description --> */}
        <p className="mb-3">
          Use the <code>showIndicators</code> property to add the indicators.
          Adding it to the carousel, alongside the controls, can make it easier
          to navigate between the available images.
        </p>

        <CarouselWithIndicators />
      </section>
      {/* <!-- Section: With indicators --> */}

      {/* <!-- Section: Crossfade --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="my-5 text-3xl font-semibold leading-normal"
          id="crossfade"
          data-te-spy-item
        >
          Crossfade
        </h2>

        {/* <!-- Description --> */}
        <p className="mb-3">
          Use fade transition on your slides easily by adding the{" "}
          <code>crossfade</code> property to the <code>TECarousel</code>. Also
          don't forget to add properly transition styles to the{" "}
          <code>TECarouselItem</code>'s.
        </p>

        <CarouselCrossfade />
      </section>
      {/* <!-- Section: Crossfade --> */}

      {/* <!-- Section: Dark variant --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="my-5 text-3xl font-semibold leading-normal"
          id="dark-variant"
          data-te-spy-item
        >
          Dark variant
        </h2>

        {/* <!-- Description --> */}
        <p className="mb-3">
          Use <code>nextBtnIcon</code>, <code>prevBtnIcon</code> properties and{" "}
          <code>theme</code> object to customize carousel controls and
          indicators as you want.
        </p>

        <CarouselDarkVariant />
      </section>
      {/* <!-- Section: Dark variant --> */}
    </div>
  );
}
