import React from "react";
import TextareaBasicExample from "./examples/TextareaBasicExample";

const TextareaPage = () => {
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
          Text fields allow users to enter text into the user interface. They
          typically appear in forms and dialog boxes. <code>TETextarea</code>{" "}
          component extended user <code>TEInput</code> so that more of the text
          is visible.
        </p>
        <TextareaBasicExample />
      </section>
      {/* <!-- Section: Basic example --> */}
    </div>
  );
};

export default TextareaPage;
