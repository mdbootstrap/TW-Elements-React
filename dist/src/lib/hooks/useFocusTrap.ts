type FocusableElement =
  | HTMLButtonElement
  | HTMLAnchorElement
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

const useFocusTrap = () => {
  let trapElement: HTMLElement | null = null;
  let firstFocusableElement: FocusableElement | null = null;
  let lastFocusableElement: FocusableElement | null = null;

  function initFocusTrap(element: HTMLElement) {
    trapElement = element;
    calculateFocusTrap();

    window.addEventListener("keydown", focusFirstElement);

    return true;
  }

  function calculateFocusTrap() {
    const focusable = Array.from(
      trapElement?.querySelectorAll(
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

    firstFocusableElement = focusable[0];

    lastFocusableElement = focusable[focusable.length - 1];

    lastFocusableElement?.addEventListener("keydown", (event) =>
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

    firstFocusableElement?.focus();
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
    lastFocusableElement?.removeEventListener("keydown", (event) =>
      handleLastElementKeydown(event as KeyboardEvent)
    );
  }

  return {
    initFocusTrap,
    removeFocusTrap,
  };
};

export { useFocusTrap };
