import React from "react";
import { TEAlert } from "tw-elements-react";

export default function DismissingExample(): JSX.Element {
  return (
    <div>
      <TEAlert
        dismiss
        staticAlert
        open={true}
        color="bg-warning-100 text-warning-800"
      >
        <strong>Holy guacamole!</strong>
        <span className="ml-1">
          You should check in on some of those fields below.
        </span>
      </TEAlert>
    </div>
  );
}
