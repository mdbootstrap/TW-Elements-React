import React from "react";
import TooltipBasicExample from "./examples/TooltipBasicExample";
import TooltipFourDirections from "./examples/TooltipFourDirections";
import TooltipWithHTML from "./examples/TooltipWithHTML";
import TooltipDisabled from "./examples/TooltipDisabled";

const TooltipPage = () => {
  return (
    <div className="container my-12 mx-5">
      {/* <!-- Section: Basic Example --> */}
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
          In the following example you can see the button that will trigger the
          tooltip element to be shown when hovered or focused.
        </p>

        <TooltipBasicExample />
      </section>
      {/* <!-- Section: Basic Example --> */}

      {/* <!-- Section: Four Directions --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="my-5 text-3xl font-semibold leading-normal"
          id="four-directions"
          data-te-spy-item
        >
          Four directions
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Hover over the buttons below to see the four tooltips directions: top,
          right, bottom, and left.
        </p>

        <TooltipFourDirections />

        <p className="mt-5 mb-3">And with custom HTML added:</p>
        <TooltipWithHTML />
      </section>
      {/* <!-- Section: Four Directions --> */}

      {/* <!-- Section: Disabled --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="my-5 text-3xl font-semibold leading-normal"
          id="disabled"
          data-te-spy-item
        >
          Disabled elements
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Elements with the <code>disabled</code> attribute aren’t interactive,
          meaning users cannot focus, hover, or click them to trigger a tooltip
          (or popover). As a workaround, you’ll want to trigger the tooltip from
          a wrapper <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code>,
          ideally made keyboard-focusable using <code>tabIndex={0}</code>, and
          override the <code>pointer-events</code> on the disabled element.
        </p>

        <TooltipDisabled />
      </section>
      {/* <!-- Section: Disabled --> */}
    </div>
  );
};

export default TooltipPage;
