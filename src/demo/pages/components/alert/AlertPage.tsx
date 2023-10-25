import React from "react";
import BasicExample from "./examples/BasicExamples";
import LinkColor from "./examples/LinkColor";
import Icons from "./examples/Icons";
import AdditionalContent from "./examples/AdditionalContent";
import DismissingExample from "./examples/DismissingExample";
import TriggerExample from "./examples/TriggerExample";

const AlertPage = () => {
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
          Alert offers different levels of severity that requires immediate
          attention of the end users such as warning, error or confirmation
          messages, which are determined by a distinctive color. Use one of the
          the contextual classes below for a different look.
        </p>

        <div>
          <BasicExample />
        </div>
      </section>
      {/* <!-- Section: Basic example --> */}

      <br />
      <br />
      <br />

      {/* <!-- Section: Link color --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="link-color"
          data-te-spy-item
        >
          Link color
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Apply the appropriate className to the links inside any alert boxes to
          quickly create matching colored links.
        </p>

        <div>
          <LinkColor />
        </div>
      </section>
      {/* <!-- Link color --> */}

      <br />
      <br />
      <br />

      {/* <!-- Section: Icons --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="icons"
          data-te-spy-item
        >
          Icons
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Include a descriptive <a href="/content-styles/icons">icon</a> to
          complement the message inside the alert component with the following
          example.
        </p>

        <div>
          <Icons />
        </div>
      </section>
      {/* <!-- Section: Icons --> */}

      <br />
      <br />
      <br />

      {/* <!-- Section: Additional content --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="additional-content"
          data-te-spy-item
        >
          Additional content
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Within the alert, you can also place additional elements such as
          headers, paragraphs, and dividers to be more elaborate and convey more
          content.
        </p>

        <div>
          <AdditionalContent />
        </div>
      </section>
      {/* <!-- Section: Additional content --> */}

      <br />
      <br />
      <br />

      {/* <!-- Section: Dismissing --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="dismissing"
          data-te-spy-item
        >
          Dismissing
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          To skip alerts that the user has already read, we can add an optional
          close button so the user can easily dismiss it.
        </p>

        <div>
          <DismissingExample />
        </div>
      </section>
      {/* <!-- Section: Dismissing --> */}

      <br />
      <br />
      <br />

      {/* <!-- Section: Alert Trigger --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="trigger"
          data-te-spy-item
        >
          Alert Trigger
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          You can open an alert by using the <code>open</code> prop.
        </p>

        <div>
          <TriggerExample />
        </div>
      </section>
      {/* <!-- Section: Alert Trigger --> */}
    </div>
  );
};

export default AlertPage;
