interface StepperStepThemeProps {
  stepperStep?: string;
  stepperStepVertical?: string;
  stepperLastStepVertical?: string;
  disabledStep?: string;
  stepperHeadHorizontal?: string;
  stepperFirstStepHeadHorizontal?: string;
  stepperLastStepHeadHorizontal?: string;
  stepperHeadVertical?: string;
  stepperHeadIconHorizontal?: string;
  stepperHeadIconVertical?: string;
  stepperHeadIconActiveBg?: string;
  stepperHeadIconInvalidBg?: string;
  stepperHeadIconDisabledBg?: string;
  stepperHeadIconCompletedBg?: string;
  stepperHeadText?: string;
  stepperHeadTextActive?: string;
  stepperContent?: string;
  stepperContentTranslateLeft?: string;
  stepperContentTranslateRight?: string;
  stepperVerticalContent?: string;
  stepperContentWrapper?: string;
}

const StepperStepTheme: StepperStepThemeProps = {
  stepperStep: "w-[4.5rem] flex-auto",
  stepperStepVertical:
    "relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] dark:after:bg-neutral-600",
  stepperLastStepVertical: "relative h-fit",
  disabledStep: "pointer-events-none",
  stepperHeadHorizontal:
    "flex cursor-pointer items-center leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]",
  stepperFirstStepHeadHorizontal:
    "flex cursor-pointer items-center pl-2 leading-[1.3rem] no-underline after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]",
  stepperLastStepHeadHorizontal:
    "flex cursor-pointer items-center pr-2 leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]",
  stepperHeadVertical:
    "flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline hover:bg-[#f9f9f9] focus:outline-none dark:hover:bg-[#3b3b3b]",
  stepperHeadIconHorizontal:
    "my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#6d6d6d] text-sm font-medium text-[#fff] dark:bg-[#757575]",
  stepperHeadIconVertical:
    "mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#6d6d6d] text-sm font-medium text-[#fff] dark:bg-[#757575]",
  stepperHeadIconCompletedBg:
    "!bg-success-100 !text-success-700 dark:!bg-[#04201f] dark:!text-[#72c894]",
  stepperHeadIconActiveBg:
    "!bg-primary-100 !text-primary-700 dark:!bg-[#0c1728] dark:!text-[#628dd5]",
  stepperHeadIconInvalidBg:
    "!bg-danger-100 !text-danger-700 dark:!bg-[#2c0f14] dark:!text-[#e37083]",
  stepperHeadIconDisabledBg:
    "!bg-[#6d6d6d] !text-neutral-300 dark:!bg-[#757575]",
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
    "transition-[height,_margin-bottom,_padding-top,_padding-bottom] left-0 overflow-hidden pl-[3.75rem] pr-6 duration-300 ease-in-out",
};

export default StepperStepTheme;
export type { StepperStepThemeProps };
