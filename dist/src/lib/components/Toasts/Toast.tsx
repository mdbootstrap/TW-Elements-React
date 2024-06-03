import clsx from "clsx";
import React, { useEffect, useState, useRef } from "react";
import type { ToastProps } from "./types";
import toastTheme from "./toastTheme";
import { useTransition } from "../../hooks/useTransition";

const TEToast: React.FC<ToastProps> = ({
  open = false,
  setOpen,
  className,
  autohide,
  animation = true,
  children,
  color = "bg-white dark:bg-neutral-600 dark:border-opacity-50 dark:bg-neutral-600",
  delay = 1000,
  staticToast,
  tag: Tag = "div",
  theme: customTheme,
  onClose,
  onClosed,
  onShow,
  onShown,
  ...props
}): JSX.Element => {
  const [showToast, setShowToast] = useState<boolean | undefined>(false);
  const [isMounted, setIsMounted] = useState(false);

  const autohideTimeout = useRef<NodeJS.Timeout | undefined>(undefined);

  const toastRef = useRef<HTMLDivElement>(null);

  const theme = {
    ...toastTheme,
    ...customTheme,
  };

  const wrapperClasses = clsx(
    theme.wrapper,
    color,
    animation && theme.wrapperTransition,
    !staticToast && theme.nonStatic,
    showToast ? theme.wrapperVisible : theme.wrapperHidden,
    className
  );

  const { onTransitionShow, onTransitionHide } = useTransition(
    toastRef.current
  );

  const addEvents = () => {
    if (showToast && !staticToast) {
      toastRef.current?.addEventListener("mouseenter", () => {
        clearTimeout(autohideTimeout.current);
      });

      toastRef.current?.addEventListener("mouseleave", handleAutohide);
    }
  };

  const removeEvents = () => {
    toastRef.current?.removeEventListener("mouseenter", () => {
      clearTimeout(autohideTimeout.current);
    });

    toastRef.current?.removeEventListener("mouseleave", handleAutohide);
  };

  const handleAutohide = () => {
    if (autohide) {
      autohideTimeout.current = setTimeout(() => {
        setShowToast(false);
      }, delay);
    }
  };

  useEffect(() => {
    if (open) {
      setIsMounted(true);
      return;
    }
    setShowToast(false);
  }, [open]);

  useEffect(() => {
    if (!isMounted) {
      return;
    }

    onTransitionShow(() => {
      setShowToast(true);
      handleAutohide();
    });

    return () => {
      removeEvents();
      clearTimeout(autohideTimeout.current);
    };
  }, [isMounted]);

  useEffect(() => {
    if (showToast) {
      setIsMounted(true);
      onShow?.();
      addEvents();
      onShown?.();
    } else if (!showToast && isMounted) {
      onClose?.();
      removeEvents();

      onTransitionHide(() => {
        setIsMounted(false);
        setOpen?.(false);
        onClosed?.();
      });
    }
  }, [showToast]);

  return (
    <>
      {isMounted && (
        <Tag
          className={wrapperClasses}
          {...props}
          ref={toastRef}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          {children}
        </Tag>
      )}
    </>
  );
};

export default TEToast;
