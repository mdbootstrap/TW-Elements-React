import React from "react";
import SelectBasicExample from "./examples/SelectBasicExample";
import MultiselectExample from "./examples/MultiselectExample";
import SelectWithLabelExample from "./examples/SelectWithLabelExample";
import SelectWithPlaceholderExample from "./examples/SelectWithPlaceholderExample";
import SizeExample from "./examples/SizeExample";
import DisabledSelectExample from "./examples/DisabledSelectExample";
import DisabledOptionsExample from "./examples/DisabledOptionsExample";
import ClearButtonExample from "./examples/ClearButtonExample";
import CustomContentExample from "./examples/CustomContentExample";
import VisibleOptionsExample from "./examples/VisibleOptionsExample";
import SecondaryTextExample from "./examples/SecondaryTextExample";
import SearchExample from "./examples/SearchExample";
import SelectWithModalExample from "./examples/SelectWithModalExample";
import OptionGroupsExample from "./examples/OptionGroupsExample";
import SelectWithIconsExample from "./examples/SelectWithIconsExample";
import SetValueExample from "./examples/SetValueExample";
import SelectValueMultipleExample from "./examples/SelectValueMultipleExample";
import SelectWithToggle from "./examples/SelectWithToggle";
import AutoSelectExample from "./examples/AutoSelectExample";
import HiddenSelectedOptionExample from "./examples/HiddenSelectedOptionExample";
import SelectWithCSSExample from "./examples/SelectWithCSSExample";

