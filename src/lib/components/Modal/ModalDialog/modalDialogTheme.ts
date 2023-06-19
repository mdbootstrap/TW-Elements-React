const ModalDialogTheme = {
  centered: "h-[calc(100vh-3.5rem)] flex items-center justify-center",
  fullscreen: "!h-full w-full !m-0",
  hidden: "translate-y-[-50px] opacity-0",
  scrollable: "h-[calc(100vh-3.5rem)] overflow-hidden",
  show: "translate-y-0 opacity-100",
  sizeDefault: "min-[576px]:max-w-[500px]",
  wrapper:
    "pointer-events-none transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7",
  wrapperPositionDefault: "relative w-auto",
  "bottom-left": "w-full absolute bottom-7 left-7",
  "bottom-right": "w-full absolute bottom-7 right-7",
  "top-left": "w-full absolute left-7",
  "top-right": "w-full absolute right-7",
  sm: "min-[576px]:max-w-[300px]",
  lg: "min-[992px]:max-w-[800px]",
  xl: "min-[992px]:max-w-[800px] min-[1200px]:max-w-[1140px]",
};

export default ModalDialogTheme;
