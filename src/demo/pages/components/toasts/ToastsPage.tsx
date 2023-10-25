import React from "react";
import BasicExample from "./examples/BasicExamples";
import Colors from "./examples/Colors";
import TriggerExample from "./examples/TriggerExample";

const ToastsPage = () => {
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
          Basic examples
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Use this simple toast component with an message, and dismissable close
          button to show alert messages to your website visitors.
        </p>

        <div>
          <BasicExample />
        </div>
      </section>
      {/* <!-- Section: Basic example --> */}

      <br />
      <br />
      <br />

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
          Use these contextual toast components to show primary, success,
          danger, or warning alert messages to your users.
        </p>

        <div>
          <Colors />
        </div>
      </section>
      {/* <!-- Section: Colors --> */}

      <br />
      <br />
      <br />

      {/* <!-- Section: Trigger Example --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="trigger"
          data-te-spy-item
        >
          Trigger Example
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          You can open an toast by using the <code>open</code> prop.
        </p>

        <div>
          <TriggerExample />
        </div>
      </section>
      {/* <!-- Section: Trigger Example --> */}
    </div>
  );
};

export default ToastsPage;
