/*
--------------------------------------------------------------------------
TW Elements React is an open-source UI kit of advanced components for TailwindCSS.
Copyright © 2023 MDBootstrap.com

Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
--------------------------------------------------------------------------
*/

import React, { useEffect, useState, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import clsx from "clsx";
import type { ModalProps } from "./types";
import { ModalContext } from "./context/ModalContext";

import modalTheme from "./modalTheme";
import Backdrop from "../../shared/backdrop/Backdrop";
import { useScrollbar } from "../../hooks/useScrollbar";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { useTransition } from "../../hooks/useTransition";

const TEModal: React.FC<ModalProps> = ({
  show = false,
  setShow,
  appendToBody = false,
  backdrop = true,
  staticBackdrop,
  closeOnEsc = true,
  scrollable = false,
  leaveHiddenModal = true,
  modalRef,
  children,
  className,
  tag: Tag = "div",
  theme: customTheme,
  onHide,
  onShow,
  onHidePrevented,
  ...props
}) => {
  const theme = { ...modalTheme, ...customTheme };
  const { scrollbarHide, scrollbarReset } = useScrollbar();
  const { initFocusTrap, removeFocusTrap } = useFocusTrap();

  const [isOpenModal, setIsOpenModal] = useState(show || false);
  const [transitionDuration, setTransitionDuration] = useState<number>(0);
  const [staticModal, setStaticModal] = useState(false);

  const modalInnerRef = useRef<HTMLElement>(null);
  const modalReference = modalRef ? modalRef : modalInnerRef;

  const modalClasses = clsx(
    theme.wrapper,
    className,
    staticBackdrop && theme.staticProperties,
    staticModal && theme.static,
    isOpenModal ? theme.show : "hidden"
  );

  const { onTransitionHide } = useTransition(modalReference.current);

  const startStaticAnimation = () => {
    setStaticModal(true);

    onTransitionHide(() => {
      setStaticModal(false);
    });
  };

  const handleBackdropClick = (e: Event) => {
    if (e.target !== modalReference.current || !backdrop) {
      return;
    }

    if (staticBackdrop) {
      startStaticAnimation();
      onHidePrevented?.();
      return;
    }

    setShow(false);
  };

  const handleKeydown = useCallback(
    (event: KeyboardEvent) => {
      if (closeOnEsc) {
        if (isOpenModal && event.key === "Escape") {
          if (!staticBackdrop) {
            setShow(false);
          } else {
            startStaticAnimation();
            onHidePrevented?.();
          }
        }
      }
    },
    [isOpenModal]
  );

  const openModal = () => {
    setIsOpenModal(true);
    onShow?.();
    initFocusTrap(modalReference.current as HTMLElement);
  };

  const closeModal = () => {
    setIsOpenModal((prev) => {
      prev && onHide?.();
      return false;
    });
    removeFocusTrap();
  };

  useEffect(() => {
    if (show) {
      openModal();
    } else {
      setTimeout(() => {
        closeModal();
      }, transitionDuration);
    }
  }, [show]);

  useEffect(() => {
    isOpenModal ? scrollbarHide() : scrollbarReset();
  }, [isOpenModal]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [handleKeydown]);

  const modalTemplate = (
    <ModalContext.Provider
      value={{ isOpenModal: show, setTransitionDuration, scrollable }}
    >
      {(leaveHiddenModal || show) && (
        <Tag
          ref={modalReference}
          className={modalClasses}
          onClick={handleBackdropClick}
          {...(isOpenModal && { "aria-modal": "true" })}
          {...(!isOpenModal && { "aria-hidden": "true" })}
          {...props}
        >
          {children}
        </Tag>
      )}
      {backdrop && (leaveHiddenModal || show) && (
        <Backdrop show={isOpenModal} appendToBody={appendToBody} />
      )}
    </ModalContext.Provider>
  );

  const appendToBodyTemplate = (
    <>{ReactDOM.createPortal(modalTemplate, document.body)}</>
  );

  return <>{appendToBody ? appendToBodyTemplate : modalTemplate}</>;
};

export default TEModal;
