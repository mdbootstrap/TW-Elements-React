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

export default function AutoSelect(): JSX.Element {
  const [data, setData] = useState(defaultData);
  const [value, setValue] = useState("");

  const onSearch = (value: string) =>
    setData(
      defaultData.filter((item) =>
        item.toLowerCase().startsWith(value.toLowerCase())
      )
    );

  return (
    <div className="flex justify-center">
      <TEAutocomplete
        data={data}
        label="Example label"
        className="xl:w-96"
        autoSelect
        onSearch={onSearch}
        value={value}
        onChange={(value) => setValue(value)}
      />
    </div>
  );
}
