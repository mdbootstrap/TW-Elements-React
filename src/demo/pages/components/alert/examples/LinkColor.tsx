import React from "react";
import { TEAlert } from "tw-elements-react";

export default function LinkColor(): JSX.Element {
  return (
    <div>
      <TEAlert staticAlert open={true}>
        A simple primary alert with
        <a href="#!" className="font-bold text-primary-700 ml-1">
          an example link
        </a>
        . Give it a click if you like.
      </TEAlert>
      <TEAlert
        staticAlert
        open={true}
        color="bg-secondary-100 text-secondary-800"
      >
        A simple secondary alert with
        <a href="#!" className="font-bold text-secondary-800 ml-1">
          an example link
        </a>
        . Give it a click if you like.
      </TEAlert>
      <TEAlert staticAlert open={true} color="bg-success-100 text-success-700">
        A simple success alert with
        <a href="#!" className="font-bold text-success-700 ml-1">
          an example link
        </a>
        . Give it a click if you like.
      </TEAlert>
      <TEAlert staticAlert open={true} color="bg-danger-100 text-danger-700">
        A simple danger alert with
        <a href="#!" className="font-bold text-danger-700 ml-1">
          an example link
        </a>
        . Give it a click if you like.
      </TEAlert>
      <TEAlert staticAlert open={true} color="bg-warning-100 text-warning-800">
        A simple warning alert with
        <a href="#!" className="font-bold text-warning-800 ml-1">
          an example link
        </a>
        . Give it a click if you like.
      </TEAlert>
      <TEAlert staticAlert open={true} color="bg-info-100 text-info-800">
        A simple indigo alert with
        <a href="#!" className="font-bold text-info-800 ml-1">
          an example link
        </a>
        . Give it a click if you like.
      </TEAlert>
      <TEAlert staticAlert open={true} color="bg-neutral-50 text-neutral-600">
        A simple light alert with
        <a href="#!" className="font-bold text-neutral-600 ml-1">
          an example link
        </a>
        . Give it a click if you like.
      </TEAlert>
      <TEAlert staticAlert open={true} color="bg-neutral-800 text-neutral-50">
        A simple dark alert with
        <a href="#!" className="font-bold text-neutral-50 ml-1">
          an example link
        </a>
        . Give it a click if you like.
      </TEAlert>
    </div>
  );
}
