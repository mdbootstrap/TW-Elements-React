import { createContext } from "react";
import { StepsValidity } from "./Stepper";

interface StepperContextProps {
  activeStep: number;
  onChange?: (id: number) => void;
  stepperRef: React.RefObject<HTMLUListElement> | null;
  stepsValidity: StepsValidity | null;
  stepperHeight: string;
  setStepperHeight: (height: string) => void;
  vertical: boolean;
  stepsAmount: number;
  linear?: boolean;
  setActiveStepContent: React.Dispatch<React.SetStateAction<any>>;
}

const StepperContext = createContext<StepperContextProps>({
  activeStep: 1,
  onChange: () => {},
  stepperRef: null,
  stepsValidity: null,
  stepperHeight: "0",
  setStepperHeight: () => {},
  vertical: false,
  stepsAmount: 0,
  linear: false,
  setActiveStepContent: () => {},
});

export default StepperContext;
