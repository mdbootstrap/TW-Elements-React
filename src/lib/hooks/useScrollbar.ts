/*
--------------------------------------------------------------------------
TW Elements React is an open-source UI kit of advanced components for TailwindCSS.
Copyright © 2023 MDBootstrap.com

Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
--------------------------------------------------------------------------
*/

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
