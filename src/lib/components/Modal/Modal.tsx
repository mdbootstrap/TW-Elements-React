import React, { useEffect, useState, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import clsx from "clsx";
import type { ModalProps } from "./types";
import { ModalContext } from "./context/ModalContext";

import modalTheme from "./modalTheme";
import Backdrop from "../../shared/backdrop/Backdrop";
import { useScrollbar } from "../../hooks/useScrollbar";
import { useFocusTrap } from "../../hooks/useFocusTrap";

const MDBModal: React.FC<ModalProps> = ({
  show,
  setShow,
  appendToBody,
  backdrop,
  staticBackdrop,
  closeOnEsc,
  scrollable = false,
  leaveHiddenModal,
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

  const [isOpenModal, setIsOpenModal] = useState(show || false);
  const [transitionDuration, setTransitionDuration] = useState(0);
  const [staticModal, setStaticModal] = useState(false);

  const modalInnerRef = useRef<HTMLElement>(null);
  const modalReference = modalRef ? modalRef : modalInnerRef;

  const { initFocusTrap, removeFocusTrap } = useFocusTrap();

  const modalClasses = clsx(
    theme.wrapper,
    className,
    staticBackdrop && theme.staticProperties,
    staticModal && theme.static,
    isOpenModal ? theme.show : "hidden"
  );

  const startStaticAnimation = () => {
    setStaticModal(true);
    setTimeout(() => {
      setStaticModal(false);
    }, 300);
  };

  const handleBackdropClick = (e: Event) => {
    if (e.target !== modalReference.current) {
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

MDBModal.defaultProps = {
  backdrop: true,
  show: false,
  closeOnEsc: true,
  appendToBody: false,
  leaveHiddenModal: true,
};

export default MDBModal;
