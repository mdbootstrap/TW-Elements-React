import { createContext } from "react";

interface StepperContextProps {
  activeStep: number;
  onChange?: (id: number) => void;
  stepperRef: React.RefObject<HTMLUListElement> | null;
  stepperHeight: string;
  setStepperHeight: (height: string) => void;
  vertical: boolean;
  stepsAmount: number;
  linear?: boolean;
}

const StepperContext = createContext<StepperContextProps>({
  activeStep: 1,
  onChange: () => {},
  stepperRef: null,
  stepperHeight: "0",
  setStepperHeight: () => {},
  vertical: false,
  stepsAmount: 0,
  linear: false,
});

export default StepperContext;
