const collapseTheme = {
  visible: "!visible",
  hidden: "hidden",
  baseTransition:
    "overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none shadow-lg",
  collapsing:
    "h-0 transition-[height] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapsingHorizontal:
    "w-0 h-auto transition-[width] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapseStyles: "rounded-lg shadow-lg mt-3",
  scrollStyles: "max-h-24 overflow-y-auto max-w-[500px]",
};

export default collapseTheme;
