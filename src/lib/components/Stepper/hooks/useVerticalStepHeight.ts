import { useState, useEffect, RefObject } from "react";

export default function useVerticalStepHeight(
  isActive: boolean,
  contentWrapperRef: RefObject<HTMLDivElement>,
  children: React.ReactNode | React.ReactNode[]
) {
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      if (!isActive) {
        return setHeight("0px");
      }
      const contentWrapperHeight = entries[0].contentRect.height;
      const computed = window.getComputedStyle(
        contentWrapperRef.current as Element
      );

      const offsetY =
        parseFloat(computed.paddingTop) +
        parseFloat(computed.paddingBottom) +
        parseFloat(computed.marginBottom) +
        parseFloat(computed.marginTop);

      setHeight(`${contentWrapperHeight + offsetY}px`);
    });

    observer.observe(contentWrapperRef.current as Element);
    return () => {
      observer.disconnect();
    };
  }, [isActive, children]);

  return height;
}
