import React from "react";
import { TEChart } from "tw-elements-react";

export default function ChartBarDarkModeOptions(): JSX.Element {
  return (
    <div className="mx-auto md:w-3/5 overflow-hidden">
      <TEChart
        type="bar"
        data={{
          labels: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          datasets: [
            {
              label: "Traffic",
              data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
            },
          ],
        }}
        darkOptions={{
          scales: {
            y: {
              ticks: {
                color: "rgb(100,50,200)",
              },
              grid: {
                display: false,
              },
            },
            x: {
              ticks: {
                color: "yellow",
              },
            },
          },
          plugins: {
            legend: {
              labels: {
                color: "green",
              },
            },
          },
        }}
      />
    </div>
  );
}
