import React from "react";
import { TEAlert } from "tw-elements-react";

export default function AdditionalContent(): JSX.Element {
  return (
    <TEAlert
      staticAlert
      open={true}
      className="!block"
      color="bg-success-100 text-success-700"
    >
      <h4 className="mb-2 text-2xl font-medium leading-tight">Well done!</h4>
      <p className="mb-4">
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
      <hr className="border-success-600 opacity-30" />
      <p className="mb-0 mt-4">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </TEAlert>
  );
}
