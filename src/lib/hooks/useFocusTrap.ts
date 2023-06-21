/*
--------------------------------------------------------------------------
Tailwind Elements React is an open-source UI kit of advanced components for TailwindCSS.
Copyright © 2023 MDBootstrap.com

Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
--------------------------------------------------------------------------
*/

import { useRef } from "react";

type FocusableElement =
  | HTMLButtonElement
  | HTMLAnchorElement
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

const useFocusTrap = () => {
  const trapElement = useRef<HTMLElement | null>(null);
  const firstFocusableElement = useRef<FocusableElement | null>(null);
  const lastFocusableElement = useRef<FocusableElement | null>(null);

  function initFocusTrap(element: HTMLElement) {
    trapElement.current = element;
    calculateFocusTrap();

    window.addEventListener("keydown", focusFirstElement);

    return true;
  }

  function calculateFocusTrap() {
    const focusable = Array.from(
      trapElement.current?.querySelectorAll(
        'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) as NodeListOf<FocusableElement>
    ).filter((el: FocusableElement) => {
      const shouldFocus = el instanceof HTMLAnchorElement ? true : !el.disabled;
      return (
        !el.classList.contains("ps__thumb-x") &&
        !el.classList.contains("ps__thumb-y") &&
        shouldFocus
      );
    });

    if (focusable.length === 0) return;

    firstFocusableElement.current = focusable[0];

    lastFocusableElement.current = focusable[focusable.length - 1];

    lastFocusableElement.current?.addEventListener("keydown", (event) =>
      handleLastElementKeydown(event as KeyboardEvent)
    );
  }

  function handleLastElementKeydown(e: KeyboardEvent) {
    if (e.key === "Tab") {
      e.preventDefault();
      focusTrap();
    }
  }

  function focusTrap() {
    if (!firstFocusableElement) return;

    firstFocusableElement.current?.focus();
  }

  function focusFirstElement(e: KeyboardEvent, trap = false) {
    if (e.key === "Tab") {
      e.preventDefault();
      focusTrap();
    }
    if (trap) return;
    window.removeEventListener("keydown", focusFirstElement);
  }

  function removeFocusTrap() {
    lastFocusableElement.current?.removeEventListener("keydown", (event) =>
      handleLastElementKeydown(event as KeyboardEvent)
    );
  }

  return {
    initFocusTrap,
    removeFocusTrap,
  };
};

export { useFocusTrap };
