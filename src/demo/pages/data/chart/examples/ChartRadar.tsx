import React from "react";
import { TEChart } from "tw-elements-react";

export default function ChartRadar(): JSX.Element {
  return (
    <div className="mx-auto md:w-3/5 overflow-hidden">
      <TEChart
        type="radar"
        data={{
          labels: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday ",
          ],
          datasets: [
            {
              label: "Traffic",
              data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
            },
          ],
        }}
      />
    </div>
  );
}
