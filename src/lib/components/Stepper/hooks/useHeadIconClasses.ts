import clsx from "clsx";

const useHeadIconClasses = (
  isActive: boolean,
  isCompleted: boolean,
  isDisabled: boolean,
  theme: any,
  vertical: boolean
): string => {
  const {
    stepperHeadIconHorizontal,
    stepperHeadIconVertical,
    stepperHeadIconActiveBg,
    stepperHeadIconCompletedBg,
    stepperHeadIconDisabledBg,
  } = theme;

  const headIconTheme = vertical
    ? stepperHeadIconVertical
    : stepperHeadIconHorizontal;

  if (isActive) {
    return clsx(headIconTheme, stepperHeadIconActiveBg);
  }
  if (isDisabled) {
    return clsx(headIconTheme, stepperHeadIconDisabledBg);
  }
  if (isCompleted) {
    return clsx(headIconTheme, stepperHeadIconCompletedBg);
  }

  return headIconTheme;
};

export default useHeadIconClasses;
