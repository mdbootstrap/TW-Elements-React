const collapseTheme = {
  visible: "!visible",
  hidden: "hidden",
  collapsing:
    "h-0 transition-[height] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapsingHorizontal:
    "w-0 h-auto transition-[width] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapseStyles:
    "rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mt-3",
  scrollStyles: "max-h-24 overflow-y-auto max-w-[500px]",
};

export default collapseTheme;
