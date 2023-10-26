import React from "react";
import VideoCarouselBasicExample from "./examples/VideoCarouselBasicExample";
import VideoCarouselFullPageExample from "./examples/VideoCarouselFullPage";

export default function VideoCarouselPage(): JSX.Element {
  return (
    <div className="container my-12 mx-5 w-auto">
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
          Video carousel is useful when you have several videos to show and you
          have limited space on the page.
        </p>

        <VideoCarouselBasicExample />
      </section>
      {/* <!-- Section: Basic example --> */}

      {/* <!-- Section: Full page example --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="basic"
          data-te-spy-item
        >
          Full page example
        </h2>

        {/* <!-- Description --> */}
        <p className="mb-3">
          Use videos full-page sliders that relate directly to the content to
          help create a positive first impression, and add CTA elements to
          navigate the user.
        </p>

        <VideoCarouselFullPageExample />
      </section>
      {/* <!-- Section: Full page example --> */}
    </div>
  );
}
