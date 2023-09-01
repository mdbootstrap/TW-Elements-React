import React from "react";
import BasicExample from "./examples/BasicExample";

export default function CarouselPage(): JSX.Element {
  return (<div className="container my-12 mx-5 w-auto">
    {/* <!-- Section: Simple example --> */}
    <section>
      {/* <!-- Title --> */}
      <h2
        className="mb-5 mt-0 text-3xl font-semibold leading-normal"
        id="basic"
        data-te-spy-item
      >
        Basic Example
      </h2>

      {/* <!--Description --> */}
      <p className="mb-3">Click the Carousel to start cycling through the carousel items (to be implemented).</p>
      <BasicExample />
    </section>
  </div>)
}