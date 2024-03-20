import { ReactNode } from "react";
import type { AutocompleteTheme } from "../types";

type AutocompleteItemProps = {
  className?: string;
  isActive: boolean;
  children: ReactNode;
  theme: AutocompleteTheme;
  onSelect: (value: string) => void;
  value: string;
};

export { AutocompleteItemProps };
