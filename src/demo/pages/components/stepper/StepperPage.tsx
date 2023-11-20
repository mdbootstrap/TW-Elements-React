import React, { useState } from "react";
import TEStepper from "../../../../lib/components/Stepper/Stepper";
import TEStepperStep from "../../../../lib/components/Stepper/StepperStep/StepperStep";
import { TECollapse } from "tw-elements-react";

const StepperPage = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [activeElement, setActiveElement] = useState<string>("");

  const handleClick = (value: string) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };
  const [addForm, setAddForm] = useState<boolean>(false);
  return (
    <div
      className="
          max-w-[540px] sm:max-w-[604px] md:max-w-[720px] lg:max-w-[972px]
          xl:max-w-full xl:px-12 2xl:max-w-[1400px] mx-auto
         flex"
    >
      <button onClick={() => setAddForm(!addForm)}>Add Form</button>
      <div className="flex w-full flex-col">
        <h2 className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-6 h-">
          Basic example
        </h2>
        <div className="rounded-lg border dark:border-neutral-600 p-4">
          <TEStepper>
            <TEStepperStep headText="Step 1" headIcon="1">
              <div className="mt-5">Step 1 content</div>
              <div>XXXXs</div>
              <div className="mt-5">Step 1 content</div>
              <div>XXXXs</div>
              <div className="mt-5">Step 1 content</div>
              <div>XXXXs</div>
              <div className="mt-5">Step 1 content</div>
              <div>XXXXs</div>
              <div className="mt-5">Step 1 content</div>
              <div>XXXXs</div>
            </TEStepperStep>
            <TEStepperStep headText="Step 2" headIcon={"2"}>
              <div>Step 2 content</div>
            </TEStepperStep>
            <TEStepperStep headText="Step 3" headIcon={"3"}>
              <div>Step 3 content</div>
            </TEStepperStep>
          </TEStepper>
        </div>

        <hr className="my-10" />

        <h2 className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-6">
          Controlled active step
        </h2>

        <div className="rounded-lg border dark:border-neutral-600 p-4">
          <TEStepper
            activeStep={activeStep}
            onChange={(stepId) => {
              console.log("onChange: ", stepId);
              setActiveStep(stepId);
            }}
          >
            <TEStepperStep headText="Step 1" headIcon="1">
              <div className="mt-5">Step 1 content</div>
              <div>XXXXs</div>
              <div className="mt-5">Step 1 content</div>
              <div>XXXXs</div>
              <div className="mt-5">Step 1 content</div>
              <div>XXXXs</div>
              <div className="mt-5">Step 1 content</div>
              <div>XXXXs</div>
              <div className="mt-5">Step 1 content</div>
              <div>XXXXs</div>
            </TEStepperStep>
            <TEStepperStep headText="Step 2" headIcon={"2"}>
              <div>Step 2 content</div>
            </TEStepperStep>
            <TEStepperStep headText="Step 3" headIcon={"3"}>
              <div>Step 3 content</div>
            </TEStepperStep>
          </TEStepper>
        </div>

        <hr className="my-10" />

        <h2 className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-6">
          Vertical stepper
        </h2>

        <div className="rounded-lg border dark:border-neutral-600 p-4 w-1/2">
          <TEStepper vertical>
            <TEStepperStep headText="Step 1" headIcon="1">
              <div className="mt-5">Step 1 content</div>
              <div>XXXXs</div>
              <div className="mt-5">Step 1 content</div>
              <div>XXXXs</div>
              <div className="mt-5">Step 1 content</div>
              <div>XXXXs</div>
              <div className="mt-5">Step 1 content</div>
              <div>XXXXs</div>
              <div className="mt-5 pb-5">Step 1 content</div>
              <div className="pb-10">XXXXs</div>
            </TEStepperStep>
            <TEStepperStep headText="Step 2" headIcon={"2"}>
              <div>
                <div>Step 2 content</div>
                {addForm && (
                  <>
                    <div id="accordionExample">
                      <div className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                        <h2 className="mb-0" id="headingOne">
                          <button
                            className={`${
                              activeElement === "element1" &&
                              `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                            } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                            type="button"
                            onClick={() => handleClick("element1")}
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Accordion Item #1
                            <span
                              className={`${
                                activeElement === "element1"
                                  ? `rotate-[-180deg] -mr-1`
                                  : `rotate-0 fill-[#212529]  dark:fill-white`
                              } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                              </svg>
                            </span>
                          </button>
                        </h2>

                        <TECollapse
                          show={activeElement === "element1"}
                          className="!mt-0 !rounded-b-none !shadow-none"
                        >
                          <div className="px-5 py-4">
                            <strong>
                              This is the first item's accordion body.
                            </strong>{" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum eu rhoncus purus, vitae tincidunt
                            nibh. Vivamus elementum egestas ligula in varius.
                            Proin ac erat pretium, ultricies leo at, cursus
                            ante. Pellentesque at odio euismod, mattis urna ac,
                            accumsan metus. Nam nisi leo, malesuada vitae
                            pretium et, laoreet at lorem. Curabitur non
                            sollicitudin neque.
                          </div>
                        </TECollapse>
                      </div>
                    </div>
                    <div className="border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                      <h2 className="mb-0" id="headingTwo">
                        <button
                          className={`${
                            activeElement === "element2"
                              ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                              : `transition-none rounded-b-[15px]`
                          } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                          type="button"
                          onClick={() => handleClick("element2")}
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Accordion Item #2
                          <span
                            className={`${
                              activeElement === "element2"
                                ? `rotate-[-180deg] -mr-1`
                                : `rotate-0 fill-[#212529] dark:fill-white`
                            } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-6 w-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </span>
                        </button>
                      </h2>
                      <TECollapse
                        show={activeElement === "element2"}
                        className="!mt-0 !rounded-b-none !shadow-none"
                      >
                        <div className="px-5 py-4">
                          <strong>
                            This is the second item's accordion body.
                          </strong>{" "}
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vestibulum eu rhoncus purus, vitae tincidunt
                          nibh. Vivamus elementum egestas ligula in varius.
                          Proin ac erat pretium, ultricies leo at, cursus ante.
                          Pellentesque at odio euismod, mattis urna ac, accumsan
                          metus. Nam nisi leo, malesuada vitae pretium et,
                          laoreet at lorem. Curabitur non sollicitudin neque.
                        </div>
                      </TECollapse>
                    </div>
                    <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                      <h2 className="accordion-header mb-0" id="headingThree">
                        <button
                          className={`${
                            activeElement === "element3"
                              ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                              : `transition-none rounded-b-[15px]`
                          } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                          type="button"
                          onClick={() => handleClick("element3")}
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Accordion Item #3
                          <span
                            className={`${
                              activeElement === "element3"
                                ? `rotate-[-180deg] -mr-1`
                                : `rotate-0 fill-[#212529] dark:fill-white`
                            } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-6 w-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </span>
                        </button>
                      </h2>
                      <TECollapse
                        show={activeElement === "element3"}
                        className="!mt-0 !shadow-none"
                      >
                        <div className="px-5 py-4">
                          <strong>
                            This is the third item's accordion body.
                          </strong>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vestibulum eu rhoncus purus, vitae tincidunt
                          nibh. Vivamus elementum egestas ligula in varius.
                          Proin ac erat pretium, ultricies leo at, cursus ante.
                          Pellentesque at odio euismod, mattis urna ac, accumsan
                          metus. Nam nisi leo, malesuada vitae pretium et,
                          laoreet at lorem. Curabitur non sollicitudin neque.
                        </div>
                      </TECollapse>
                    </div>
                  </>
                )}
              </div>
            </TEStepperStep>
            <TEStepperStep headText="Step 3" headIcon={"3"}>
              <div>Step 3 content</div>
            </TEStepperStep>
          </TEStepper>
        </div>
      </div>
    </div>
  );
};

export default StepperPage;
