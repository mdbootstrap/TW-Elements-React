import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import clsx from "clsx";

import type { BackdropProps } from "./types";
import backdropTheme from "./backdropTheme";

const BackdropComponent: React.FC<BackdropProps> = ({
  className,
  appendToBody = false,
  show,
  animate = true,
  theme: customTheme,
  ...props
}) => {
  const theme = { ...backdropTheme, ...customTheme };

  const [displayBackdrop, setDisplayBackdrop] = useState<boolean>(show);
  const [showBackdrop, setShowBackdrop] = useState<boolean>(false);

  const backdropTransitionTimeRef = useRef<number>(0);
  const backdropRef = useRef<HTMLDivElement>(null);
  const interval = useRef<ReturnType<typeof setTimeout> | null>(null);

  const backdropClasses = clsx(
    theme.wrapper,
    displayBackdrop ? "block" : "hidden",
    showBackdrop ? "opacity-50" : "opacity-0"
  );

  useEffect(() => {
    if (backdropRef.current) {
      const { transitionDuration } = window.getComputedStyle(
        backdropRef.current
      );
      const time = Number(transitionDuration.replace("s", "")) * 1000;
      backdropTransitionTimeRef.current = time;
    }
  }, []);

  useEffect(() => {
    if (show) {
      setDisplayBackdrop(show);
      interval.current = setTimeout(
        () => {
          setShowBackdrop(show);
        },
        animate ? 50 : 0
      );
    } else {
      setShowBackdrop(show);
      interval.current = setTimeout(
        () => {
          setDisplayBackdrop(show);
        },
        animate ? backdropTransitionTimeRef.current : 0
      );
    }
    return () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  }, [show]);

  const backdropTemplate = (
    <div className={backdropClasses} {...props} ref={backdropRef}></div>
  );

  const appendToBodyTemplate = (
    <>{ReactDOM.createPortal(backdropTemplate, document.body)}</>
  );

  return <>{appendToBody ? appendToBodyTemplate : backdropTemplate}</>;
};

export default BackdropComponent;
