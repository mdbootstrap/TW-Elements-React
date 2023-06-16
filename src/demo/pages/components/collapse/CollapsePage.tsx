import React from "react";
import CollapseBasicExample from "./examples/CollapseBasicExample";
import CollapseHorizontal from "./examples/CollapseHorizontal";
import CollapseMultipleTargets from "./examples/CollapseMultipleTargets";
import CollapseWithScroll from "./examples/CollapseWithScroll";

export default function CollapsePage(): JSX.Element {
  return (
    <div className="container my-12 mx-5">
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
          The collapse JavaScript plugin is used to show and hide content.
          Buttons or anchors are used as triggers that are mapped to specific
          elements you toggle. Collapsing an element will animate the
          <code>height</code> or <code>width</code> from its current value to 0.
        </p>
        <CollapseBasicExample />
      </section>
      {/* <!-- Section: Basic example --> */}

      {/* <!-- Section: Horizontal --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-5 text-3xl font-semibold leading-normal"
          id="horizontal"
          data-te-spy-item
        >
          Horizontal
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Use the <code>horizontal</code> attribute to transition the width
          instead of height and set a width on the immediate child element.
        </p>
        <CollapseHorizontal />
      </section>
      {/* <!-- Section: Horizontal --> */}

      {/* <!-- Section: Multiple Targets --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-5 text-3xl font-semibold leading-normal"
          id="multiple_targets"
          data-te-spy-item
        >
          Multiple targets
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          You can show and hide multiple elements with one button or multiple
          buttons. You have to change state to render component with another
          value.
        </p>
        <CollapseMultipleTargets />
      </section>
      {/* <!-- Section: Multiple Targets --> */}

      {/* <!-- Section: With scroll --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="with_scroll"
          data-te-spy-item
        >
          With Scroll
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Use prop <code>scroll</code> to see content with scrollbar.
        </p>
        <CollapseWithScroll />
      </section>
      {/* <!-- Section: With scroll --> */}
    </div>
  );
}
