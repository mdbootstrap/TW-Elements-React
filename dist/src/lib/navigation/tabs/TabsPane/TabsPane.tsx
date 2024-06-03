import clsx from "clsx";
import React, { useState, useEffect, useRef } from "react";
import type { TabsPaneProps } from "./types";
import TabsPaneTheme from "./tabsPaneTheme";

const useCombinedRefs = (...refs: any) => {
  const targetRef = React.useRef();
  React.useEffect(() => {
    refs.forEach((ref: any) => {
      if (!ref) return;

      if (typeof ref === "function") {
        ref(targetRef.current);
      } else {
        ref.current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
};

const TETabsPane: React.FC<TabsPaneProps> = /*#__PURE__*/ React.forwardRef<
  HTMLAllCollection,
  TabsPaneProps
>(
  (
    {
      className,
      tag: Tag = "div",
      show = false,
      theme: customTheme,
      onShow,
      onShown,
      onHide,
      onHidden,
      children,
      ...props
    },
    ref
  ) => {
    const [isReadyToHide, setIsReadyToHide] = useState(false);
    const tabsPaneRef = useRef<HTMLDivElement>(null);
    const combinedRef = useCombinedRefs(ref, tabsPaneRef);
    const tabsPaneTransitionTimeRef = useRef<number>(0);

    const theme = {
      ...TabsPaneTheme,
      ...customTheme,
    };

    const classes = clsx(
      theme.tabsPane,
      show ? theme.isShown : theme.isHidden,
      isReadyToHide ? theme.activeTabsPane : theme.inactiveTabsPane,
      className
    );

    useEffect(() => {
      if (tabsPaneRef.current) {
        const { transitionDuration } = window.getComputedStyle(
          tabsPaneRef.current
        );
        const time = Number(transitionDuration.replace("s", "")) * 1000;
        tabsPaneTransitionTimeRef.current = time;
      }
    }, []);

    useEffect(() => {
      let timer: ReturnType<typeof setTimeout>;

      if (show) {
        onShow?.();
        timer = setTimeout(() => {
          setIsReadyToHide(true);
          onShown?.();
        }, 100);
      } else {
        onHide?.();
        setIsReadyToHide(false);
        timer = setTimeout(() => {
          onHidden?.();
        }, tabsPaneTransitionTimeRef.current);
      }
      return () => {
        clearTimeout(timer);
      };
    }, [show]);

    return (
      <Tag className={classes} role="tabpanel" ref={combinedRef} {...props}>
        {children}
      </Tag>
    );
  }
);

export default TETabsPane;
