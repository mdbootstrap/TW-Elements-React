/*
--------------------------------------------------------------------------
TW Elements React is an open-source UI kit of advanced components for TailwindCSS.
Copyright © 2023 MDBootstrap.com

Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
--------------------------------------------------------------------------
*/

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import clsx from "clsx";
import { createPortal } from "react-dom";
import { usePopper } from "react-popper";
import type { SelectProps, ExtendedSelectData } from "./types";
import selectTheme from "./selectTheme";
import { TEInput } from "tw-elements-react";
import TESelectOptionList from "./SelectOptionList/SelectOptionList";
import { UP_ARROW, DOWN_ARROW, ENTER, TAB, ESCAPE } from "./keycodes";
import { isArraysEqual } from "./utils";
import { useTransition } from "../../hooks/useTransition";

const SELECT_ALL_INDEX = -1;

const TESelect: React.FC<SelectProps> = ({
  open = false,
  setOpen,
  data,
  className,
  optionHeight = 38,
  visibleOptions = 5,
  disabled,
  placeholder,
  label,
  clearBtn,
  children,
  multiple,
  displayedLabels = 5,
  optionsSelectedLabel = "options selected",
  selectAll = true,
  selectAllLabel = "Select all",
  size,
  showRef,
  contrast = false,
  onOpen,
  onClose,
  onValueChange,
  onOptionSelect,
  onOptionDeselect,
  search = false,
  searchLabel = "Search...",
  autoSelect = false,
  noResultsText = "No results",
  preventFirstSelection = false,
  value,
  tag: Tag = "div",
  theme: customTheme,
  container,
  clearIcon,
  selectIcon,
  ...props
}) => {
  // dropdown state
  const [isMounted, setIsMounted] = useState(false);
  const [showDropdown, setShowDropdown] = useState(open);
  const [isRendered, setIsRendered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // styling
  const [inputWidth, setInputWidth] = useState("0px");
  const [maxDropdownHeight, setMaxDropdownHeight] = useState(0);

  const [fakeValue, setFakeValue] = useState<null | string>(null);

  // inputs value
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("");

  const [activeElementIndex, setActiveElementIndex] = useState(() => {
    return selectAll ? SELECT_ALL_INDEX : data.findIndex((el) => !el.disabled);
  });

  // selected data
  const [selectedElements, setSelectedElements] = useState<number[]>([]);
  const [selectData, setSelectData] = useState<ExtendedSelectData[]>([]);

  // references
  const [referenceElement, setReferenceElement] = useState<HTMLInputElement>();
  const [popperElement, setPopperElement] = useState<HTMLElement>();

  const searchRef = useRef<HTMLInputElement>(null);
  const dropdownWrapperRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);

  const filteredData = useMemo(
    () =>
      selectData.filter(
        (item) =>
          item.text?.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
          item.optgroup
      ),
    [query, selectData]
  );

  // classnames

  const theme = {
    ...selectTheme,
    ...customTheme,
  };

  const wrapperClasses = clsx("relative", className);

  const dropdownClasses = clsx(
    theme.dropdown,
    showDropdown ? theme.dropdownVisible : theme.dropdownHidden
  );

  const optionsWrapperClasses = clsx(
    theme.optionsWrapper,
    theme.optionsWrapperScrollbar
  );

  const arrowClasses = clsx(
    theme.selectArrow,
    contrast && theme.selectArrowWhite,
    !size && theme.selectArrowDefault,
    size === "sm" && theme.selectArrowSm,
    size === "lg" && theme.selectArrowLg,
    document.activeElement === referenceElement
      ? contrast
        ? theme.selectArrowWhiteFocused
        : theme.selectArrowFocused
      : null
  );

  const clearBtnClasses = clsx(
    theme.selectClearBtn,
    contrast && theme.selectClearBtnWhite,
    !size && theme.selectClearBtnDefault,
    size === "sm" && theme.selectClearBtnSm,
    size === "lg" && theme.selectClearBtnLg
  );

  // popper

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-start",
  });

  const handleResize = useCallback(() => {
    showDropdown && setInputWidth(`${referenceElement?.offsetWidth}px`);
  }, [referenceElement, showDropdown]);

  const scrollOptions = (index: number) => {
    if (selectData.length === 0) {
      return;
    }
    const list = dropdownWrapperRef.current as HTMLElement;
    const listHeight = list.offsetHeight;
    const scrollTop = list.scrollTop;

    const hiddenOptionsCount = selectData.filter(
      (el) => el.hidden && el.elementPosition < index
    ).length;
    const indexCount = multiple && selectAll ? index + 1 : index;
    const firstIndex = multiple && selectAll ? -2 : -1;

    if (index > firstIndex) {
      const optionOffset = (indexCount - hiddenOptionsCount) * optionHeight;
      const isBelow = optionOffset + optionHeight > scrollTop + listHeight;
      const isAbove = optionOffset < scrollTop;

      if (isAbove) {
        list.scrollTop = optionOffset;
      } else if (isBelow) {
        list.scrollTop = optionOffset - listHeight + optionHeight;
      } else {
        list.scrollTop = scrollTop;
      }
    }
  };

  // transition

  const { onTransitionShow, onTransitionHide } = useTransition(
    dropdownRef.current
  );

  const setNextOptionActive = (): number => {
    const findOptionIndexInFilteredData = (index: number) => {
      return filteredData.findIndex(
        (option) => option.elementPosition == index
      );
    };
    let index = activeElementIndex;

    while (index < selectData.length - 1) {
      index++;

      if (multiple && index === SELECT_ALL_INDEX) {
        return SELECT_ALL_INDEX;
      }

      const isOptionInFilteredData = findOptionIndexInFilteredData(index) != -1;
      const isOptionDisabledOrHidden =
        selectData[index].disabled || selectData[index].hidden;
      const isPrevOptionIsLastInFilteredData =
        filteredData[findOptionIndexInFilteredData(index - 1)] ===
        filteredData[filteredData.length - 1];

      if (
        (index === selectData.length &&
          (!isOptionInFilteredData || isOptionDisabledOrHidden)) ||
        isPrevOptionIsLastInFilteredData
      ) {
        return activeElementIndex;
      } else if (isOptionInFilteredData && !isOptionDisabledOrHidden) {
        break;
      }
    }
    return index;
  };

  const setPreviousOptionActive = (): number => {
    let index = activeElementIndex;

    while (index >= 0) {
      index -= 1;
      const isActiveElementInFilteredData =
        filteredData.findIndex((option) => option.elementPosition == index) !=
        -1;
      const isOptionDisabledOrHidden =
        index >= 0 && (selectData[index].disabled || selectData[index].hidden);

      if (
        index <= 0 &&
        (!isActiveElementInFilteredData || isOptionDisabledOrHidden)
      ) {
        return multiple && selectAll ? (index = -1) : activeElementIndex;
      } else if (isActiveElementInFilteredData && !isOptionDisabledOrHidden) {
        break;
      }
    }
    return index;
  };

  const handleKeyboard = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const { key } = e;

    if (![UP_ARROW, DOWN_ARROW, ENTER, TAB, ESCAPE].includes(key)) {
      return;
    }

    if (key === TAB) {
      autoSelect && handleOptionClick(filteredData[activeElementIndex]);
      referenceElement?.focus();

      return setIsOpen(false);
    }

    e.preventDefault();

    if ((e.altKey && key === DOWN_ARROW) || (e.altKey && key === UP_ARROW)) {
      return setIsOpen(!isOpen);
    }

    if (key === DOWN_ARROW) {
      const newIndex = setNextOptionActive();
      if (!isOpen) {
        return multiple ? setIsOpen(true) : setSelectedElements([newIndex]);
      }
      scrollOptions(newIndex);
      return setActiveElementIndex(newIndex);
    }

    if (key === UP_ARROW) {
      const newIndex = setPreviousOptionActive();
      if (!isOpen) {
        return multiple ? setIsOpen(true) : setSelectedElements([newIndex]);
      }
      scrollOptions(newIndex);
      return setActiveElementIndex(newIndex);
    }

    if (key === ENTER) {
      const selectedOptionIndex = filteredData.findIndex(
        (option) => option.elementPosition == activeElementIndex
      );

      if (!isOpen) return setIsOpen(true);

      return activeElementIndex === SELECT_ALL_INDEX
        ? handleSelectAll()
        : handleOptionClick(filteredData[selectedOptionIndex]);
    }

    if (key === ESCAPE) {
      setIsOpen(false);

      return referenceElement?.focus();
    }
  };

  const toggleOpen = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (showRef && showRef.current === e.target) {
        return;
      }

      const popperExist = popperElement && popperElement !== null;
      const referenceExist = referenceElement && referenceElement !== null;
      const isOutsideSelect =
        !popperElement?.contains(e.target as Node) &&
        !referenceElement?.contains(e.target as Node);
      const isArrow = (e.target as Node) === arrowRef.current;

      if (popperExist && isOpen && referenceExist) {
        if (isOutsideSelect && !isArrow) {
          setIsOpen(false);
        }
      }
    },
    [popperElement, referenceElement, isOpen, showRef]
  );

  useEffect(() => {
    const preparedData = data.map((el, index) => {
      return { ...el, elementPosition: index };
    });

    if (isArraysEqual(preparedData, selectData)) {
      return;
    }

    setSelectData(preparedData);
  }, [data, selectData]);

  const handleSelectAll = () => {
    if (!multiple || !selectAll) {
      return;
    }
    if (
      selectedElements.length ===
      data.filter((el) => !el.disabled && !el.optgroup).length
    ) {
      setSelectedElements([]);
      onValueChange?.([]);

      return updateMultipleInput([]);
    }

    const dataIndexes = selectData
      ?.filter((el) => !el.disabled && !el.optgroup)
      .map((el) => el.elementPosition);
    setSelectedElements(dataIndexes);
    onValueChange?.(data.filter((el) => !el.disabled));

    return updateMultipleInput(dataIndexes);
  };

  const updateInput = useCallback(() => {
    if (selectData.length === 0) return;

    let selectedOptionIndex: number | undefined = selectedElements[0];
    const noSelectedOption: boolean = selectedOptionIndex === undefined;

    if (isRendered && !multiple) {
      if (
        (noSelectedOption && preventFirstSelection) ||
        !isRendered ||
        multiple
      ) {
        return;
      } else if (noSelectedOption) {
        selectedOptionIndex = 0;
      }
      const optionValue = selectData[selectedOptionIndex].value;
      const optionText = String(selectData[selectedOptionIndex].text);

      if (!optionText) {
        setFakeValue(null);
        setInputValue(optionValue ? " " : "");
      } else {
        setFakeValue(optionValue ? null : optionText);
        setInputValue(optionValue ? optionText : "");
      }
    }
  }, [
    multiple,
    isRendered,
    selectedElements,
    selectData,
    preventFirstSelection,
  ]);

  const updateMultipleInput = useCallback(
    (newData: number[]) => {
      const isTextExtended =
        displayedLabels === -1 || newData.length > displayedLabels;

      if (newData.length <= 0) {
        setFakeValue(null);
        setInputValue("");
      }

      if (isTextExtended) {
        setFakeValue(null);
        return setInputValue(`${newData.length} ${optionsSelectedLabel}`);
      }

      const selectedOptionsTextArray = newData
        .map((itemIndex: number) => selectData[itemIndex].text || "")
        .filter((value: any) => value !== "");

      const selectedOptionsValuesArray = newData
        .map((itemIndex: number) => selectData[itemIndex].value || "")
        .filter((value: any) => value !== "");

      const isEveryOptionTextEmpty =
        selectedOptionsTextArray.findIndex((text: string) => text !== "") ===
        -1;
      const isAnyOptionWithValue = selectedOptionsValuesArray.length > 0;
      const optionsTextCombined = selectedOptionsTextArray.join(", ");

      if (isEveryOptionTextEmpty) {
        setFakeValue(null);
        isAnyOptionWithValue ? setInputValue(" ") : setInputValue("");
      } else {
        isAnyOptionWithValue
          ? (setInputValue(optionsTextCombined), setFakeValue(null))
          : (setInputValue(""), setFakeValue(optionsTextCombined));
      }
    },
    [displayedLabels, optionsSelectedLabel, selectData]
  );

  useEffect(() => {
    updateInput();
  }, [selectedElements, updateInput]);

  const handleOptionClick = (el: ExtendedSelectData) => {
    if (!el || el.disabled) {
      return;
    }

    const { elementPosition } = el;

    if (multiple) {
      const isSelected = selectedElements.includes(elementPosition);

      isSelected
        ? onOptionDeselect?.(data[elementPosition])
        : onOptionSelect?.(data[elementPosition]);

      const newData = isSelected
        ? selectedElements.filter(
            (itemIndex: number) => itemIndex !== elementPosition
          )
        : [...selectedElements, elementPosition];
      setSelectedElements(newData);
      setActiveElementIndex(elementPosition);
      onValueChange?.(newData.map((itemIndex) => data[itemIndex]));

      return updateMultipleInput(newData);
    }

    onOptionDeselect?.(data[activeElementIndex]);

    setSelectedElements([elementPosition]);

    onValueChange?.(data[elementPosition]);

    onOptionSelect?.(data[elementPosition]);
    setIsOpen(false);

    return referenceElement?.focus();
  };

  useEffect(() => {
    setIsRendered(true);
  }, []);

  useEffect(() => {
    if (multiple) {
      const selectedItems = selectData
        .filter((el) => el.defaultSelected)
        .map((el) => el.elementPosition);
      updateMultipleInput(selectedItems);

      return setSelectedElements(selectedItems);
    }
    let selectedIndex = selectData.findIndex((el) => el.defaultSelected);

    // if there's no default selected item - get first not disabled one
    if (selectedIndex === SELECT_ALL_INDEX && !preventFirstSelection) {
      selectedIndex = selectData.findIndex((el) => !el.disabled && !el.hidden);
    }

    // additional check if all elements are disabled
    // and there's no default selected element
    if (selectedIndex !== SELECT_ALL_INDEX) {
      setSelectedElements([selectedIndex]);
    }
  }, [selectData, updateMultipleInput, multiple, preventFirstSelection]);

  useEffect(() => {
    if (isOpen && search && selectedElements.length === 0) {
      return setActiveElementIndex(SELECT_ALL_INDEX);
    }
    if (!isOpen) {
      selectedElements.length > 0
        ? setActiveElementIndex(Math.max(...selectedElements))
        : setActiveElementIndex(multiple ? SELECT_ALL_INDEX - 1 : 0);
    }
  }, [filteredData, isOpen, search, selectedElements, selectedElements]);

  useEffect(() => {
    setMaxDropdownHeight(visibleOptions * optionHeight);
  }, [visibleOptions, optionHeight]);

  useEffect(() => {
    handleResize();
  }, [handleResize]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("click", handleClickOutside);
      window.addEventListener("resize", handleResize);
    }
    return () => {
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleClickOutside, handleResize, isOpen]);

  useEffect(() => {
    if (showRef) {
      const selector = showRef.current;
      selector?.addEventListener("click", toggleOpen);

      return () => {
        selector?.removeEventListener("click", toggleOpen);
      };
    }
  }, [showRef, toggleOpen]);

  useEffect(() => {
    if (!value) return;

    const selectValuesArray = Array.isArray(value) ? value : [value];

    const selectedOptionsIndexes = selectData
      .filter((el) => el.value && selectValuesArray.includes(el.value))
      .map((el) => el.elementPosition);

    if (selectedOptionsIndexes.toString() === selectedElements.toString())
      return;

    const dataToReturn = multiple
      ? selectedOptionsIndexes.map((itemIndex) => selectData[itemIndex])
      : selectData[selectedOptionsIndexes[0]];

    onValueChange?.(dataToReturn);
    setSelectedElements(selectedOptionsIndexes);

    multiple ? updateMultipleInput(selectedOptionsIndexes) : updateInput();
  }, [
    value,
    selectData,
    multiple,
    onValueChange,
    selectedElements,
    updateInput,
    updateMultipleInput,
  ]);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      onTransitionShow(() => {
        setShowDropdown(true);
        setOpen?.(true);
      });
      return;
    }

    if (!showDropdown) {
      return;
    }

    setShowDropdown(false);
    setOpen?.(false);
    document.activeElement === referenceElement && referenceElement.blur();

    onTransitionHide(() => {
      setIsMounted(false);
      search && setQuery("");
    });
  }, [isOpen]);

  useEffect(() => {
    if (isMounted) {
      showDropdown ? onOpen?.() : onClose?.();
      showDropdown && search && searchRef.current?.focus();
    }
  }, [showDropdown]);

  const dropdownContainer = container
    ? document.querySelector(container) || document.body
    : document.body;

  return (
    <>
      <Tag className={wrapperClasses} {...props}>
        <TEInput
          type="text"
          ref={setReferenceElement as any}
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={handleKeyboard}
          value={inputValue}
          disabled={disabled}
          placeholder={
            String(inputValue) ? undefined : label ? undefined : placeholder
          }
          label={label}
          readOnly
          size={size}
          theme={{ input: theme.selectInput, label: theme.selectLabel }}
          formWhite={contrast}
          aria-multiselectable={!!multiple}
          aria-disabled={!!disabled}
          aria-expanded={isOpen}
          role="listbox"
        />
        {clearBtn && (inputValue.length > 0 || fakeValue) && (
          <span
            tabIndex={0}
            className={clearBtnClasses}
            role="button"
            onClick={() => {
              setInputValue("");
              setSelectedElements([]);
              onValueChange?.(multiple ? [] : {});
            }}
          >
            {clearIcon || (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </span>
        )}
        <div className={arrowClasses}>
          {selectIcon || (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          )}
        </div>
        {isMounted &&
          createPortal(
            <div
              ref={setPopperElement as any}
              style={{ ...styles.popper, width: inputWidth }}
              {...attributes.popper}
              className={theme.selectDropdownContainer}
            >
              <div tabIndex={0} className={dropdownClasses} ref={dropdownRef}>
                {search && (
                  <div className={theme.inputGroup}>
                    <input
                      className={theme.selectFilterInput}
                      placeholder={searchLabel}
                      onKeyDown={handleKeyboard}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setQuery(e.target.value)
                      }
                      ref={searchRef}
                      type="text"
                      role="searchbox"
                    />
                  </div>
                )}
                <div
                  className={optionsWrapperClasses}
                  ref={dropdownWrapperRef}
                  style={{ maxHeight: `${maxDropdownHeight}px` }}
                >
                  <TESelectOptionList
                    data={data}
                    selectData={filteredData}
                    selectedElements={selectedElements}
                    optionHeight={optionHeight}
                    visibleOptions={visibleOptions}
                    handleOptionClick={handleOptionClick}
                    handleSelectAll={handleSelectAll}
                    selectAll={selectAll}
                    selectAllLabel={selectAllLabel}
                    multiple={multiple}
                    activeElementIndex={activeElementIndex}
                    search={search}
                    noResultsText={noResultsText}
                    theme={theme as typeof customTheme}
                  />
                </div>
                {children}
              </div>
            </div>,
            dropdownContainer
          )}
      </Tag>
    </>
  );
};

export default TESelect;
