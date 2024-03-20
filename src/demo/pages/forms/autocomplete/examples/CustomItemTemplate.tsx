import React, { useState } from "react";
import { TEAutocomplete } from "tw-elements-react";

const customDefData = [
  { title: "One", subtitle: "Secondary text" },
  { title: "Two", subtitle: "Secondary text" },
  { title: "Three", subtitle: "Secondary text" },
  { title: "Four", subtitle: "Secondary text" },
  { title: "Five", subtitle: "Secondary text" },
  { title: "Six", subtitle: "Secondary text" },
];

export default function CustomItemTemplate(): JSX.Element {
  const [customData, setCustomData] = useState(customDefData);

  const onCustomSearch = (value: string) =>
    setCustomData(
      customDefData.filter((item) =>
        item.title.toLowerCase().startsWith(value.toLowerCase())
      )
    );

  return (
    <div className="flex justify-center">
      <TEAutocomplete
        data={customData}
        label="Example label"
        className="xl:w-96"
        listHeight="295px"
        displayValue={(row) => row.title}
        onSearch={onCustomSearch}
        itemContent={(result) => (
          <div className="flex flex-col">
            <div className="font-medium">{result.title}</div>
            <div className="text-[0.9rem]">{result.subtitle}</div>
          </div>
        )}
      />
    </div>
  );
}
