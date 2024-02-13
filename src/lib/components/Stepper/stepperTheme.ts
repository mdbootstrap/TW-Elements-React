interface StepperThemeProps {
  stepperHorizontal?: string;
  stepperVertical?: string;
}

const StepperTheme: StepperThemeProps = {
  stepperHorizontal:
    "relative m-0 flex list-none justify-between overflow-hidden p-0 transition-[height] duration-200 ease-in-out",
  stepperVertical:
    "relative m-0 w-full list-none overflow-hidden p-0 transition-[height] duration-200 ease-in-out",
};

export type { StepperThemeProps };
export default StepperTheme;
