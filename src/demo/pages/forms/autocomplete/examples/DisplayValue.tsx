import React, { useState } from "react";
import { TEAutocomplete } from "tw-elements-react";

const defaultAdvanced = [
  {
    title: "One",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
  },
  {
    title: "Two",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
  },
  {
    title: "Three",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
  },
  {
    title: "Four",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
  },
  {
    title: "Five",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
  },
];

export default function DisplayValue(): JSX.Element {
  const [advancedData, setAdvancedData] = useState(defaultAdvanced);

  const onAdvancedSearch = (value: string) =>
    setAdvancedData(
      defaultAdvanced.filter((item) =>
        item.title.toLowerCase().startsWith(value.toLowerCase())
      )
    );

  return (
    <div className="flex justify-center">
      <TEAutocomplete
        data={advancedData}
        label="Example label"
        className="xl:w-96"
        displayValue={(row) => row.title}
        onSearch={onAdvancedSearch}
      />
    </div>
  );
}
