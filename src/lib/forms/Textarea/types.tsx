import React from "react";

interface TextareaTheme {
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

type TextareaElement = Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  "size"
>;

type TextareaProps = TextareaElement & {
  contrast?: boolean;
  label?: React.ReactNode;
  labelClass?: string;
  labelRef?: React.RefObject<HTMLLabelElement>;
  labelID?: string;
  inputRef?: React.RefObject<any>;
  readonly?: boolean;
  formWhite?: boolean;
  counter?: boolean;
  size?: string;
  wrapperTag?: React.ComponentProps<any>;
  wrapperClass?: string;
  theme?: TextareaTheme;
};

export { TextareaProps };
