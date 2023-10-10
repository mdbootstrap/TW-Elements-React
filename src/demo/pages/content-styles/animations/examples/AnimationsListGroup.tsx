import React, { useState } from "react";
import { TEAnimation, TERipple } from "tw-elements-react";

export default function AnimationsListGroup(): JSX.Element {
  const [list, setList] = useState([
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ]);

  const addListRow = () => {
    setList([...list, `element ${list.length}`]);
  };

  const removeListRow = (id: number) => {
    const element = document.getElementById(`list-group-item-${id}`);

    const prevElement = element?.previousElementSibling
      ? element.previousElementSibling
      : element;

    const animation =
      element === prevElement
        ? "[fade-out_1s_ease-in-out]"
        : "[slide-out-up_1s_ease-in-out]";

    element.classList.add(`animate-${animation}`);

    setTimeout(() => {
      element.classList.remove(`animate-${animation}`);
      setList(list.filter((_, i) => i !== id));
    }, 1000);
  };

  return (
    <div className="flex justify-center">
      <div className="flex items-start min-w-[22rem]">
        <ul
          id="list-group"
          className="w-96 overflow-hidden rounded-lg border border-neutral-200 bg-white text-neutral-900 dark:bg-neutral-600 dark:text-neutral-200"
        >
          {list.map((el, i) => {
            return (
              <TEAnimation
                id={`list-group-item-${i}`}
                key={i}
                tag="li"
                animation="[slide-in-down_1s_ease-in-out]"
                reset
                start="onLoad"
                onClick={() => removeListRow(i)}
                style={{ zIndex: `${list.length - i}` }}
                className="relative w-full border-neutral-200 bg-white px-6 py-2 dark:bg-neutral-600 [&:not(:last-child)]:border-b"
              >
                {el}
              </TEAnimation>
            );
          })}
        </ul>
        <TERipple rippleColor="light">
          <button
            type="button"
            onClick={addListRow}
            className="rounded ms-3 bg-[#3b71ca] px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#386bc0] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#386bc0] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-[#3566b6] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          >
            Add
          </button>
        </TERipple>
      </div>
    </div>
  );
}
