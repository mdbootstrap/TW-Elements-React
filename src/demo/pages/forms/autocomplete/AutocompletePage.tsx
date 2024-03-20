import React from "react";
import BasicExample from "./examples/BasicExample";
import DisplayValue from "./examples/DisplayValue";
import AsynchronousSearch from "./examples/AsynchronousSearch";
import Threshold from "./examples/Threshold";
import CustomItemTemplate from "./examples/CustomItemTemplate";
import CustomContent from "./examples/CustomContent";
import Validation from "./examples/Validation";
import AutoSelect from "./examples/AutoSelect";

const AutocompletePage = () => {
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
          A basic example of the input field consists of the
          <code>input</code> element with specified <code>ID</code> and
          <code>label</code> element connected via this <code>ID</code> with the
          input.
        </p>
        <BasicExample />
      </section>
      {/* <!-- Section: Basic example --> */}

      {/* <!-- Section: Display value --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="display-value"
          data-te-spy-item
        >
          Display Value
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">Description</p>
        <DisplayValue />
      </section>
      {/* <!-- Section: Display value --> */}

      {/* <!-- Section: Asynchronous search --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="asynchronous-search"
          data-te-spy-item
        >
          Asynchronous search
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">Description</p>
        <AsynchronousSearch />
      </section>
      {/* <!-- Section: Asynchronous search --> */}

      {/* <!-- Section: Threshold --> */}

      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="threshold"
          data-te-spy-item
        >
          Threshold
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">Description</p>
        <Threshold />
      </section>
      {/* <!-- Section: Threshold --> */}

      {/* <!-- Section: Custom item template --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="custom-item-template"
          data-te-spy-item
        >
          Custom item template
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">Description</p>
        <CustomItemTemplate />
      </section>
      {/* <!-- Section: Custom item template --> */}

      {/* <!-- Section: Custom content --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="custom-content"
          data-te-spy-item
        >
          Custom content
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">Description</p>
        <CustomContent />
      </section>
      {/* <!-- Section: Custom content --> */}

      {/* <!-- Section: Validation --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="validation"
          data-te-spy-item
        >
          Validation
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">Description</p>
        <Validation />
      </section>
      {/* <!-- Section: Validation --> */}

      {/* <!-- Section: Auto select --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="auto-select"
          data-te-spy-item
        >
          Auto select
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">Description</p>
        <AutoSelect />
      </section>
      {/* <!-- Section: Auto select --> */}
    </div>
  );
};

export default AutocompletePage;
