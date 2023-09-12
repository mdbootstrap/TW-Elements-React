import React from "react";
import DropdownLinkButton from "./examples/DropdownLinkButton";
import DropdownColors from "./examples/DropdownColors";
import DropdownBasicExample from "./examples/DropdownBasicExample";
import DropdownSizing from "./examples/DropdownSizing";
import DropdownDropup from "./examples/DrodpownDropup";
import DropdownDropright from "./examples/DropdownDropright";
import DropdownDropleft from "./examples/DropdownDropleft";
import DropdownMenuItemDisabled from "./examples/DropdownMenuItemDisabled";
import DropdownMenuItemHeader from "./examples/DropdownMenuItemHeader";
import DropdownMenuItemsDivider from "./examples/DropdownMenuItemsDivider";
import DropdownMenuItemText from "./examples/DropdownMenuItemText";

const DropdownPage = () => {
  return (
    <div className="container my-12 mx-5">
      {/* <!-- Section: Basic example --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="regular-button"
          data-te-spy-item
        >
          Basic example
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Dropdown allow user to select one option from a list of choices. Use
          with <code>button</code> elements.
        </p>

        <DropdownBasicExample />
      </section>
      {/* <!-- Section: Basic example --> */}

      {/* <!-- Section: Link button --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="my-5 text-3xl font-semibold leading-normal"
          id="link-button"
          data-te-spy-item
        >
          Link button
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          You also have the option of using <code>a</code> elements.
        </p>

        <DropdownLinkButton />
      </section>
      {/* <!-- Section: Link button --> */}

      {/* <!-- Section: Colors --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="my-5 text-3xl font-semibold leading-normal"
          id="colors"
          data-te-spy-item
        >
          Colors
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Dropdowns can be any variety of button style and color.
        </p>

        <DropdownColors />
      </section>
      {/* <!-- Section: Colors --> */}

      {/* <!-- Section: Sizing --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="my-5 text-3xl font-semibold leading-normal"
          id="sizing"
          data-te-spy-item
        >
          Sizing
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">Button dropdown work with buttons of all sizes.</p>

        <DropdownSizing />
      </section>
      {/* <!-- Section: Sizing --> */}

      {/* <!-- Section: Dropup --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="my-5 text-3xl font-semibold leading-normal"
          id="dropup"
          data-te-spy-item
        >
          Dropup
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Use <code>position='dropup'</code> prop on <code>TEDropdownMenu</code>{" "}
          component to change dropdown placement.
        </p>
        <div className="rounded-md border-l-[6px] border-solid border-info-400 bg-info-100 p-4 dark:border-info-300 dark:bg-info-300/30 ">
          <strong>Note:</strong> You are also able to change the alignment of
          the dropdown by using <code>alignment='end'</code> prop.
        </div>
        <DropdownDropup />
      </section>
      {/* <!-- Section: Dropup --> */}

      {/* <!-- Section: Dropright --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="my-5 text-3xl font-semibold leading-normal"
          id="dropright"
          data-te-spy-item
        >
          Dropright
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Use <code>position='dropright'</code> prop on{" "}
          <code>TEDropdownMenu</code> component.
        </p>

        <DropdownDropright />
      </section>
      {/* <!-- Section: Dropright --> */}

      {/* <!-- Section: Dropleft --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="my-5 text-3xl font-semibold leading-normal"
          id="dropleft"
          data-te-spy-item
        >
          Dropleft
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Use <code>position='dropleft'</code> prop on{" "}
          <code>TEDropdownMenu</code> component.
        </p>

        <DropdownDropleft />
      </section>
      {/* <!-- Section: Dropleft --> */}

      {/* <!-- Section: Menu item disabled --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="my-5 text-3xl font-semibold leading-normal"
          id="item-disabled"
          data-te-spy-item
        >
          Menu item disabled
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Add <code>disabled</code> property to <code>TEDropdownItem</code> in
          the dropdown to style them as disabled.
        </p>

        <DropdownMenuItemDisabled />
      </section>
      {/* <!-- Section: Menu item disabled --> */}

      {/* <!-- Section: Menu item header --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="my-5 text-3xl font-semibold leading-normal"
          id="item-header"
          data-te-spy-item
        >
          Menu item header
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Add <code>header</code> property to <code>TEDropdownItem</code> in the
          dropdown to style them as header.
        </p>

        <DropdownMenuItemHeader />
      </section>
      {/* <!-- Section: Menu item header --> */}

      {/* <!-- Section: Menu items divider --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="my-5 text-3xl font-semibold leading-normal"
          id="item-divider"
          data-te-spy-item
        >
          Menu item divider
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Add <code>divider</code> property to <code>TEDropdownItem</code> in
          the dropdown to style them as divider.
        </p>

        <DropdownMenuItemsDivider />
      </section>
      {/* <!-- Section: Menu items divider --> */}

      {/* <!-- Section: Menu item text --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="my-5 text-3xl font-semibold leading-normal"
          id="item-text"
          data-te-spy-item
        >
          Menu item text
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Place any freeform text within a <code>TEDropdownItem</code> with text
          and use custom classes.
        </p>

        <DropdownMenuItemText />
      </section>
      {/* <!-- Section: Menu item text --> */}
    </div>
  );
};

export default DropdownPage;
