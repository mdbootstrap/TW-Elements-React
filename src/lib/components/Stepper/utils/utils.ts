const getTranslateDirection = (activeStep: number, step: number) => {
  if (activeStep > step) {
    return "Left";
  }
  if (activeStep < step) {
    return "Right";
  }
};

export { getTranslateDirection };
