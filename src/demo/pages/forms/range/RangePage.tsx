import React from "react";

const RangePage = () => {
  return (
    <div className="container my-12 mx-5">
      <h2
        className="mb-5 mt-0 text-3xl font-semibold leading-normal"
        id="basic"
        data-te-spy-item
      >
        Basic example
      </h2>

      <p className="mb-3">
        The slider reflects a range of values along a bar from which the user
        can select a single value. Ideal for adjusting volume and brightness,
        applying image filters, etc.
      </p>

      <div>
        <label
          htmlFor="customRange1"
          className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
        >
          Example range
        </label>
        <input
          type="range"
          className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
          id="customRange1"
        />
      </div>

      <h2
        className="mb-5 mt-0 text-3xl font-semibold leading-normal"
        id="disabled"
        data-te-spy-item
      >
        Disabled
      </h2>

      <p className="mb-3">
        Use the <code>disabled</code> attribute on the input to make it look
        neutraled out and remove indicator events.
      </p>

      <div>
        <label
          htmlFor="disabledRange"
          className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
        >
          Disabled range
        </label>
        <input
          type="range"
          className="transparent h-1.5 w-full appearance-none rounded-lg border-transparent bg-neutral-200"
          id="disabledRange"
          disabled
        />
      </div>

      <h2
        className="mb-5 mt-0 text-3xl font-semibold leading-normal"
        id="min_and_max"
        data-te-spy-item
      >
        Min and max
      </h2>

      <p className="mb-3">
        Range inputs have implicit values for min and max—0 and 100,
        respectively, and new values can be specified using the minimum and
        maximum attributes.
      </p>

      <div>
        <label
          htmlFor="customRange2"
          className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
        >
          Example range
        </label>
        <input
          type="range"
          className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
          min="0"
          max="5"
          id="customRange2"
        />
      </div>

      <h2
        className="mb-5 mt-0 text-3xl font-semibold leading-normal"
        id="steps"
        data-te-spy-item
      >
        Steps
      </h2>

      <p className="mb-3">
        Range component can have steps other than 1. This can be helpful for
        some applications where you need to adjust values with more or less
        accuracy.
      </p>

      <div>
        <label
          htmlFor="customRange3"
          className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
        >
          Example range
        </label>
        <input
          type="range"
          className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
          min="0"
          max="5"
          step="0.5"
          id="customRange3"
        />
      </div>
    </div>
  );
};

export default RangePage;
