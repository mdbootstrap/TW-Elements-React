/*
--------------------------------------------------------------------------
TW Elements React is an open-source UI kit of advanced components for TailwindCSS.
Copyright © 2023 MDBootstrap.com

Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
--------------------------------------------------------------------------
*/

import React, { useRef } from "react";
import { TextareaProps } from "./types";
import { useInput } from "../../hooks/useInput";
import TextareaTheme from "./TextareaTheme";

const TETextarea: React.FC<TextareaProps> = ({
  className,
  size = "base",
  value,
  defaultValue,
  id,
  wrapperTag: WrapperTag = "div",
  label,
  onChange,
  children,
  labelRef,
  labelID,
  inputRef,
  onBlur,
  readonly = false,
  theme: customTheme,
  formWhite = false,
  counter = false,
  maxLength,
  ...props
}) => {
  const theme = { ...TextareaTheme, ...customTheme };

  const textareaEl = useRef<HTMLTextAreaElement>(null);
  const inputReference = inputRef ? inputRef : textareaEl;

  const {
    labelReference,
    labelWidth,
    newValue,
    setWidth,
    setFocus,
    handleChange,
    handleBlur,
    inputClasses,
    labelClasses,
    notchLeadingClasses,
    notchMiddleClasses,
    notchTrailingClasses,
  } = useInput(
    textareaEl,
    labelRef,
    value,
    defaultValue,
    onBlur,
    onChange,
    counter,
    maxLength,
    theme,
    size,
    className,
    formWhite
  );

  return (
    <WrapperTag>
      <WrapperTag className={theme.wrapper}>
        <textarea
          id={id}
          ref={inputReference}
          readOnly={readonly}
          className={inputClasses}
          value={value}
          defaultValue={defaultValue}
          onBlur={(value) => {
            handleBlur(value);
            setFocus(false);
          }}
          onChange={handleChange}
          onFocus={() => {
            setWidth;
            setFocus(true);
          }}
          maxLength={maxLength}
          {...props}
        />
        {label && (
          <label
            id={labelID}
            className={labelClasses}
            htmlFor={id}
            ref={labelReference}
          >
            {label}
          </label>
        )}

        <div className={theme.notch}>
          <div className={notchLeadingClasses}></div>
          <div
            className={notchMiddleClasses}
            style={{ width: labelWidth }}
          ></div>
          <div className={notchTrailingClasses}></div>
        </div>
        {children}
      </WrapperTag>
      {counter && maxLength !== undefined && maxLength > 0 && (
        <div className={theme.counter}>
          <span>
            {newValue?.toString().length || 0} / {maxLength}
          </span>
        </div>
      )}
    </WrapperTag>
  );
};

export default TETextarea;