const SelectPage = () => {
  return (
    <div className="container my-12 mx-5">
      {/* <!-- Section: Basic example --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="select-basic-example"
          data-te-spy-item
        >
          Basic example
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          The Select component is most useful for gathering information provided
          by the user from a list of options. Basic select component allows you
          to choose from a number of options.
        </p>
        <SelectBasicExample />
      </section>
      {/* <!-- Section: Multiselect --> */}

      {/* <!-- Section: Multiselect --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="multiselect-example"
          data-te-spy-item
        >
          Multiselect
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Add <code>multiple</code> prop to the select element to activate
          multiple mode.
        </p>
        <MultiselectExample />
      </section>
      {/* <!-- Section: Multiselect --> */}

      {/* <!-- Select with label --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="select-with-label-example"
          data-te-spy-item
        >
          Select with label
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          You can add select label by adding <code>label</code> prop to the
          select component.
        </p>
        <SelectWithLabelExample />
      </section>
      {/* <!-- Section: Select with label --> */}

      {/* <!-- Section: Select with placeholder --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="select-with-placeholder-example"
          data-te-spy-item
        >
          Select with placeholder
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Use <code>placeholder</code> prop to set placeholder for select input.
          The placeholder will be displayed when input is focused and no option
          is selected
        </p>
        <SelectWithPlaceholderExample />
      </section>
      {/* <!-- Section: Select with placeholder --> */}

      {/* <!-- Section: Size --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="size-example"
          data-te-spy-item
        >
          Size
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Change the size of select input by changing the value of{" "}
          <code>size</code> prop.
        </p>
        <SizeExample />
      </section>
      {/* <!-- Section: Size --> */}

      {/* <!-- Section: Disabled select --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="disabled-select-example"
          data-te-spy-item
        >
          Disabled select
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Add <code>disabled</code> prop to the select element to disable select
          input.
        </p>
        <DisabledSelectExample />
      </section>
      {/* <!-- Section: Disabled select --> */}

      {/* <!-- Section: Disabled options --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="disabled-options-example"
          data-te-spy-item
        >
          Disabled options
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Use <code>disabled</code> prop on option element to disable specific
          option.
        </p>
        <DisabledOptionsExample />
      </section>
      {/* <!-- Section: Disabled options --> */}

      {/* <!-- Section: Clear button --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="clear-button-example"
          data-te-spy-item
        >
          Clear button
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Add the <code>clearButton</code> prop to display the button that will
          allow to clear current selections.
        </p>
        <ClearButtonExample />
      </section>
      {/* <!-- Section: Clear button --> */}

      {/* <!-- Section: Custom content --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="custom-content-example"
          data-te-spy-item
        >
          Custom content
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          <code>Children</code> of the <code>TESelect</code> component will be
          displayed at the end of the select dropdown.
        </p>
        <CustomContentExample />
      </section>
      {/* <!-- Section: Custom content --> */}

      {/* <!-- Section: Visible options --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="visible-options-example"
          data-te-spy-item
        >
          Visible options
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Use <code>visibleOptions</code> prop to change the number of options
          that will be displayed in the select dropdown without scrolling.
        </p>
        <VisibleOptionsExample />
      </section>
      {/* <!-- Section: Visible options --> */}

      {/* <!-- Section: Secondary text --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="secondary-text-example"
          data-te-spy-item
        >
          Secondary text
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Add <code>secondaryText</code> property to the specific options to
          display secondary text.
        </p>
        <SecondaryTextExample />
      </section>
      {/* <!-- Section: Secondary text --> */}

      {/* <!-- Section: Search --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="search-example"
          data-te-spy-item
        >
          Search
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Add <code>search</code> prop to enable options filtering.
        </p>
        <SearchExample />
      </section>
      {/* <!-- Section: Search --> */}

      {/* <!-- Section: Select with search inside a modal --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="select-with-modal-example"
          data-te-spy-item
        >
          Select with search inside a modal
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3"></p>
        <SelectWithModalExample />
      </section>
      {/* <!-- Section: Select with search inside a modal --> */}

      {/* <!-- Section: Option groups --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="option-groups-example"
          data-te-spy-item
        >
          Option groups
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          It is possible to group options by using <code>optgroup</code>{" "}
          property.
        </p>
        <OptionGroupsExample />
      </section>
      {/* <!-- Section: Option groups --> */}

      {/* <!-- Section: Select with icons --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="select-with-icons-example"
          data-te-spy-item
        >
          Select with icons
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Add <code>icon</code> property to the specific options to display the
          option icon.
        </p>
        <SelectWithIconsExample />
      </section>
      {/* <!-- Section: Select with icons --> */}

      {/* <!-- Section: Set value --> */}
      <section>
        {/* <!-- Title --> */}
        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal">
          Set value
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          The <code>selectValue</code> state value allows to programatically set
          the component selections.
        </p>
      </section>
      {/* <!-- Section: Set value --> */}

      {/* <!-- Section: Single selection --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="set-value-example"
          data-te-spy-item
        >
          Single selection
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Add single value string to the arguments list to correctly select
          option with corresponding value in single selection mode
        </p>
        <SetValueExample />
      </section>
      {/* <!-- Section: Single selection --> */}

      {/* <!-- Section: Multi selection --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="select-value-multiple-example"
          data-te-spy-item
        >
          Multi selection
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Add array of string values to the arguments list to correctly select
          option with corresponding value in multi selection mode.
        </p>
        <SelectValueMultipleExample />
      </section>
      {/* <!-- Section: Multi selection --> */}

      {/* <!-- Section: Select with toggle element --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="select-with-toggle-element-example"
          data-te-spy-item
        >
          Select with toggle element
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Use the <code>open</code> and <code>setOpen</code> props to control
          the select dropdown visibility.
        </p>
        <SelectWithToggle />
      </section>
      {/* <!-- Section: Select with toggle element --> */}

      {/* <!-- Section: Auto select --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="auto-select-example"
          data-te-spy-item
        >
          Auto select
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Set <code>autoSelect</code> prop to the Select component to enable
          selecting on Tab press.
        </p>
        <AutoSelectExample />
      </section>
      {/* <!-- Section: Auto select --> */}

      {/* <!-- Section: Hidden selected option --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="hidden-selected-option-example"
          data-te-spy-item
        >
          Hidden selected option
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Add <code>preventFirstSelection</code> prop to leave select with no
          selection.
        </p>
        <HiddenSelectedOptionExample />
      </section>
      {/* <!-- Section: Hidden selected option --> */}

      {/* <!-- Section: Select with CSS classes --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="select-with-css-example"
          data-te-spy-item
        >
          Select with CSS classes
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          In order to use select with additional CSS classes you need to add the{" "}
          <code>className</code> prop and use CSS classes you want.
        </p>
        <SelectWithCSSExample />
      </section>
      {/* <!-- Section: Select with CSS classes --> */}
    </div>
  );
};

export default SelectPage;
