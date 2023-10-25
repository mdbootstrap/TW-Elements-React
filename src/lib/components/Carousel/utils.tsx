export const forceReflow = (element: HTMLElement): number =>
  element.offsetHeight;

export const isVisible = (element: HTMLElement): boolean => {
  if (!element || element.getClientRects().length === 0) {
    return false;
  }

  if (
    element instanceof HTMLElement &&
    element.style &&
    element.parentNode &&
    element.parentNode instanceof HTMLElement &&
    element.parentNode.style
  ) {
    const elementStyle = getComputedStyle(element);
    const parentNodeStyle = getComputedStyle(element.parentNode);

    return (
      getComputedStyle(element).getPropertyValue("visibility") === "visible" ||
      (elementStyle.display !== "none" &&
        parentNodeStyle.display !== "none" &&
        elementStyle.visibility !== "hidden")
    );
  }

  return false;
};
