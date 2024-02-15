import React from "react";
import { TEStepper, TEStepperStep } from "tw-elements-react";

export default function StepperNoEditable() {
  return (
    <TEStepper noEditable>
      <TEStepperStep headText="Step 1" headIcon="1">
        <p className="text-neutral-500 dark:text-neutral-400">
          After changing the active step, the previous steps can't be accessed
          anymore.
        </p>
      </TEStepperStep>
      <TEStepperStep headText="Step 2" headIcon="2">
        <p className="text-neutral-500 dark:text-neutral-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur,
          tempora esse iusto tempore quod, aspernatur incidunt minima magnam,
          quaerat aut vel expedita illum molestias repellendus asperiores id
          suscipit saepe. Maxime.
        </p>
      </TEStepperStep>
      <TEStepperStep headText="Step 3" headIcon="3">
        <p className="text-neutral-500 dark:text-neutral-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quod, voluptate quia, ipsam illum quibusdam dolorum
          voluptatibus laboriosam quae voluptates? Quisquam, voluptatibus
          voluptas. Quisquam, voluptatibus voluptas. Quisquam, voluptatibus
          voluptas.
        </p>
      </TEStepperStep>
    </TEStepper>
  );
}
