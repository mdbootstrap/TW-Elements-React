const useHeadIconClasses = (
  isActive: boolean,
  isCompleted: boolean,
  isInvalid: boolean,
  theme: any
): string => {
  const {
    stepperHeadIcon,
    stepperHeadIconActive,
    stepperHeadIconCompleted,
    stepperHeadIconInvalid,
  } = theme;

  if (isActive) {
    return stepperHeadIconActive;
  }

  if (isCompleted) {
    return stepperHeadIconCompleted;
  }

  if (isInvalid) {
    return stepperHeadIconInvalid;
  }

  return stepperHeadIcon;
};

export default useHeadIconClasses;
