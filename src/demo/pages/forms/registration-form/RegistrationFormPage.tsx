import React from "react";
import BasicExample from "./examples/BasicExample";
import ExampleV2 from "./examples/ExampleV2";
import ExampleV3 from "./examples/ExampleV3";

const RegistrationFormPage = () => {
  return (
    <div className="container my-12 mx-5">
      {/* <!-- Section: Basic example --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="my-5 text-3xl font-semibold leading-normal"
          id="basic"
          data-te-spy-item
        >
          Basic Example
        </h2>
        <BasicExample />
      </section>
      {/* <!-- Section: Basic example --> */}

      {/* <!-- Section: Example v2 --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="my-5 text-3xl font-semibold leading-normal"
          id="basic"
          data-te-spy-item
        >
          v.2
        </h2>
        <ExampleV2 />
      </section>
      {/* <!-- Section: Example v2 --> */}

      {/* <!-- Section: Example v3 --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="my-5 text-3xl font-semibold leading-normal"
          id="basic"
          data-te-spy-item
        >
          v.3
        </h2>
        <ExampleV3 />
      </section>
      {/* <!-- Section: Example v3 --> */}
    </div>
  );
};

export default RegistrationFormPage;
