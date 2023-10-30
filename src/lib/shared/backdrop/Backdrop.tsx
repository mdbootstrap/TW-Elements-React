/*
--------------------------------------------------------------------------
TW Elements React is an open-source UI kit of advanced components for TailwindCSS.
Copyright © 2023 MDBootstrap.com

Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
--------------------------------------------------------------------------
*/

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
