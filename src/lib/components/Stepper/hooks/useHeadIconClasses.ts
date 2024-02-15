import clsx from "clsx";

const useHeadIconClasses = (
  theme: any,
  vertical: boolean,
  isActive: boolean,
  isCompleted: boolean,
  isInvalid?: boolean,
  isDisabled?: boolean
): string => {
  const {
    stepperHeadIconHorizontal,
    stepperHeadIconVertical,
    stepperHeadIconActiveBg,
    stepperHeadIconCompletedBg,
    stepperHeadIconInvalidBg,
    stepperHeadIconDisabledBg,
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

  if (isDisabled) {
    return clsx(headIconTheme, stepperHeadIconDisabledBg);
  }

  if (isCompleted) {
    return clsx(headIconTheme, stepperHeadIconCompletedBg);
  }

  return headIconTheme;
};

export default useHeadIconClasses;
