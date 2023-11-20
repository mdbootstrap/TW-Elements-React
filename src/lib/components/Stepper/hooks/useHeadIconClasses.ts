const useHeadIconClasses = (
  isActive: boolean,
  isCompleted: boolean,
  isInvalid: boolean,
  theme: any,
  vertical: boolean
): string => {
  const {
    stepperHeadIcon,
    stepperHeadIconVertical,
    stepperHeadIconActiveBg,
    stepperHeadIconCompletedBg,
    stepperHeadIconInvalidBg,
  } = theme;

  const headIconTheme = vertical ? stepperHeadIconVertical : stepperHeadIcon;

  if (isActive) {
    return headIconTheme + " " + stepperHeadIconActiveBg;
  }
  if (isInvalid) {
    return headIconTheme + stepperHeadIconInvalidBg;
  }
  if (isCompleted) {
    return headIconTheme + " " + stepperHeadIconCompletedBg;
  }

  return headIconTheme;
};

export default useHeadIconClasses;
