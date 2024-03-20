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

export default function CustomContent(): JSX.Element {
  const [contentData, setContentData] = useState(defaultData);

  const onContentSearch = (value: string) =>
    setContentData(
      defaultData.filter((item) =>
        item.toLowerCase().startsWith(value.toLowerCase())
      )
    );

  return (
    <div className="flex justify-center">
      <TEAutocomplete
        data={contentData}
        label="Example label"
        className="xl:w-96"
        onSearch={onContentSearch}
        customContent={
          <div className="px-4 py-1.5">
            Search results: {contentData.length}
          </div>
        }
      />
    </div>
  );
}
