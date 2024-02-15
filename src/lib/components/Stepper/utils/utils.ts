import type { customValidationType } from "../../Stepper/types";
import type { StepsValidity } from "../Stepper";

const getTranslateDirection = (activeStep: number, step: number) => {
  if (activeStep > step) {
    return "Left";
  }
  if (activeStep < step) {
    return "Right";
  }
};

const validateStepContent = (
  stepContent: HTMLElement,
  customValidation?: customValidationType
): boolean => {
  let isFormValid = true;
  const validableElements: HTMLInputElement[] = Array.from(
    stepContent.querySelectorAll(
      "input[required], select[required], textarea[required]"
    )
  );

  if (customValidation) {
    validableElements.forEach((el) => {
      const isElementValid = customValidation(el);
      if (!isElementValid) {
        isFormValid = false;
      }
    });
  }

  // in this case we expect native-like validation, which means we'll stop the check
  // after the first invalid element is found
  if (!customValidation) {
    validableElements.every((el) => {
      const isElementValid = el.checkValidity();
      if (!isElementValid) {
        isFormValid = false;
        el.reportValidity();
      }
      return isElementValid;
    });
  }

  return isFormValid;
};

/**
 * Checks the validity of steps between the active step and the target step.
 * @return {boolean} Returns true if all the steps between the active step and the target step ID are valid, otherwise false
 */
const checkStepsBetweenValidity = (
  activeStep: number,
  targetStepId: number,
  stepsValidity: StepsValidity,
  setStepsValidity: React.Dispatch<React.SetStateAction<StepsValidity>>
) => {
  if (activeStep > targetStepId) {
    [activeStep, targetStepId] = [targetStepId, activeStep];
  }

  for (let step = activeStep + 1; step < targetStepId; step++) {
    setStepsValidity((prev: StepsValidity) => {
      return {
        ...prev,
        [`step${step}`]: {
          ...prev[`step${step}`],
          wasValidated: true,
        },
      };
    });

    if (!stepsValidity[`step${step}`].isValid) {
      return false;
    }
  }

  return true;
};

export {
  getTranslateDirection,
  validateStepContent,
  checkStepsBetweenValidity,
};
