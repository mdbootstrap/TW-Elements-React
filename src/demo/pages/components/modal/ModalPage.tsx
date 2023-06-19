import React from "react";
import BasicExample from "./examples/BasicExample";
import StaticBackdrop from "./examples/StaticBackdrop";
import ScrollingLongContent from "./examples/ScrollingLongContent";
import ModalDialogScrollable from "./examples/ModalDialogScrollable";
import VerticalyCentered from "./examples/VerticalyCentered";
import SizesExample from "./examples/SizesExample";
import PositionsExample from "./examples/PositionsExample";
import FullscreenModal from "./examples/FullscreenModal";

export default function ModalPage(): JSX.Element {
  return (
    <div className="container my-12 mx-5 w-auto">
      {/* <!-- Section: Simple notification --> */}
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
        <p className="mb-3">Click the button to launch the modal.</p>

        <BasicExample />
      </section>
      {/* <!-- Section: Simple notification --> */}

      <hr className="border-t my-20" />

      {/* <!-- Section: Static backdrop --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="static"
          data-te-spy-item
        >
          Static backdrop
        </h2>

        {/* <!-- Description --> */}
        <p className="mb-3">
          Add the <code>staticBackdrop</code> prop to the <code>TEModal</code>{" "}
          component so the modal doesn't close when you click outside of it.
        </p>
        <StaticBackdrop />
      </section>
      {/* <!-- Section: Static backdrop --> */}

      <hr className="border-t my-20" />

      {/* <!-- Section: Scrolling long content --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="scrolling_long_content"
          data-te-spy-item
        >
          Scrolling long content
        </h2>

        {/* <!-- Description --> */}
        <p className="mb-3">
          When modals become too long for the users viewport or device, they
          scroll independent of the page itself.
        </p>

        <ScrollingLongContent />
      </section>
      {/* <!-- Section: Scrolling long content --> */}

      <hr className="border-t my-20" />

      {/* <!-- Section: Modal dialog scrollable --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="dialog_scrollable"
          data-te-spy-item
        >
          Modal dialog scrollable
        </h2>

        {/* <!-- Description --> */}
        <p className="mb-3">
          Create a scrollable modal that allows scroll the modal body by adding
          <code>scrollable</code> prop to the <code>TEModal</code> component.
        </p>

        <ModalDialogScrollable />
      </section>
      {/* <!-- Section: Modal dialog scrollable --> */}

      <hr className="border-t my-20" />

      {/* <!-- Section: Vertically centered --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="vertically_centered"
          data-te-spy-item
        >
          Vertically centered
        </h2>

        {/* <!-- Description --> */}
        <p className="mb-3">
          Use <code>centered</code> prop on the <code>TEModalDialog</code>
          component to vertically center the modal.
        </p>

        <VerticalyCentered />
      </section>
      {/* <!-- Section: Vertically centered --> */}

      <hr className="border-t my-20" />

      {/* <!-- Section: Sizes --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="sizes"
          data-te-spy-item
        >
          Sizes
        </h2>

        {/* <!-- Description --> */}
        <p className="mb-3">
          Use four different modal sizing options starting from small to extra
          large. Width of these modals will remain responsive when browsing on
          smaller devices. Simply add <code>size="xl"</code>,{" "}
          <code>size="lg"</code> or <code>size="sm"</code> to the{" "}
          <code>TEModalDialog</code> component.
        </p>

        <SizesExample />
      </section>
      {/* <!-- Section: Sizes --> */}

      <hr className="border-t my-20" />

      {/* <!-- Section: Positions --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="positions"
          data-te-spy-item
        >
          Positions
        </h2>

        {/* <!-- Description --> */}
        <p className="mb-3">
          Use four different modal positions. By setting the{" "}
          <code>position</code> prop to <code>top-right</code>,{" "}
          <code>top-left</code>, <code>bottom-right</code> or{" "}
          <code>bottom-left</code> on the <code>TEModalDialog</code> component
          you can change the position of the modal. If you want to change the
          show/hide animation, you can change them in the <code>theme</code>{" "}
          prop as shown below.
        </p>

        <PositionsExample />
      </section>
      {/* <!-- Section: Positions --> */}

      <hr className="border-t my-20" />

      {/* <!-- Section: Fullscreen modal --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="fullscreen"
          data-te-spy-item
        >
          Fullscreen modal
        </h2>

        {/* <!-- Description --> */}
        <p className="mb-3">
          Set <code>size="fullscreen"</code> to <code>TEModalDialog</code> to
          create fullscreen modal.
        </p>

        <FullscreenModal />
      </section>
      {/* <!-- Section: Fullscreen modal --> */}
    </div>
  );
}
