import React from "react";
import BasicExample from "./examples/BasicExample";

const ScrollBackToTopButtonPage = () => {
  return (
    <div className="container mx-5 my-12">
      {/* <!-- Section: Basic Example --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="icons"
          data-te-spy-item
        >
          Scroll back to top button
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Button to return to the top of the page allows the user to quickly
          return to the top of the page without making too much effort. This can
          be very useful when the page has a lot of content.
        </p>

        <p className="mb-3">
          Use the code below to create button that scrolls back to the beginning
          of the page.
        </p>

        <BasicExample />
      </section>
      {/* <!-- Section: Basic Example --> */}
    </div>
  );
};

export default ScrollBackToTopButtonPage;
