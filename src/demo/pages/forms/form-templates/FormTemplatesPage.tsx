import React from "react";
import BasicExample from "./examples/BasicExample";
import LoginForm from "./examples/LoginForm";
import RegisterForm from "./examples/RegisterForm";
import SubscriptionForm from "./examples/SubscriptionForm";
import ContactForm from "./examples/ContactForm";

const FormTemplatesPage = () => {
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
        <BasicExample />
      </section>
      {/* <!-- Section: Basic example --> */}

      {/* <!-- Section: Login Form --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="my-5 text-3xl font-semibold leading-normal"
          id="basic"
          data-te-spy-item
        >
          Login Form
        </h2>
        <LoginForm />
      </section>
      {/* <!-- Section: Login Form --> */}

      {/* <!-- Section: Register Form --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="my-5 text-3xl font-semibold leading-normal"
          id="basic"
          data-te-spy-item
        >
          Register Form
        </h2>
        <RegisterForm />
      </section>
      {/* <!-- Section: Register Form --> */}

      {/* <!-- Section: Contact Form --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="my-5 text-3xl font-semibold leading-normal"
          id="basic"
          data-te-spy-item
        >
          Contact Form
        </h2>
        <ContactForm />
      </section>
      {/* <!-- Section: Contact Form --> */}

      {/* <!-- Section: Subscription Form --> */}
      <section>
        {/* <!-- Title --> */}
        <h2
          className="my-5 text-3xl font-semibold leading-normal"
          id="basic"
          data-te-spy-item
        >
          Subscription Form
        </h2>
        {/* <!-- Description --> */}
        <p className="mb-5">
          Subscription form is a form used to get user information such as name
          and email address. Its main purpose is that your customers will
          receive emails whenever you introduce a new product or item. Creating
          such a form is crucial because it may help you generate more leads for
          your website. Therefore, in order to attract the attention of
          customers as well as call to action to enter user emails, create
          eye-catching, interesting forms as well as display them in a place
          where users can easily find them.
        </p>
        <SubscriptionForm />
      </section>
      {/* <!-- Section: Subscription Form --> */}
    </div>
  );
};

export default FormTemplatesPage;
