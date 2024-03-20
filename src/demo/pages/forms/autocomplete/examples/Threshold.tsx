import React, { useState } from "react";
import { TEAutocomplete } from "tw-elements-react";

const defaultData = [
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
];

export default function Threshold(): JSX.Element {
  const [thresholdData, setThresholdData] = useState(defaultData);
  const [open, setOpen] = useState(false);

  const onThresholdSearch = (value: string) =>
    value.length > 1 ? filterAndOpen(value) : setOpen(false);

  const filterAndOpen = (value: string) => {
    setThresholdData(
      defaultData.filter((item) =>
        item.toLowerCase().startsWith(value.toLowerCase())
      )
    );
    !open && setOpen(true);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex justify-center">
      <TEAutocomplete
        data={thresholdData}
        label="Example label"
        className="xl:w-96"
        onSearch={onThresholdSearch}
        open={open}
        onOpen={handleOpen}
        onClose={handleClose}
        placeholder="Type 2 characters to search"
      />
    </div>
  );
}
