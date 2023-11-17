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
  stepperHead:
    "flex cursor-pointer items-center leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]",
  stepperHeadIcon:
    "my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]",
  stepperHeadIconActive:
    "my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f] !bg-primary-100 !text-primary-700",
  stepperHeadIconCompleted:
    "my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f] !bg-success-100 !text-success-700",
  stepperHeadText:
    "text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300",
  stepperHeadTextActive:
    "font-medium after:flex after:text-[0.8rem] after:content-[data-content]",
  stepperContentTranslatedLeft:
    "absolute left-0 w-full p-4 transition-all duration-500 ease-in-out translate-0 -translate-x-[150%]",
  stepperContentTranslatedRight:
    "absolute left-0 w-full p-4 transition-all duration-500 ease-in-out translate-0 translate-x-[150%]",
  stepperContentActive:
    "absolute left-0 w-full p-4 transition-all duration-500 ease-in-out translate-0",
};

export default StepperStepTheme;
export type { StepperStepThemeProps };
