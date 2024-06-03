import clsx from "clsx";
import React, { useEffect, useState, useRef } from "react";
import type { AlertProps } from "./types";
import alertTheme from "./alertTheme";
import { useTransition } from "../../hooks/useTransition";

const TEAlert: React.FC<AlertProps> = ({
  open = false,
  setOpen,
  className,
  autohide,
  animation = true,
  children,
  color = "bg-primary-100 text-primary-800",
  delay = 1000,
  dismiss,
  dismissTemplate,
  staticAlert,
  tag: Tag = "div",
  theme: customTheme,
  onClose,
  onClosed,
  ...props
}): JSX.Element => {
  const [showAlert, setShowAlert] = useState<boolean | undefined>(false);
  const [isMounted, setIsMounted] = useState(false);

  const autohideTimeout = useRef<NodeJS.Timeout | undefined>(undefined);
  const alertRef = useRef<HTMLDivElement>(null);

  const theme = {
    ...alertTheme,
    ...customTheme,
  };

  const wrapperClasses = clsx(
    theme.wrapper,
    color,
    animation && theme.wrapperTransition,
    staticAlert ? theme.static : theme.nonStatic,
    showAlert ? theme.wrapperVisible : theme.wrapperHidden,
    className
  );

  const { onTransitionShow, onTransitionHide } = useTransition(
    alertRef.current
  );

  useEffect(() => {
    if (open) {
      setIsMounted(true);
      return;
    }
    setShowAlert(false);
  }, [open]);

  useEffect(() => {
    if (!isMounted) {
      return;
    }

    onTransitionShow(() => {
      setShowAlert(true);

      if (autohide) {
        autohideTimeout.current = setTimeout(() => {
          setShowAlert(false);
        }, delay);
      }
    });

    return () => clearTimeout(autohideTimeout.current);
  }, [isMounted]);

  useEffect(() => {
    if (showAlert) {
      setIsMounted(true);
    } else if (!showAlert && isMounted) {
      onClose?.();
      onTransitionHide(() => {
        setIsMounted(false);
        setOpen?.(false);
        onClosed?.();
      });
    }
  }, [showAlert]);

  return (
    <>
      {isMounted && (
        <Tag className={wrapperClasses} {...props} role="alert" ref={alertRef}>
          {children}
          {dismiss && (
            <button
              type="button"
              className={theme.dismissButtonWrapper}
              aria-label="Close"
              onClick={() => setShowAlert(false)}
            >
              <span className={theme.dismissButton}>
                {dismissTemplate || (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </span>
            </button>
          )}
        </Tag>
      )}
    </>
  );
};

export default TEAlert;
