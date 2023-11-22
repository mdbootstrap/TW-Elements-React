import clsx from "clsx";

const useHeadIconClasses = (
  isActive: boolean,
  isCompleted: boolean,
  theme: any,
  vertical: boolean
): string => {
  const {
    stepperHeadIconHorizontal,
    stepperHeadIconVertical,
    stepperHeadIconActiveBg,
    stepperHeadIconCompletedBg,
  } = theme;

  const headIconTheme = vertical
    ? stepperHeadIconVertical
    : stepperHeadIconHorizontal;

  if (isActive) {
    return clsx(headIconTheme, stepperHeadIconActiveBg);
  }
  if (isCompleted) {
    return clsx(headIconTheme, stepperHeadIconCompletedBg);
  }

  return headIconTheme;
};

export default useHeadIconClasses;
