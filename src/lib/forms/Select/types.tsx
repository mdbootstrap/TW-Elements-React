import { BaseComponent } from "../../types/baseComponent";

export interface selectTheme {
  dropdown?: string;
  dropdownVisible?: string;
  dropdownHidden?: string;
  formCheckInput?: string;
  formOutline?: string;
  inputGroup?: string;
  noResult?: string;
  optionsList?: string;
  optionsWrapper?: string;
  optionsWrapperScrollbar?: string;
  selectArrow?: string;
  selectArrowFocused?: string;
  selectArrowWhite?: string;
  selectArrowWhiteFocused?: string;
  selectArrowDefault?: string;
  selectArrowLg?: string;
  selectArrowSm?: string;
  selectClearBtn?: string;
  selectClearBtnWhite?: string;
  selectClearBtnDefault?: string;
  selectClearBtnLg?: string;
  selectClearBtnSm?: string;
  selectDropdownContainer?: string;
  selectFilterInput?: string;
  selectInput?: string;
  selectLabel?: string;
  selectOption?: string;
  selectOptionDefault?: string;
  selectOptionDisabled?: string;
  selectOptionSelected?: string;
  selectOptionActive?: string;
  selectOptionNonDisabled?: string;
  selectOptionsMultipleActive?: string;
  selectOptionsOptGroup?: string;
  selectOptionGroup?: string;
  selectOptionGroupLabel?: string;
  selectOptionIcon?: string;
  selectOptionSecondaryText?: string;
}

type SelectData = {
  disabled?: boolean;
  hidden?: boolean;
  text?: string;
  defaultSelected?: boolean;
  secondaryText?: React.ReactNode;
  value?: string | number;
  icon?: string;
  active?: boolean;
  optgroup?: boolean | SelectData[];
};

interface ExtendedSelectData extends SelectData {
  elementPosition: number;
}

interface SelectProps extends BaseComponent {
  open?: boolean;
  data: SelectData[];
  className?: string;
  optionHeight?: number;
  visibleOptions?: number;
  disabled?: boolean;
  placeholder?: string;
  label?: string;
  clearBtn?: boolean;
  multiple?: boolean;
  displayedLabels?: number;
  optionsSelectedLabel?: string;
  selectAll?: boolean;
  selectAllLabel?: string;
  size?: "sm" | "lg";
  showRef?: React.RefObject<any>;
  contrast?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  onValueChange?: (data: SelectData[] | SelectData) => void;
  onOptionSelect?: (data: SelectData) => void;
  onOptionDeselect?: (data: SelectData) => void;
  search?: boolean;
  searchLabel?: string;
  autoSelect?: boolean;
  noResultsText?: string;
  preventFirstSelection?: boolean;
  value?: Array<string | number> | string | number;
  theme?: selectTheme;
  tag?: React.ComponentProps<any>;
  container?: string;
  clearIcon?: React.ComponentElement<any, any>;
  selectIcon?: React.ComponentElement<any, any>;
}

export { SelectProps, SelectData, ExtendedSelectData };
