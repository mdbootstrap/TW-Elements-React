import React from "react";
import RippleBasicExample from "./examples/RippleBasicExample";
import RippleImage from "./examples/RippleImage";
import RippleColors1 from "./examples/RippleColors1";
import RippleColors2 from "./examples/RippleColors2";
import RippleColors3 from "./examples/RippleColors3";
import RippleDuration from "./examples/RippleDuration";
import RippleCentered from "./examples/RippleCentered";
import RippleUnbound from "./examples/RippleUnbound";
import RippleRadius from "./examples/RippleRadius";

export default function CollapsePage(): JSX.Element {
  return (
    <div className="container my-12 mx-5">
      {/* <!-- Section: Basic example --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="basic-example"
          data-te-spy-item
        >
          Basic example
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          The ripple effect is a way to let the user know that there has been a
          click interaction. You can easily add a ripple effect to the buttons.
        </p>
        <RippleBasicExample />
      </section>
      {/* <!-- Section: Basic example --> */}

      <hr className="my-12" />

      {/* <!-- Section: Image --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="image"
          data-te-spy-item
        >
          Image
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          You can also easily add the ripple effect to images, by wrapping them
          between <code>TERipple</code> tags.
        </p>
        <RippleImage />
      </section>
      {/* <!-- Section: Image --> */}

      <hr className="my-12" />

      {/* <!-- Section: Colors --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="colors"
          data-te-spy-item
        >
          Colors
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          You can easily manipulate the color of the ripple effect to suit your
          needs. By using
          <code>rippleColor</code> prop you can change its color. You can also
          change the color in darkmode by using <code>rippleColorDark</code>{" "}
          prop.
        </p>
        <RippleColors1 />
      </section>
      {/* <!-- Section: Colors --> */}

      {/* <!-- Section: Colors 2 --> */}
      <section>
        {/* <!-- Title --> */}
        <h3
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="colors2"
        ></h3>
        {/* <!-- Description --> */}
        <p className="mb-3"></p>
        <RippleColors2 />
      </section>
      {/* <!-- Section: Colors 2 --> */}

      {/* <!-- Section: Colors 3 --> */}
      <section>
        {/* <!-- Title --> */}
        <h3
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="colors3"
        ></h3>
        {/* <!-- Description --> */}
        <p className="mb-3"></p>
        <RippleColors3 />
      </section>
      {/* <!-- Section: Colors 3 --> */}

      <hr className="my-12" />

      {/* <!-- Section: Duration --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="duration"
          data-te-spy-item
        >
          Duration
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          If you don't want the ripple effect to move on the button too quickly,
          use
          <code>rippleDuration</code> prop and modify the duration of the
          ripple.
        </p>
        <RippleDuration />
      </section>
      {/* <!-- Section: Duration --> */}

      <hr className="my-12" />

      {/* <!-- Section: Centered --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="centered"
          data-te-spy-item
        >
          Centered
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          If you add the prop <code>rippleCentered</code>, the ripple will
          always start at the center of the element, not at the affected
          location.
        </p>
        <RippleCentered />
      </section>
      {/* <!-- Section: Centered --> */}

      <hr className="my-12" />

      {/* <!-- Section: Unbound --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="unbound"
          data-te-spy-item
        >
          Unbound
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          If you use the <code>rippleUnbound</code> prop, the ripple will not be
          bound to the element and will extend beyond its boundaries.
        </p>
        <RippleUnbound />
      </section>
      {/* <!-- Section: Unbound --> */}

      <hr className="my-12" />

      {/* <!-- Section: Radius --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="radius"
          data-te-spy-item
        >
          Radius
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          The <code>rippleRadius</code> prop can be used to modify the ripple
          radius. The numeric value is expressed in pixels, for example:
          <code>rippleRadius={10}</code>
        </p>
        <RippleRadius />
      </section>
      {/* <!-- Section: Radius --> */}
    </div>
  );
}
