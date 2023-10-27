/*
--------------------------------------------------------------------------
TW Elements React is an open-source UI kit of advanced components for TailwindCSS.
Copyright © 2023 MDBootstrap.com

Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
--------------------------------------------------------------------------
*/
import { useCallback, useEffect, useState, useRef } from "react";
import clsx from "clsx";

const useInput = (
  innerRef: React.RefObject<any>,
  labelRef?: React.RefObject<HTMLLabelElement>,
  value?: string | number | readonly string[],
  defaultValue?: string | number | readonly string[],
  onBlur?: (event: React.FocusEvent<any>) => void,
  onChange?: (event: React.ChangeEvent<any>) => void,
  counter?: boolean,
  maxLength?: number,
  theme?: any,
  size?: string,
  className?: string,
  formWhite?: boolean
) => {
  const [newValue, setNewValue] = useState(value || defaultValue);
  const [labelWidth, setLabelWidth] = useState(0);
  const [active, setActive] = useState(false);
  const [focus, setFocus] = useState(false);

  const labelEl = useRef<HTMLLabelElement>(null);

  const labelReference = labelRef ? labelRef : labelEl;

  const inputClasses = clsx(
    theme.input,
    active && theme.activeInput,
    size === "lg"
      ? theme.inputSizeLg
      : size === "base"
      ? theme.inputSizeBase
      : size === "sm"
      ? theme.inputSizeSm
      : theme.inputSizeBase,
    formWhite ? theme.inputWhite : theme.inputDefault,
    className
  );

  const labelClasses = clsx(
    theme.label,
    active && theme.activeLabel,
    active &&
      (size === "lg"
        ? theme.activeLabelSizeLg
        : size === "base"
        ? theme.activeLabelSizeBase
        : size === "sm"
        ? theme.activeLabelSizeSm
        : theme.activeLabelSizeBase),
    size === "lg"
      ? theme.labelSizeLg
      : size === "base"
      ? theme.labelSizeBase
      : size === "sm"
      ? theme.labelSizeSm
      : theme.labelSizeBase,
    formWhite ? theme.labelWhite : theme.labelDefault
  );

  const notchLeadingClasses = clsx(
    theme.notchLeading,
    formWhite ? theme.notchLeadingWhite : theme.notchLeadingDefault,
    active && theme.activeNotchLeading,
    focus && theme.focusedNotchLeading,
    focus &&
      (formWhite
        ? theme.focusedNotchLeadingWhite
        : theme.focusedNotchLeadingDefault)
  );

  const notchMiddleClasses = clsx(
    theme.notchMiddle,
    formWhite ? theme.notchMiddleWhite : theme.notchMiddleDefault,
    active && theme.activeNotchMiddle,
    focus && theme.focusedNotchMiddle,
    focus &&
      (formWhite
        ? theme.focusedNotchMiddleWhite
        : theme.focusedNotchMiddleDefault)
  );

  const notchTrailingClasses = clsx(
    theme.notchTrailing,
    formWhite ? theme.notchTrailingWhite : theme.notchTrailingDefault,
    active && theme.activeNotchTrailing,
    focus && theme.focusedNotchTrailing,
    focus &&
      (formWhite
        ? theme.focusedNotchTrailingWhite
        : theme.focusedNotchTrailingDefault)
  );

  useEffect(() => {
    if (!innerRef.current) return;

    const { value } = innerRef.current;

    value != "" ? setActive(true) : setActive(false);
  }, [innerRef.current?.value]);

  useEffect(() => {
    if (value === undefined) return;
    value != "" ? setActive(true) : setActive(false);
  }, [value]);

  useEffect(() => {
    if (defaultValue === undefined) return;
    defaultValue != "" ? setActive(true) : setActive(false);
  }, [defaultValue]);

  const setWidth = useCallback(() => {
    if (labelReference.current?.clientWidth) {
      setLabelWidth(labelReference.current.clientWidth * 0.8 + 8);
    }
  }, [labelReference]);

  useEffect(() => {
    setWidth();
  }, [labelReference.current?.clientWidth, setWidth]);

  const handleChange = (e: any) => {
    counter ? characterCounter(e) : setNewValue(e.target.value);
    onChange?.(e);
  };

  const characterCounter = (e: any) => {
    const inputValue = e.target.value;
    if (maxLength === undefined || maxLength <= 0) {
      return;
    } else if (inputValue.length <= maxLength) {
      setNewValue(inputValue);
    }
  };

  const handleBlur = useCallback(
    (e: any) => {
      if (!innerRef.current) return;

      if (
        (newValue !== undefined && newValue != "") ||
        (value !== undefined && value != "") ||
        innerRef.current.value != ""
      ) {
        setActive(true);
      } else {
        setActive(false);
      }
      onBlur && onBlur?.(e);
    },
    [newValue, value, onBlur]
  );

  return {
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
  };
};

export { useInput };
