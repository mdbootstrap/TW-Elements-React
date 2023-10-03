import React from "react";
import { TEChart } from "tw-elements-react";

export default function ChartBubble(): JSX.Element {
  return (
    <div className="mx-auto md:w-3/5 overflow-hidden">
      <TEChart
        type="bubble"
        data={{
          datasets: [
            {
              label: "John",
              data: [
                {
                  x: 3,
                  y: 7,
                  r: 10,
                },
              ],
            },
            {
              label: "Peter",
              data: [
                {
                  x: 5,
                  y: 7,
                  r: 10,
                },
              ],
              backgroundColor: "rgba(66, 133, 244, 0.2)",
            },
            {
              label: "Donald",
              data: [
                {
                  x: 7,
                  y: 7,
                  r: 10,
                },
              ],
              backgroundColor: "rgba(66, 133, 244, 0.8)",
            },
          ],
        }}
      />
    </div>
  );
}
