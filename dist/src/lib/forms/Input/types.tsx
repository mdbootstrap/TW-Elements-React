import React from "react";

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

type InputELement = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">;

type InputProps = InputELement & {
  label?: React.ReactNode;
  labelRef?: React.RefObject<HTMLLabelElement>;
  labelID?: string;
  ref?: React.Ref<HTMLInputElement>;
  readonly?: boolean;
  disabled?: boolean;
  size?: string;
  wrapperTag?: React.ComponentProps<any>;
  theme?: InputTheme;
  formWhite?: boolean;
  counter?: boolean;
  maxLength?: number;
};

export { InputProps };
