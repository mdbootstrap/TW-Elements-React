import clsx from "clsx";
import React from "react";
import { DropdownItemChildProps } from "./types";

export const DrodpownItemChild: React.FC<DropdownItemChildProps> = ({
  childTag: ChildTag,
  children,
  link,
  divider,
  header,
  theme,
  disabled,
  className,
  href = "#",
}) => {
  const linkClasses = clsx(theme.item, disabled && theme.disabled, className);

  if (link) {
    if (ChildTag) {
      return <ChildTag className={linkClasses}>{children}</ChildTag>;
    }
    return (
      <a href={href} className={linkClasses}>
        {children}
      </a>
    );
  }

  if (divider) {
    if (ChildTag) {
      return <ChildTag className={theme.divider}>{children}</ChildTag>;
    }
    return <hr className={theme.divider} />;
  }

  if (header) {
    if (ChildTag) {
      return <ChildTag className={theme.header}>{children}</ChildTag>;
    }
    return <h6 className={theme.header}>{children}</h6>;
  }

  return <>{children}</>;
};
