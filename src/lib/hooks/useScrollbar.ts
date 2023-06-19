const useScrollbar = () => {
  const element = document.body;

  const scrollbarHide = () => {
    const width = getWidth();

    disableOverFlow();
    saveInitialPadding();

    element.style.paddingRight = `${width}px`;
  };

  const scrollbarReset = () => {
    restoreInitialOverflow();
    restoreInitialPadding();
  };

  const disableOverFlow = () => {
    saveInitialOverflow();
    element.style.overflow = "hidden";
  };

  const getWidth = () => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
    const documentWidth = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - documentWidth);
  };

  const saveInitialOverflow = () => {
    if (element.hasAttribute("data-initial-overflow")) return;
    element.dataset.initialOverflow = element.style.overflow;
  };

  const saveInitialPadding = () => {
    element.dataset.initialPadding = element.style.paddingRight;
  };

  const restoreInitialOverflow = () => {
    element.style.overflow = element.dataset.initialOverflow || "";
    element.removeAttribute("data-initial-overflow");
  };

  const restoreInitialPadding = () => {
    element.style.paddingRight = element.dataset.initialPadding || "";
    element.removeAttribute("data-initial-padding");
  };

  return { scrollbarHide, scrollbarReset, getWidth };
};

export { useScrollbar };
