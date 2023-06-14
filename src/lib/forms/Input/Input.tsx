import clsx from "clsx";
import React, {
  useState,
  useEffect,
  useRef,
  FocusEvent,
  ChangeEvent,
  useCallback,
  useImperativeHandle,
} from "react";
import type { InputProps } from "./types";
import InputTheme from "./inputTheme";

const MDBInput: React.FC<InputProps> = React.forwardRef<
  HTMLInputElement,
  InputProps
>(
  (
    {
      className,
      size,
      value,
      defaultValue,
      id,
      labelClass,
      wrapperClass,
      wrapperStyle,
      wrapperTag: WrapperTag,
      label,
      onChange,
      children,
      labelRef,
      labelStyle,
      type,
      onBlur,
      readonly,
      theme: customTheme,
      formWhite,
      counter,
      maxLength,
      ...props
    },
    ref
  ) => {
    const [newValue, setNewValue] = useState(value || defaultValue);
    const [labelWidth, setLabelWidth] = useState(0);
    const [active, setActive] = useState(false);
    const [focus, setFocus] = useState(false);

    const innerRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => innerRef.current as HTMLInputElement);

    const theme = { ...InputTheme, ...customTheme };

    const labelEl = useRef<HTMLLabelElement>(null);

    const labelReference = labelRef ? labelRef : labelEl;

    const wrapperClasses = clsx(theme.wrapper, wrapperClass);
    const inputClasses = clsx(
      theme.input,
      active && theme.activeInput,
      size === "lg"
        ? "px-3 py-[0.32rem] leading-[2.15]"
        : size === "base"
        ? "px-3 py-[0.32rem] leading-[1.6]"
        : size === "sm"
        ? "px-3 py-[0.33rem] text-xs leading-[1.5]"
        : "px-3 py-[0.32rem] leading-[1.6]",

      className
    );

    const labelClasses = clsx(
      theme.label,
      active && theme.activeLabel,
      active &&
        (size === "lg"
          ? "-translate-y-[1.15rem]"
          : size === "base"
          ? "-translate-y-[0.9rem]"
          : size === "sm"
          ? "-translate-y-[0.75rem]"
          : "-translate-y-[0.9rem]"),
      size === "lg"
        ? "pt-[0.36rem] leading-[2.15] peer-focus:-translate-y-[1.15rem]"
        : size === "base"
        ? "pt-[0.30rem] leading-[1.6] peer-focus:-translate-y-[0.9rem]"
        : size === "sm"
        ? "pt-[0.36rem] text-xs leading-[1.5] peer-focus:-translate-y-[0.75rem]"
        : "pt-[0.30rem] leading-[1.6] peer-focus:-translate-y-[0.9rem]",
      labelClass
    );

    const notchClasses = clsx(theme.notch);

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

    const counterClasses = clsx(theme.counter);

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

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setNewValue(e.target.value);
      onChange?.(e);
    };

    const characterCounter = (e: ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      if (!maxLength && maxLength <= 0) {
        return;
      } else if (inputValue.length <= maxLength) {
        setNewValue(inputValue);
      }
    };

    const handleBlur = useCallback(
      (e: FocusEvent<HTMLInputElement, Element>) => {
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
        onBlur && onBlur(e);
      },
      [newValue, value, onBlur]
    );

    return (
      <WrapperTag>
        <WrapperTag className={wrapperClasses} style={wrapperStyle}>
          <input
            type={type}
            readOnly={readonly}
            className={inputClasses}
            onBlur={() => {
              handleBlur;
              setFocus(false);
            }}
            onChange={(newValue) => {
              handleChange(newValue);
              characterCounter(newValue);
            }}
            onFocus={() => {
              setWidth;
              setFocus(true);
            }}
            value={value}
            defaultValue={defaultValue}
            id={id}
            ref={innerRef}
            maxLength={maxLength}
            {...props}
          />
          {label && (
            <label
              className={labelClasses}
              style={labelStyle}
              htmlFor={id}
              ref={labelReference}
            >
              {label}
            </label>
          )}

          <div className={notchClasses}>
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
          <div className={counterClasses}>
            <span>
              {newValue?.toString().length || 0} / {maxLength}
            </span>
          </div>
        )}
      </WrapperTag>
    );
  }
);

MDBInput.defaultProps = {
  wrapperTag: "div",
  readonly: false,
  size: "base",
  disabled: false,
  counter: false,
  formWhite: false,
};

export default MDBInput;
