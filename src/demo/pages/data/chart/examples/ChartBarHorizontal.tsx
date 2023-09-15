import React from "react";
import { TEChart } from "tw-elements-react";

export default function ChartBarHorizontal(): JSX.Element {
  return (
    <div className="mx-auto md:w-3/5 overflow-hidden">
      <TEChart
        type="bar"
        data={{
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          datasets: [
            {
              label: "Traffic",
              data: [30, 15, 62, 65, 61, 65, 40],
            },
          ],
        }}
        options={{
          indexAxis: "y",
          scales: {
            x: {
              stacked: true,
              grid: {
                display: true,
                borderDash: [2],
                zeroLineColor: "rgba(0,0,0,0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
              ticks: {
                color: "rgba(0,0,0, 0.5)",
              },
            },
            y: {
              stacked: true,
              grid: {
                display: false,
              },
              ticks: {
                color: "rgba(0,0,0, 0.5)",
              },
            },
          },
        }}
        darkOptions={{
          indexAxis: "y",
          scales: {
            x: {
              stacked: true,
              grid: {
                display: true,
                color: "#555",
                borderDash: [2],
                zeroLineColor: "rgba(0,0,0,0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
              ticks: {
                color: "#fff",
              },
            },
            y: {
              stacked: true,
              grid: {
                display: false,
              },
              ticks: {
                color: "#fff",
              },
            },
          },
        }}
      />
    </div>
  );
}
