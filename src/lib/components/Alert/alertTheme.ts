const alertTheme = {
  wrapper: "inline-flex mb-3 items-center rounded-lg px-6 py-5 text-base",
  wrapperTransition:
    "transition duration-300 ease-in-out motion-reduce:transition-none",
  wrapperVisible: "opacity-100",
  wrapperHidden: "opacity-0",
  static: "w-full",
  nonStatic: "fixed top-4 right-4",
  dismissButton:
    "w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25",
  dismissButtonWrapper:
    "ml-auto box-content rounded-none border-none p-1 text-warning-900 opacity-50 hover:text-warning-900 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none",
};

export default alertTheme;
