import React, { useState } from "react";
import { TEAutocomplete } from "tw-elements-react";

export default function AsynchronousSearch(): JSX.Element {
  const [asyncData, setAsyncData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onAsyncSearch = async (query: string) => {
    const url = `https://swapi.py4e.com/api/people/?search=${encodeURI(query)}`;

    setIsLoading(true);

    const response = await fetch(url);
    const data = await response.json();

    await setIsLoading(false);

    setAsyncData(data.results);
  };

  return (
    <div className="flex justify-center">
      <TEAutocomplete
        data={asyncData}
        isLoading={isLoading}
        label="Example label"
        className="xl:w-96"
        displayValue={(row) => row.name}
        onSearch={onAsyncSearch}
      />
    </div>
  );
}
