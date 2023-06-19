import React from "react";
import InputBasicExample from "./examples/InputBasicExample";
import InputSizing from "./examples/InputSizing";
import InputDisabled from "./examples/InputDisabled";
import InputReadOnly from "./examples/InputReadOnly";
import InputText from "./examples/InputText";
import InputEmail from "./examples/InputEmail";
import InputPassword from "./examples/InputPassword";
import InputNumber from "./examples/InputNumber";
import InputPhoneNumber from "./examples/InputPhoneNumber";
import InputURL from "./examples/InputURL";
import InputHelperText from "./examples/InputHelperText";
import InputCharacterCounter from "./examples/InputCharacterCounter";

const InputPage = () => {
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
        <InputBasicExample />
      </section>
      {/* <!-- Section: Basic example --> */}

      {/* <!-- Section: Sizing --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="size"
          data-te-spy-item
        >
          Sizing
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Set heights using props like <code>size="lg"</code>,
          <code>size="base"</code>, <code>size="sm"</code>.
        </p>
        <InputSizing />
      </section>
      {/* <!-- Section: Sizing --> */}

      {/* <!-- Section: Disabled --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="disabled"
          data-te-spy-item
        >
          Disabled
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Add the <code>disabled</code> boolean attribute on an input to give it
          a grayed out appearance and remove pointer events.
        </p>
        <InputDisabled />
      </section>
      {/* <!-- Section: Disabled --> */}

      {/* <!-- Section: Readonly --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="readonly"
          data-te-spy-item
        >
          Readonly
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Add the <code>readOnly</code> boolean attribute on an input to prevent
          modification of the input’s value. Read-only inputs appear lighter
          (just like disabled inputs), but retain the standard cursor.
        </p>
        <InputReadOnly />
      </section>
      {/* <!-- Section: Readonly --> */}

      {/* <!-- Section: Text --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="text"
          data-te-spy-item
        >
          Text
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Input types let you specified what data users should provide and help
          you validate it.
        </p>
        <InputText />
      </section>
      {/* <!-- Section: Text --> */}

      {/* <!-- Section: Email --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="email"
          data-te-spy-item
        >
          Email
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          The <code>&lt;TEInput type="email"&gt;&lt;/TEInput&gt;</code> defines
          a field for an e-mail address. The input value is automatically
          validated to ensure it is a properly formatted e-mail address.
        </p>
        <InputEmail />
      </section>
      {/* <!-- Section: Email --> */}

      {/* <!-- Section: Password --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="password"
          data-te-spy-item
        >
          Password
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          The <code>&lt;TEInput type="password"&gt;&lt;/TEInput&gt;</code>{" "}
          defines a password field thus hiding characters as sensitive
          information.
        </p>
        <InputPassword />
      </section>
      {/* <!-- Section: Password --> */}

      {/* <!-- Section: Number --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="number"
          data-te-spy-item
        >
          Number
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          The <code>&lt;TEInput type="number"&gt;&lt;/TEInput&gt;</code> defines
          field for entering a number.
        </p>
        <InputNumber />
      </section>
      {/* <!-- Section: Number --> */}

      {/* <!-- Section: Phone Number --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="tel"
          data-te-spy-item
        >
          Phone number
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          The <code>&lt;TEInput type="tel"&gt;&lt;/TEInput&gt;</code> defines a
          field for entering a telephone number.
        </p>
        <InputPhoneNumber />
      </section>
      {/* <!-- Section: Phone Number --> */}

      {/* <!-- Section: URL --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="url"
          data-te-spy-item
        >
          URL
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          The <code>&lt;TEInput type="url"&gt;&lt;/TEInput&gt;</code> defines a
          field for entering a URL.
        </p>
        <InputURL />
      </section>
      {/* <!-- Section: URL --> */}

      {/* <!-- Section: Helper text --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="helper_text"
          data-te-spy-item
        >
          Helper text
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Helper text conveys additional guidance about the input field, such as
          how it will be used.
        </p>
        <InputHelperText />
      </section>
      {/* <!-- Section: Helper text --> */}

      {/* <!-- Section: Character counter --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="mb-5 mt-0 text-3xl font-semibold leading-normal"
          id="character_counter"
          data-te-spy-item
        >
          Character counter
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-3">
          Add prop
          <code>counter</code> and set the
          <code>maxLength</code> attribute to create a counter.
        </p>
        <InputCharacterCounter />
      </section>
      {/* <!-- Section: Character counter --> */}
    </div>
  );
};

export default InputPage;
