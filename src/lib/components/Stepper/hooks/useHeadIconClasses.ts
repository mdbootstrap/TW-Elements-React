import clsx from "clsx";

const useHeadIconClasses = (
  theme: any,
  vertical: boolean,
  isActive: boolean,
  isCompleted: boolean,
  isInvalid?: boolean
): string => {
  const {
    stepperHeadIconHorizontal,
    stepperHeadIconVertical,
    stepperHeadIconActiveBg,
    stepperHeadIconCompletedBg,
    stepperHeadIconInvalidBg,
  } = theme;

  const headIconTheme = vertical
    ? stepperHeadIconVertical
    : stepperHeadIconHorizontal;

  if (isInvalid) {
    return clsx(headIconTheme, stepperHeadIconInvalidBg);
  }

  if (isActive) {
    return clsx(headIconTheme, stepperHeadIconActiveBg);
  }
  if (isCompleted) {
    return clsx(headIconTheme, stepperHeadIconCompletedBg);
  }

  return headIconTheme;
};

export default useHeadIconClasses;
