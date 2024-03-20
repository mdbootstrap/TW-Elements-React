const InputTheme = {
  wrapper: "relative",
  input:
    "peer block min-h-[auto] w-full rounded border-0 bg-transparent outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary motion-reduce:transition-none` placeholder:opacity-0 disabled:bg-neutral-100 read-only:bg-neutral-100 dark:disabled:bg-neutral-700 dark:read-only:bg-neutral-700 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary",
  inputDefault: "text-neutral-800 dark:text-neutral-200",
  inputWhite: "text-white",
  activeInput: "placeholder:opacity-100",
  label:
    "pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate transition-all duration-200 ease-out peer-focus:scale-[0.8] motion-reduce:transition-none",
  labelDefault:
    "text-neutral-500 dark:text-neutral-200 peer-focus:text-primary dark:peer-focus:text-primary",
  labelWhite: "text-white",
  activeLabel: "scale-[0.8]",
  notch:
    "group flex absolute left-0 top-0 w-full max-w-full h-full text-left pointer-events-none",
  notchLeading:
    "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none left-0 top-0 h-full w-2 border-r-0 rounded-l-[0.25rem]",
  activeNotchLeading: "border-r-0",
  focusedNotchLeading: "border-r-0",
  notchLeadingDefault: "border-neutral-300 dark:border-neutral-600",
  focusedNotchLeadingDefault:
    "shadow-[-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca] border-primary dark:border-primary",
  notchLeadingWhite: "border-neutral-200",
  focusedNotchLeadingWhite:
    "shadow-[-1px_0_0_#ffffff,_0_1px_0_0_#ffffff,_0_-1px_0_0_#ffffff] border-white",
  notchMiddle:
    "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow-0 shrink-0 basis-auto w-auto max-w-[calc(100%-1rem)] h-full border-r-0 border-l-0",
  activeNotchMiddle:
    "border-x-0 border-t border-solid border-t-transparent dark:border-t-transparent",
  focusedNotchMiddle:
    "border-x-0 border-t border-solid border-t-transparent dark:border-t-transparent",
  notchMiddleDefault: "border-neutral-300 dark:border-neutral-600",
  focusedNotchMiddleDefault:
    "shadow-[0_1px_0_0_#3b71ca] border-primary dark:border-primary",
  notchMiddleWhite: "border-neutral-200",
  focusedNotchMiddleWhite: "shadow-[0_1px_0_0_#ffffff] border-white",
  notchTrailing:
    "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow h-full border-l-0 rounded-r-[0.25rem]",
  activeNotchTrailing: "border-l-0",
  focusedNotchTrailing: "border-l-0",
  notchTrailingDefault: "border-neutral-300 dark:border-neutral-600",
  focusedNotchTrailingDefault:
    "shadow-[1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca] border-primary dark:border-primary",
  notchTrailingWhite: "border-neutral-200",
  focusedNotchTrailingWhite:
    "shadow-[1px_0_0_#ffffff,_0_-1px_0_0_#ffffff,_0_1px_0_0_#ffffff] border-white",
  counter: "text-right leading-[1.6]",
  inputSizeLg: "px-3 py-[0.32rem] leading-[2.15]",
  inputSizeBase: "px-3 py-[0.32rem] leading-[1.6]",
  inputSizeSm: "px-3 py-[0.33rem] text-xs leading-[1.5]",
  labelSizeLg: "pt-[0.36rem] leading-[2.15] peer-focus:-translate-y-[1.15rem]",
  activeLabelSizeLg: "-translate-y-[1.15rem]",
  labelSizeBase: "pt-[0.30rem] leading-[1.6] peer-focus:-translate-y-[0.9rem]",
  activeLabelSizeBase: "-translate-y-[0.9rem]",
  labelSizeSm:
    "pt-[0.36rem] text-xs leading-[1.5] peer-focus:-translate-y-[0.75rem]",
  activeLabelSizeSm: "-translate-y-[0.75rem]",
};

const AutocompleteTheme = {
  ...InputTheme,
  autocompleteItem:
    "flex flex-row items-center justify-between w-full px-4 py-[0.4375rem] truncate select-none cursor-pointe",
  autocompleteItemDefault:
    "text-gray-700 bg-transparent hover:bg-black/5 dark:text-white dark:hover:bg-black/10",
  autocompleteItemActive: "bg-black/5 dark:bg-black/10",
  autocompleteItemDisabled:
    "text-[#4f4f4f]/50 cursor-default dark:text-white/50 dark:bg-black/10",
  autocompleteList: "list-none m-0 p-0 overflow-y-auto",
  autocompleteLoader:
    "absolute end-1 top-2 w-[1.4rem] h-[1.4rem] border-[0.15em]",
  dropdown:
    "relative mt-px outline-none min-w-[100px] m-0 bg-white shadow-[0_2px_5px_0_rgba(0,0,0,0.16),_0_2px_10px_0_rgba(0,0,0,0.12)] transition duration-200 motion-reduce:transition-none dark:bg-[#424242]",
  dropdownDefault: "scale-y-[0.8] opacity-0",
  dropdownOpen: "scale-y-100 opacity-100",
  dropdownContainer: "z-[1070]",
  scrollbar:
    "[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-button]:block [&::-webkit-scrollbar-button]:h-0 [&::-webkit-scrollbar-button]:bg-transparent [&::-webkit-scrollbar-track-piece]:bg-transparent [&::-webkit-scrollbar-track-piece]:rounded-none [&::-webkit-scrollbar-track-piece]: [&::-webkit-scrollbar-track-piece]:rounded-s [&::-webkit-scrollbar-thumb]:h-[50px] [&::-webkit-scrollbar-thumb]:bg-[#999] [&::-webkit-scrollbar-thumb]:rounded [&::-webkit-scrollbar-thumb]:dark:bg-gray-200",
  spinnerIcon:
    "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
  spinnerElement:
    "absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]",
  labelActiveSizeLg: "-translate-y-[1.15rem]",
  labelActiveSizeBase: "-translate-y-[0.9rem]",
  labelActiveSizeSm: "-translate-y-[0.75rem]",
  labelActiveScale: "!scale-[0.8]",
};

export default AutocompleteTheme;
