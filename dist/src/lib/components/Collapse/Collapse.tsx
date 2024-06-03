import clsx from "clsx";
import React, { useCallback, useEffect, useRef, useState } from "react";
import type { CollapseProps } from "./types";
import collapseTheme from "./collapseTheme";
import { useTransition } from "../../hooks/useTransition";

const TECollapse: React.FC<CollapseProps> = ({
  className,
  children,
  show = false,
  id,
  tag: Tag = "div",
  collapseRef,
  horizontal = false,
  scroll = false,
  onShow,
  onHide,
  theme: customTheme,
  ...props
}): JSX.Element => {
  const [showCollapse, setShowCollapse] = useState<boolean | undefined>(false);
  const [collapseSize, setCollapseSize] = useState<string | number | undefined>(
    undefined
  );
  const [transition, setTransition] = useState(false);
  const isFirstRender = useRef(true);

  const theme = {
    ...collapseTheme,
    ...customTheme,
  };

  const classes = clsx(
    theme.collapseStyles,
    theme.visible,
    horizontal ? `${theme.collapsingHorizontal}` : `${theme.collapsing}`,
    !transition && !showCollapse && theme.hidden,
    scroll && theme.scrollStyles,
    className
  );

  const collapseEl = useRef<HTMLElement>(null);
  const refCollapse = collapseRef ?? collapseEl;

  const { onTransitionHide } = useTransition(refCollapse.current);

  const handleResize = useCallback(() => {
    if (showCollapse) {
      setCollapseSize(undefined);
    }
  }, [showCollapse]);

  useEffect(() => {
    if (collapseSize === undefined && showCollapse) {
      if (horizontal) {
        setCollapseSize(refCollapse?.current?.scrollWidth);
      } else {
        setCollapseSize(refCollapse?.current?.scrollHeight);
      }
    }
  }, [collapseSize, showCollapse, refCollapse, horizontal]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (showCollapse !== show) {
      show ? onShow?.() : onHide?.();
      setShowCollapse(show);
    }

    if (show) {
      setTransition(true);
      return;
    }

    onTransitionHide(() => {
      setTransition(false);
    });
  }, [show, onShow, onHide]);

  useEffect(() => {
    if (showCollapse) {
      if (horizontal) {
        setCollapseSize(refCollapse?.current?.scrollWidth || 0);
      } else {
        setCollapseSize(refCollapse?.current?.scrollHeight || 0);
      }
    } else {
      setCollapseSize(0);
    }
  }, [showCollapse, refCollapse, horizontal]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <Tag
      style={{
        ...(horizontal ? { width: collapseSize } : { height: collapseSize }),
      }}
      id={id}
      className={classes}
      {...props}
      ref={refCollapse}
    >
      {children}
    </Tag>
  );
};

export default TECollapse;
