declare const useInput: (innerRef: React.RefObject<any>, labelRef?: React.RefObject<HTMLLabelElement>, value?: string | number | readonly string[], defaultValue?: string | number | readonly string[], onBlur?: ((event: React.FocusEvent<any>) => void) | undefined, onChange?: ((event: React.ChangeEvent<any>) => void) | undefined, counter?: boolean, maxLength?: number, theme?: any, size?: string, className?: string, formWhite?: boolean) => {
    labelReference: import("react").RefObject<HTMLLabelElement>;
    labelWidth: number;
    newValue: string | number | readonly string[] | undefined;
    setWidth: () => void;
    setFocus: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    handleChange: (e: any) => void;
    handleBlur: (e: any) => void;
    inputClasses: string;
    labelClasses: string;
    notchLeadingClasses: string;
    notchMiddleClasses: string;
    notchTrailingClasses: string;
};
export { useInput };
