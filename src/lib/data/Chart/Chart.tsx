/*
--------------------------------------------------------------------------
Tailwind Elements React is an open-source UI kit of advanced components for TailwindCSS.
Copyright © 2023 MDBootstrap.com

Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
--------------------------------------------------------------------------
*/

import React, { useRef, useEffect, useState } from "react";
import type { ChartProps } from "./types";
import {
  defaultOptions,
  setupOptions,
  getChart,
  getColorMode,
  getDarkConfig,
  updateChart,
} from "./utils";
import ChartDataLabels from "chartjs-plugin-datalabels";

const TEChart: React.FC<ChartProps> = ({
  type,
  data,
  options,
  darkOptions,
  chartRef,
  datalabels,
  disableDarkMode,
  darkMode,
  darkTicksColor = "#fff",
  darkLabelColor = "#fff",
  darkGridLinesColor = "#555",
  darkBgColor = "#262626",
  ...props
}) => {
  const [darkModeTheme, setDarkModeTheme] = useState<string | undefined>(
    getColorMode(disableDarkMode, darkMode)
  );

  const chartInstance = useRef(null);
  const chartEl = useRef(null);

  const chartReference = chartRef ? chartRef : chartEl;
  const defaultOptionsDark = getDarkConfig(
    type,
    darkTicksColor,
    darkLabelColor,
    darkGridLinesColor,
    darkBgColor
  );
  const chartOptions =
    darkModeTheme === "dark"
      ? { ...defaultOptionsDark, ...darkOptions }
      : options;

  useEffect(() => {
    const plugins = datalabels ? [ChartDataLabels] : [];
    const chart = getChart(
      chartReference,
      type,
      data,
      setupOptions(chartOptions, type, defaultOptions),
      plugins
    );
    chartInstance.current = chart;
    return () => {
      chart?.destroy();
    };
  }, [chartReference, type, datalabels]);

  useEffect(() => {
    updateChart(
      chartInstance.current,
      data,
      setupOptions(chartOptions, type, defaultOptions)
    );
  }, [options, darkOptions, chartOptions, data]);

  useEffect(() => {
    if (disableDarkMode || darkMode) {
      setDarkModeTheme(darkMode);
      return;
    }
    const html = document.querySelector("html");
    if (!html) return;
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.attributeName === "class" &&
          html.classList.contains("dark")
        ) {
          setDarkModeTheme("dark");
        } else {
          setDarkModeTheme("light");
        }
      });
    });
    observer.observe(html, { attributes: true });
    return () => {
      observer.disconnect();
    };
  }, [disableDarkMode, darkMode]);

  return (
    <>
      <canvas ref={chartReference} {...props} />
    </>
  );
};

export default TEChart;
