import React, { useRef, useEffect, useState } from "react";
import type { ChartProps } from "./types";
import type { Chart } from "chart.js";
import { useCharts } from "./utils";

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
  const ChartDataLabelsRef = useRef<any>(null);

  const {
    defaultOptions,
    setupOptions,
    getChart,
    getColorMode,
    getDarkConfig,
    updateChart,
    chartsLoaded,
  } = useCharts();

  const [darkModeTheme, setDarkModeTheme] = useState<string | undefined>(
    getColorMode(disableDarkMode || false, darkMode || "")
  );

  const chartInstance = useRef<Chart | undefined>(undefined);
  const chartEl = useRef(null);
  const observer = useRef<MutationObserver | null>(null);

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
    const plugins = datalabels ? [ChartDataLabelsRef.current] : [];
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
  }, [chartReference, type, datalabels, chartsLoaded]);

  useEffect(() => {
    if (chartInstance.current) {
      updateChart(
        chartInstance.current,
        data,
        setupOptions(chartOptions, type, defaultOptions)
      );
    }
  }, [
    options,
    darkOptions,
    chartOptions,
    data,
    chartInstance.current,
    chartsLoaded,
  ]);

  useEffect(() => {
    if (disableDarkMode) {
      return;
    } else if (darkMode) {
      setDarkModeTheme(darkMode);
      return;
    }

    const html = document.querySelector("html");
    if (!html || observer.current !== null) {
      return;
    }

    observer.current = new MutationObserver((mutations) => {
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
    observer.current.observe(html, { attributes: true });
    return () => {
      observer.current?.disconnect();
      observer.current = null;
    };
  }, [disableDarkMode, darkMode]);

  useEffect(() => {
    const loadDataLabels = async () => {
      const ChartDataLabels = await import("chartjs-plugin-datalabels");
      ChartDataLabelsRef.current = ChartDataLabels.default;
    };

    loadDataLabels();
  }, []);

  return (
    <>
      <canvas ref={chartReference} {...props} />
    </>
  );
};

export default TEChart;
