/*
--------------------------------------------------------------------------
TW Elements React is an open-source UI kit of advanced components for TailwindCSS.
Copyright © 2023 MDBootstrap.com

Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
--------------------------------------------------------------------------
*/

import { ReactElement, useCallback, useEffect, useContext } from "react";
import { skipNextChild } from "../../../components/Dropdown/helpers/skipNextChild";
import { isHtmlElement } from "../../../components/Dropdown/helpers/typeguards";
import { DropdownContext } from "../../../components/Dropdown/context/DropdownContext";

export const useKeyboard = (children: ReactElement[] | ReactElement) => {
  const {
    activeIndex,
    autoClose,
    isOpenState,
    setIsOpenState,
    setActiveIndex,
    onHide,
    onHidden,
  } = useContext(DropdownContext);

  const handleKeyboard = useCallback(
    (e: KeyboardEvent) => {
      const controlKeys = ["ArrowUp", "ArrowDown", "Tab", "Enter", "Escape"];
      if (!Array.isArray(children) || !controlKeys.includes(e.key)) return;

      isHtmlElement(document.activeElement) && document.activeElement.blur();

      if (e.key === "ArrowUp") {
        e.preventDefault();
        const skip = skipNextChild(activeIndex, children, "up");

        if (activeIndex === 1) {
          setActiveIndex(skip ? children.length - 1 : 0);
          return;
        }

        if (activeIndex <= 0) {
          setActiveIndex(skip ? children.length - 2 : children.length - 1);
          return;
        }

        setActiveIndex((prev) => (skip ? prev - 2 : prev - 1));
      }

      if (e.key === "ArrowDown" || e.key === "Tab") {
        e.preventDefault();

        const skip = skipNextChild(activeIndex, children, "down");

        if (activeIndex === children.length - 2) {
          setActiveIndex((prev) => (skip ? 0 : prev + 1));
          return;
        }

        if (activeIndex === children.length - 1) {
          setActiveIndex(skip ? 1 : 0);
          return;
        }

        setActiveIndex((prev) => (skip ? prev + 2 : prev + 1));
      }

      if (e.key === "Enter" && (autoClose === true || autoClose === "inside")) {
        const el: HTMLElement | null = document.querySelector(
          '[data-te-active="true"]'
        );
        const child = el?.firstElementChild as HTMLElement | null | undefined;

        if (child) {
          return child.click();
        }

        onHide?.(e);

        if (e.defaultPrevented) {
          return;
        }
        setIsOpenState(false);
        setTimeout(() => {
          setActiveIndex(-1), onHidden?.(e);
        }, 300);
      }

      if (e.key === "Escape" && autoClose === true) {
        onHide?.(e);
        if (e.defaultPrevented) {
          return;
        }

        setIsOpenState(false);
        setTimeout(() => {
          setActiveIndex(-1), onHidden?.(e);
        }, 300);
      }
    },
    [
      children,
      setIsOpenState,
      setActiveIndex,
      activeIndex,
      autoClose,
      onHide,
      onHidden,
    ]
  );

  useEffect(() => {
    if (isOpenState) {
      document.addEventListener("keydown", handleKeyboard);
    }

    return () => {
      if (isOpenState) {
        document.removeEventListener("keydown", handleKeyboard);
      }
    };
  }, [isOpenState, handleKeyboard]);

  useEffect(() => {
    const el: HTMLElement | null = document.querySelector(
      '[data-te-active="true"]'
    );
    const child = el?.firstElementChild as HTMLElement | null | undefined;

    child?.focus();

    return () => child?.blur();
  }, [activeIndex]);
};
