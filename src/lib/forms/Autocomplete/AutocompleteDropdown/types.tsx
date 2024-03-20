import { Dispatch, ReactNode, SetStateAction, RefObject } from "react";
import type { AutocompleteTheme } from "../types";

type AutocompleteDropdownProps = {
  className?: string;
  customContent?: ReactNode;
  inputRef: RefObject<HTMLInputElement>;
  isOpen: boolean;
  isOpened: boolean;
  children: ReactNode;
  setOpenState: Dispatch<SetStateAction<boolean>>;
  listHeight?: string;
  theme: AutocompleteTheme;
  onClose?: () => void;
  onClosed: () => void;
  onOpened: () => void;
};

export { AutocompleteDropdownProps };
