import { BaseComponent } from "../../../types/baseComponent";
import type { selectTheme, SelectData, ExtendedSelectData } from "../types";
interface SelectOptionState {
    disabled: boolean;
    hidden: boolean;
    selected: boolean;
    active: boolean;
    group: boolean;
}
interface SelectOptionListProps extends BaseComponent {
    data: SelectData[];
    selectData: ExtendedSelectData[];
    selectedElements: number[];
    optionHeight?: number;
    handleOptionClick: (el: any) => any;
    handleSelectAll: () => any;
    selectAll?: boolean;
    selectAllLabel?: string;
    multiple?: boolean;
    activeElementIndex: number;
    search?: boolean;
    noResultsText: string;
    theme?: selectTheme;
}
export { SelectOptionListProps, SelectOptionState };
