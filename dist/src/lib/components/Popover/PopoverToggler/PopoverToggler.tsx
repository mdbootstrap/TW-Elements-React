import React, { useContext, SyntheticEvent } from "react";
import type { PopoverTogglerProps } from "./types";
import { PopoverContext } from "../context/PopoverContext";

const TEPopoverToggler: React.FC<PopoverTogglerProps> = ({
  children,
  tag: Tag = "button",
  ...props
}): JSX.Element => {
  const { handleMouseAndClick, referenceElement } = useContext(PopoverContext);

  return (
    <Tag
      ref={referenceElement}
      onMouseEnter={(e: SyntheticEvent) => handleMouseAndClick(e, "mouseenter")}
      onMouseLeave={(e: SyntheticEvent) => handleMouseAndClick(e, "mouseleave")}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default TEPopoverToggler;
