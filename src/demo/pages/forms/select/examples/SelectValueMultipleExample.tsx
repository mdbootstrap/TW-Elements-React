import React, { useState } from "react";
import { TESelect } from "tw-elements-react";

export default function SelectValueMultipleExample(): JSX.Element {
  const [selectValue, setSelectValue] = useState([3, 4, 5]);

  const data = [
    { text: "One", value: 1 },
    { text: "Two", value: 2 },
    { text: "Three", value: 3 },
    { text: "Four", value: 4 },
    { text: "Five", value: 5 },
  ];

  return (
    <div className="flex justify-center">
      <div className="relative mb-3 md:w-96 pt-5">
        <TESelect
          data={data}
          multiple
          value={selectValue}
          onValueChange={(e: any) => {
            const newValue = e.map((el: any) => el.value);
            setSelectValue(newValue);
          }}
        />
      </div>
    </div>
  );
}
