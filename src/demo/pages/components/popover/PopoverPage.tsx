import React from "react";
import PopoverBasicExample from "./examples/PopoverBasicExample";
import PopoverFourDirections from "./examples/PopoverFourDirections";
import PopoverDismiss from "./examples/PopoverDismiss";
import PopoverDisabled from "./examples/PopoverDisabled";

const PopoverPage = () => {
  return (
    <div className="container my-12 px-5">
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
          {" "}
          In the following example you can see the button that will trigger the
          popover element to be shown when clicked.
        </p>
        <PopoverBasicExample />
      </section>
      {/* <!-- Section: Basic example --> */}

      {/* <!-- Section: Four directions --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="four-directions"
          data-te-spy-item
        >
          Four directions
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Click on the buttons below to see the four popovers directions:{" "}
          <code>top, right, bottom, left</code>.
        </p>
        <PopoverFourDirections />
      </section>
      {/* <!-- Section: Four directions --> */}

      {/* <!-- Section: Dismiss on next click --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="dismiss-on-next-click"
          data-te-spy-item
        >
          Dismiss on next click
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          {" "}
          Use <code>trigger="focus"</code> to dismiss on the next click of a
          different element than the toggle element.{" "}
        </p>
        <PopoverDismiss />
      </section>
      {/* <!-- Section: Dismiss on next click --> */}

      {/* <!-- Section: Disabled elements --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="disabled-elements"
          data-te-spy-item
        >
          Disabled elements
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Elements with the <code>disabled</code> attribute aren’t interactive,
          meaning users cannot focus, hover, or click them to trigger a popover
          (or tootlip). As a workaround, you’ll want to trigger the{" "}
          <code>TEPopoverToggler</code> from a wrapper <code>&lt;div&gt;</code>{" "}
          or <code>&lt;span&gt;</code>, ideally made keyboard-focusable using{" "}
          <code>tabIndex={0}</code>, and override the{" "}
          <code>pointer-events</code> on the disabled element.
        </p>

        <PopoverDisabled />
      </section>
      {/* <!-- Section: Disabled elements --> */}
    </div>
  );
};

export default PopoverPage;
