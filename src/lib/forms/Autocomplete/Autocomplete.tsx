import React, {
  ChangeEvent,
  useImperativeHandle,
  useRef,
  useState,
  KeyboardEvent,
  useEffect,
} from "react";
import type { AutocompleteProps } from "./types";
import clsx from "clsx";
import TEInput from "../Input/Input";
import AutocompleteDropdown from "./AutocompleteDropdown/AutocompleteDropdown";
import AutocompleteItem from "./AutocompleteItem/AutocompleteItem";
import useAutocompleteKeydown from "./hooks/useAutocompleteKeydowns";
import { useOpenStatus } from "../../hooks/hooks";
import autocompleteTheme from "./autocompleteTheme";

const TEAutocomplete: React.FC<AutocompleteProps> = React.forwardRef<
  HTMLInputElement,
  AutocompleteProps
>(
  (
    {
      open,
      autoSelect,
      className,
      customContent,
      data = [],
      displayValue,
      isLoading,
      listHeight,
      noResults = "No results found",
      theme: customTheme,
      itemContent,
      onSelect,
      onSearch,
      onChange,
      onClose,
      onClosed,
      onOpen,
      onOpened,
      ...props
    },
    ref
  ) => {
    const innerRef = useRef<HTMLInputElement>(null);

    const [openState, setOpenState] = useState(false);
    const [isOpened, setIsOpened] = useState(false);
    const isOpen = useOpenStatus(openState, open);

    const focusInput = useRef(false);
    useImperativeHandle(ref, () => innerRef.current as HTMLInputElement);

    // tailwind classes
    const theme = {
      ...autocompleteTheme,
      ...customTheme,
    };

    const activeElement = useAutocompleteKeydown({
      isOpen,
      setOpenState,
      length: data.length,
    });

    // label styling fix - needs to be refactored in the future

    const labelSize =
      props.size === "sm"
        ? theme.labelActiveSizeSm
        : props.size === "lg"
        ? theme.labelActiveSizeLg
        : theme.labelActiveSizeBase;

    const labelClasses = clsx(
      theme.label,
      openState && labelSize,
      openState && theme.labelActiveScale
    );

    // tailwind classes

    const onFocus = () => {
      if (focusInput.current) {
        focusInput.current = false;

        return;
      }

      setOpenState(true);
      onOpen?.();

      if (!innerRef.current) return;

      !innerRef.current.value && onSearch?.("");
    };

    const selectValue = (item: string | Record<string, unknown>) => {
      return displayValue
        ? displayValue(item as Record<string, string | number>)
        : item;
    };

    const onSelectOption = (option: string) => {
      setOpenState(false);

      if (!innerRef.current) return;

      // force focus on input without triggering onOpen event
      focusInput.current = true;
      innerRef.current.focus();

      innerRef.current.value = option;
      onSearch?.(option);
      onSelect?.(option);
      onChange?.(option);
      onClose?.();
    };

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
      onSearch?.(e.target.value);
      onChange?.(e.target.value);
    };

    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      const isEnter = e.key === "Enter";
      const isTab = e.key === "Tab";

      if (!openState) return setOpenState(true);

      if (activeElement === -1) return;

      if (isEnter || (autoSelect && isTab))
        onSelectOption(selectValue(data[activeElement]) as string);
    };

    useEffect(() => {
      innerRef.current && innerRef.current.addEventListener("focus", onFocus);
      return () => {
        innerRef.current &&
          innerRef.current.removeEventListener("focus", onFocus);
      };
    }, [innerRef.current]);

    return (
      <>
        <TEInput
          type="text"
          autoComplete="off"
          onKeyDown={onKeyDown}
          onChange={onChangeValue}
          className={className}
          theme={{ ...theme, label: labelClasses }}
          ref={innerRef}
          role="combobox"
          {...props}
        >
          {isLoading && (
            <div className={clsx(theme.autocompleteLoader, theme.spinnerIcon)}>
              <span className={theme.spinnerElement}>Loading...</span>
            </div>
          )}
        </TEInput>
        <AutocompleteDropdown
          isOpen={isOpen}
          isOpened={isOpened}
          inputRef={innerRef}
          setOpenState={setOpenState}
          customContent={customContent}
          listHeight={listHeight}
          theme={theme}
          onClose={onClose}
          onOpened={() => {
            onOpened?.();
            setIsOpened(true);
          }}
          onClosed={() => {
            onClosed?.();
            setIsOpened(false);
          }}
        >
          {data.length === 0 && (
            <li className={theme.autocompleteItem}>{noResults}</li>
          )}
          {data.map((item, i) => (
            <AutocompleteItem
              isActive={activeElement === i}
              value={selectValue(item)}
              theme={theme}
              onSelect={onSelectOption}
              key={i}
            >
              {itemContent
                ? itemContent(item as Record<string, string | number>)
                : selectValue(item)}
            </AutocompleteItem>
          ))}
        </AutocompleteDropdown>
      </>
    );
  }
);

export default TEAutocomplete;
