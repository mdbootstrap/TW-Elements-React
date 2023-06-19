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
