import React, { ReactNode } from "react";
import { InputProps } from "../Input/types";

interface InputTheme {
  wrapper?: string;
  input?: string;
  activeInput?: string;
  label?: string;
  labelDefault?: string;
  labelWhite?: string;
  activeLabel?: string;
  notch?: string;
  notchLeading?: string;
  activeNotchLeading?: string;
  focusedNotchLeading?: string;
  notchLeadingDefault?: string;
  focusedNotchLeadingDefault?: string;
  notchLeadingWhite?: string;
  focusedNotchLeadingWhite?: string;
  notchMiddle?: string;
  activeNotchMiddle?: string;
  focusedNotchMiddle?: string;
  notchMiddleDefault?: string;
  focusedNotchMiddleDefault?: string;
  notchMiddleWhite?: string;
  focusedNotchMiddleWhite?: string;
  notchTrailing?: string;
  activeNotchTrailing?: string;
  focusedNotchTrailing?: string;
  notchTrailingDefault?: string;
  focusedNotchTrailingDefault?: string;
  notchTrailingWhite?: string;
  focusedNotchTrailingWhite?: string;
  counter?: string;
  inputSizeLg?: string;
  inputSizeBase?: string;
  inputSizeSm?: string;
  labelSizeLg?: string;
  activeLabelSizeLg?: string;
  labelSizeBase?: string;
  activeLabelSizeBase?: string;
  labelSizeSm?: string;
  activeLabelSizeSm?: string;
}

export interface AutocompleteTheme extends InputTheme {
  autocompleteItem?: string;
  autocompleteItemActive?: string;
  autocompleteItemDefault?: string;
  autocompleteItemDisabled?: string;
  autocompleteList?: string;
  autocompleteLoader?: string;
  dropdown?: string;
  dropdownDefault?: string;
  dropdownOpen?: string;
  dropdownContainer?: string;
  scrollbar?: string;
  spinnerIcon?: string;
  spinnerElement?: string;
}

type AutocompleteProps = Omit<InputProps, "onSelect" | "onChange"> & {
  open?: boolean;
  autoSelect?: boolean;
  customContent?: ReactNode;
  data?: string[] | Record<string, string | number>[];
  listHeight?: string;
  isLoading?: boolean;
  noResults?: string;
  ref?: React.Ref<HTMLInputElement>;
  theme?: AutocompleteTheme;
  displayValue?: (row: Record<string, string | number>) => any;
  itemContent?: (value: Record<string, string | number>) => ReactNode;
  onClose?: () => void;
  onClosed?: () => void;
  onOpen?: () => void;
  onOpened?: () => void;
  onSelect?: (value: string) => void;
  onSearch?: (data: string) => void;
  onChange?: (value: string) => void;
};

export { AutocompleteProps };
