import React from "react";
import AnimationsAll from "./examples/AnimationsAll";
import AnimationsBasicExample from "./examples/AnimationsBasicExample";
import AnimationsOnClick from "./examples/AnimationsOnClick";
import AnimationsOnHover from "./examples/AnimationsOnHover";
import AnimationsOnLoad from "./examples/AnimationsOnLoad";
import AnimationsManually from "./examples/AnimationsManually";
import AnimationsOnScroll from "./examples/AnimationsOnScroll";
import AnimationsRepeatOnScroll from "./examples/AnimationsRepeatOnScroll";
import AnimationsShowOnLoad from "./examples/AnimationsShowOnLoad";
import AnimationsLaunchingExternal from "./examples/AnimationsLaunchingExternal";
import AnimationsStartManually from "./examples/AnimationsStartManually";
import AnimationsChangeType from "./examples/AnimationsChangeType";
import AnimationsFadingGallery from "./examples/AnimationsFadingGallery";
import AnimationsListGroup from "./examples/AnimationsListGroup";

const AnimationsPage = () => {
  return (
    <div className="container my-12 mx-5 overflow-hidden">
      {/* <!-- Section: All animations --> */}
      <section>
        <AnimationsAll />
      </section>
      {/* <!-- Section: All animations --> */}
      {/* <!-- Section: Basic example --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="my-5 text-3xl font-semibold leading-normal"
          id="basic"
          data-te-spy-item
        >
          Basic example
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          The easiest way to implement the animation is to use{" "}
          <code>TEAnimation</code> component. In the example below, we wrapped
          the simple <code>svg</code> with <code>TEAnimation</code> and added{" "}
          <code>animation</code> and <code>reset</code> properties to give it
          animation on click. We didn't set <code>start</code> property, because
          it's set to <code>onClick</code> by default.
        </p>

        <ul className="ml-4 mb-5 list-disc">
          <li>
            <code>animation</code> - specify which animation apply to the
            element. In the demo section above you can find available
            animations.
          </li>
          <li>
            <code>reset</code> - specify if the animation can be repeated.
          </li>
          <li>
            <code>start</code> - specify how to run the animation. By default
            it's set to <code>onClick</code>.
          </li>
        </ul>

        <AnimationsBasicExample />
      </section>
      {/* <!-- Section: Basic example --> */}
      {/* <!-- Section: Launch options --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="my-5 text-3xl font-semibold leading-normal"
          id="launch-options"
          data-te-spy-item
        >
          Launch options
        </h2>

        {/* <!-- Description --> */}
        <p className="mb-3">
          There are several options for launching the animation.
        </p>

        {/* <!-- Section: On click --> */}
        <section>
          {/* <!-- Title --> */}
          <h2
            className="my-5 text-xl font-semibold leading-normal"
            id="on-click"
            data-te-spy-item
          >
            On click
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            The animation will be launched when the element is clicked. This is
            the default launching option.
          </p>

          <AnimationsOnClick />
        </section>
        {/* <!-- Section: On click --> */}

        {/* <!-- Section: On hover --> */}
        <section>
          {/* <!-- Title --> */}
          <h2
            className="my-5 text-xl font-semibold leading-normal"
            id="on-hover"
            data-te-spy-item
          >
            On hover
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            Use <code>start="onHover"</code> to launch the animation on mouse
            hover.
          </p>

          <AnimationsOnHover />
        </section>
        {/* <!-- Section: On hover --> */}

        {/* <!-- Section: On load --> */}
        <section>
          {/* <!-- Title --> */}
          <h2
            className="my-5 text-xl font-semibold leading-normal"
            id="on-load"
            data-te-spy-item
          >
            On load
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            Use <code>start="onLoad"</code> to start the animation after loading
            the page. Refresh your browser to see this effect.
          </p>

          <AnimationsOnLoad />
        </section>
        {/* <!-- Section: On load --> */}

        {/* <!-- Section: Manually --> */}
        <section>
          {/* <!-- Title --> */}
          <h2
            className="my-5 text-xl font-semibold leading-normal"
            id="manually"
            data-te-spy-item
          >
            Manually
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            Use <code>start="manually"</code> to initialize component without
            animating, adding hover, clicking or scrolling events and use the{" "}
            <code>toggle</code> property to start/end the animation.
          </p>

          <AnimationsManually />
        </section>
        {/* <!-- Section: Manually --> */}

        {/* <!-- Section: On scroll --> */}
        <section>
          {/* <!-- Title --> */}
          <h2
            className="my-5 text-xl font-semibold leading-normal"
            id="on-scroll"
            data-te-spy-item
          >
            On scroll
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            Use <code>start="onScroll"</code> to launch the animation when you
            scroll the page and reach the element. Notice that the animation
            will launch <strong>only once</strong> - even if you reach it when
            scrolling multiple times.
          </p>

          <AnimationsOnScroll />
        </section>
        {/* <!-- Section: On scroll --> */}

        {/* <!-- Section: Repeat animation on scroll --> */}
        <section>
          {/* <!-- Title --> */}
          <h2
            className="my-5 text-xl font-semibold leading-normal"
            id="repeat-animation-on-scroll"
            data-te-spy-item
          >
            Repeat animation on scroll
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            If you want to launch the animation every time it's reached when
            scrolling use <code>repeatOnScroll</code> prop.
          </p>

          <AnimationsRepeatOnScroll />
        </section>
        {/* <!-- Section: Repeat animation on scroll --> */}

        {/* <!-- Section: Show on load --> */}
        <section>
          {/* <!-- Title --> */}
          <h2
            className="my-5 text-xl font-semibold leading-normal"
            id="show-on-load"
            data-te-spy-item
          >
            Show on load
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            Use <code>showOnLoad</code> property to show element and animation
            on page load.
          </p>

          <AnimationsShowOnLoad />
        </section>
        {/* <!-- Section: Show on load --> */}
      </section>
      {/* <!-- Section: Launch options --> */}

      {/* <!-- Section: Examples --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="my-5 text-3xl font-semibold leading-normal"
          id="examples"
          data-te-spy-item
        >
          Examples
        </h2>

        {/* <!-- Description --> */}
        <p className="mb-3">Examples of practical usage of the animation.</p>

        {/* <!-- Section: Launching via external element --> */}
        <section>
          {/* <!-- Title --> */}
          <h2
            className="my-5 text-xl font-semibold leading-normal"
            id="launching-via-external-element"
            data-te-spy-item
          >
            Launching via external element
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            Click or hover the button to launch the animation.
          </p>

          <AnimationsLaunchingExternal />
        </section>
        {/* <!-- Section: Launching via external element --> */}

        {/* <!-- Section: Start animation manually --> */}
        <section>
          {/* <!-- Title --> */}
          <h2
            className="my-5 text-xl font-semibold leading-normal"
            id="start-animation-manually"
            data-te-spy-item
          >
            Start animation manually
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            You can use <code>toggle</code> property to start/end the animation
          </p>

          <AnimationsStartManually />
        </section>
        {/* <!-- Section: Start animation manually --> */}

        {/* <!-- Section: Change animation type --> */}
        <section>
          {/* <!-- Title --> */}
          <h2
            className="my-5 text-xl font-semibold leading-normal"
            id="change-animation-type"
            data-te-spy-item
          >
            Change animation type
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            You can change the element's animation type at any time.
          </p>

          <AnimationsChangeType />
        </section>
        {/* <!-- Section: Change animation type --> */}

        {/* <!-- Section: Fading gallery --> */}
        <section>
          {/* <!-- Title --> */}
          <h2
            className="my-5 text-xl font-semibold leading-normal"
            id="fading-gallery"
            data-te-spy-item
          >
            Fading gallery
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            With animation on scroll you can create an impressive gallery that
            will appear smoothly step by step. In the example below, we
            additionally use <code>delay</code> prop on some images to make it
            appears one by one.
          </p>

          <AnimationsFadingGallery />
        </section>
        {/* <!-- Section: Fading gallery --> */}

        {/* <!-- Section: List group --> */}
        <section>
          {/* <!-- Title --> */}
          <h2
            className="my-5 text-xl font-semibold leading-normal"
            id="list-group"
            data-te-spy-item
          >
            List group
          </h2>

          {/* <!-- Description --> */}
          <p className="mb-3">
            Click "Add" button to add a new item to the list.
          </p>

          <AnimationsListGroup />
        </section>
        {/* <!-- Section: List group --> */}
      </section>
      {/* <!-- Section: Examples --> */}
    </div>
  );
};

export default AnimationsPage;
