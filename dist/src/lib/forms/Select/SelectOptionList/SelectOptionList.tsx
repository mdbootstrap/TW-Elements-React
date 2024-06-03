import React, { useMemo } from "react";
import clsx from "clsx";
import type { SelectOptionListProps, SelectOptionState } from "./types";
import type { ExtendedSelectData } from "../types";

const OPTIONS_WITHOUT_GROUP = 0;

const TESelect: React.FC<SelectOptionListProps> = ({
  data,
  selectData,
  selectedElements,
  optionHeight,
  handleOptionClick,
  handleSelectAll,
  selectAll,
  selectAllLabel,
  multiple,
  activeElementIndex,
  search,
  noResultsText,
  theme = {},
}) => {
  // classes

  const optionClasses = ({
    disabled,
    selected,
    active,
    hidden,
    group,
  }: SelectOptionState) => {
    return clsx(
      theme.selectOption,
      !disabled && !selected && !active && theme.selectOptionDefault,
      !disabled && theme.selectOptionNonDisabled,
      disabled && theme.selectOptionDisabled,
      hidden && "hidden",
      selected && theme.selectOptionSelected,
      active && theme.selectOptionActive,
      group && theme.selectOptionsOptGroup
    );
  };

  //  group options

  const optionGroups = useMemo(() => {
    const groups = selectData.filter((el) => el.optgroup).map((el) => el.text);
    return groups;
  }, [selectData]);

  const groupedSelectData = useMemo(() => {
    let groupIndex = 0;
    const groupedData = selectData.map((el) => {
      if (el.optgroup) {
        groupIndex++;
      }
      return { ...el, groupIndex: groupIndex };
    });
    return groupedData;
  }, [selectData]);

  const isEmptyResults = useMemo(() => {
    return (
      selectData.filter((item) => !item.optgroup && !item.hidden).length === 0
    );
  }, [selectData]);

  // options content

  const singleOption = (item: ExtendedSelectData) => (
    <>
      <span className="group">
        {multiple && (
          <input
            className={theme.formCheckInput}
            type="checkbox"
            checked={selectedElements.includes(item.elementPosition)}
            readOnly
          />
        )}

        {item.text}
        {item.secondaryText && (
          <span className={theme.selectOptionSecondaryText}>
            {item.secondaryText}
          </span>
        )}
      </span>
      {item.icon && (
        <span>
          <img className={theme.selectOptionIcon} src={item.icon} />
        </span>
      )}
    </>
  );

  const createOptions = (group?: number) => {
    return groupedSelectData.map((el) => {
      if (!el.optgroup && group === el.groupIndex) {
        return (
          <div
            key={el.elementPosition}
            className={optionClasses({
              selected: selectedElements.includes(el.elementPosition),
              disabled: el.disabled || false,
              hidden: el.hidden || false,
              active: activeElementIndex === el.elementPosition,
              group: Boolean(el.groupIndex),
            })}
            style={{ height: `${optionHeight}px` }}
            role={"option"}
            aria-selected={selectedElements.includes(el.elementPosition)}
            aria-disabled={el.disabled}
            onClick={() => handleOptionClick(el)}
          >
            {singleOption(el)}
          </div>
        );
      }
    });
  };

  return (
    <>
      {multiple && selectAll && !isEmptyResults && (
        <div
          className={optionClasses({
            disabled: false,
            hidden: false,
            selected: !!(
              selectedElements.length ===
              data.filter((el) => !el.disabled).length
            ),
            active: activeElementIndex === -1,
            group: false,
          })}
          style={{ height: `${optionHeight}px` }}
          onClick={handleSelectAll}
          role="option"
          aria-selected={
            selectedElements.length === data.filter((el) => !el.disabled).length
          }
        >
          <span>
            <input
              className={theme.formCheckInput}
              type="checkbox"
              checked={
                data.filter((el) => !el.disabled && !el.optgroup).length ===
                selectedElements.length
              }
              role="option"
              readOnly
            />
            {selectAllLabel}
          </span>
        </div>
      )}
      <div className={theme.optionsList}>
        {createOptions(OPTIONS_WITHOUT_GROUP)}
        {!isEmptyResults &&
          optionGroups?.map((groupName, index) => {
            const options = createOptions(index + 1).filter(
              (option) => option !== undefined
            );
            if (options.length === 0) {
              return;
            }
            return (
              <div
                className={theme.selectOptionGroup}
                key={`select-option-group ${groupName} ${index}`}
              >
                <label
                  className={theme.selectOptionGroupLabel}
                  style={{ height: optionHeight }}
                >
                  {groupName}
                </label>
                {options}
              </div>
            );
          })}
      </div>

      {search && isEmptyResults && (
        <div className={theme.noResult} style={{ height: `${optionHeight}px` }}>
          {noResultsText}
        </div>
      )}
    </>
  );
};

export default TESelect;
