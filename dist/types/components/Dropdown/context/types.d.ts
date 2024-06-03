import { Dispatch, SetStateAction, SyntheticEvent } from "react";
export interface DropdownContextProps {
    activeIndex: number;
    animation: boolean;
    isOpenState: boolean;
    popperElement: HTMLElement | null;
    referenceElement: HTMLElement | null;
    setIsOpenState: Dispatch<SetStateAction<boolean>>;
    setActiveIndex: Dispatch<SetStateAction<number>>;
    setPopperElement: Dispatch<SetStateAction<HTMLElement | null>>;
    setReferenceElement: Dispatch<SetStateAction<HTMLElement | null>>;
    onHide?: (e: MouseEvent | SyntheticEvent | KeyboardEvent) => any;
    onHidden?: (e: MouseEvent | SyntheticEvent | KeyboardEvent) => any;
    onShow?: (e: MouseEvent | SyntheticEvent | KeyboardEvent) => any;
    onShown?: (e: MouseEvent | SyntheticEvent | KeyboardEvent) => any;
    autoClose?: boolean | string;
}
