interface StepperStepThemeProps {
  stepperStep: string;
  stepperHead: string;
  stepperHeadIcon: string;
  stepperHeadIconActive: string;
  stepperHeadIconCompleted: string;
  stepperHeadText: string;
  stepperHeadTextActive: string;
  stepperContentTranslatedLeft: string;
  stepperContentTranslatedRight: string;
  stepperContentActive: string;
}

const StepperStepTheme = {
  stepperStep: "w-[4.5rem] flex-auto",
  stepperStepVertical:
    "relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] dark:after:bg-neutral-600",
  stepperLastStepVertical: "relative h-fit",
  stepperHeadHorizontal:
    "flex cursor-pointer items-center leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]",
  stepperFirstStepHeadHorizontal:
    "flex cursor-pointer items-center pl-2 leading-[1.3rem] no-underline after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]",
  stepperLastStepHeadHorizontal:
    "flex cursor-pointer items-center pr-2 leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]",
  stepperHeadVertical:
    "flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline hover:bg-[#f9f9f9] focus:outline-none dark:hover:bg-[#3b3b3b]",
  stepperHeadIcon:
    "my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]",
  stepperHeadIconVertical:
    "mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]",
  stepperHeadIconCompletedBg: "!bg-success-100 !text-success-700",
  stepperHeadIconActiveBg: "!bg-primary-100 !text-primary-700",
  stepperHeadIconInvalidBg: "!bg-danger-100 !text-danger-700",
  stepperHeadText:
    "text-neutral-500 after:flex after:text-[0.8rem] dark:text-neutral-300",
  stepperHeadTextActive:
    "font-medium after:flex after:text-[0.8rem] after:content-[data-content]",
  stepperContentWrapper:
    "transition-all duration-500 ease-in-out overflow-hidden",
  stepperContent:
    "absolute left-0 w-full p-4 transition-all duration-500 ease-in-out translate-0",
  stepperContentTranslateLeft: "-translate-x-[150%]",
  stepperContentTranslateRight: "translate-x-[150%]",
  stepperVerticalContent:
    "transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pb-6 pl-[3.75rem] pr-6 duration-300 ease-in-out",
};

export default StepperStepTheme;
export type { StepperStepThemeProps };
