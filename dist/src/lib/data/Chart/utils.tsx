import merge, { ArrayMergeOptions } from "deepmerge";
import { useEffect, useRef, useState } from "react";

import type { ChartData, ChartOptions, Chart as Chartjs } from "chart.js";

const useCharts = () => {
  const charts = useRef<any>(null);
  const [chartsLoaded, setChartsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const loadCharts = async () => {
      const {
        Chart: Chartjs,
        ArcElement,
        LineElement,
        BarElement,
        PointElement,
        BarController,
        BubbleController,
        DoughnutController,
        LineController,
        PieController,
        PolarAreaController,
        RadarController,
        ScatterController,
        CategoryScale,
        LinearScale,
        LogarithmicScale,
        RadialLinearScale,
        TimeScale,
        TimeSeriesScale,
        Decimation,
        Filler,
        Legend,
        Title,
        Tooltip,
        SubTitle,
      } = await import("chart.js");

      Chartjs.register(
        ArcElement,
        LineElement,
        BarElement,
        PointElement,
        BarController,
        BubbleController,
        DoughnutController,
        LineController,
        PieController,
        PolarAreaController,
        RadarController,
        ScatterController,
        CategoryScale,
        LinearScale,
        LogarithmicScale,
        RadialLinearScale,
        TimeScale,
        TimeSeriesScale,
        Decimation,
        Filler,
        Legend,
        Title,
        Tooltip,
        SubTitle
      );

      charts.current = Chartjs;

      setChartsLoaded(true);
    };

    loadCharts();
  }, []);

  const getChart = (
    ref: React.Ref<HTMLCanvasElement> | any,
    type:
      | "bar"
      | "line"
      | "pie"
      | "doughnut"
      | "polarArea"
      | "radar"
      | "bubble"
      | "scatter",
    data: ChartData,
    options: ChartOptions,
    plugins?: any[]
  ): Chartjs | undefined => {
    if (ref.current && data && charts.current) {
      return new charts.current(ref.current, { type, data, options, plugins });
    }
  };

  const setupOptions = (
    options: Record<string, any> | undefined,
    type: string,
    defaultOptions: Record<string, any>
  ) => {
    if (!options) {
      options = {};
    }

    const mergeObjects = (
      target: any[],
      source: any[],
      options: ArrayMergeOptions
    ) => {
      const destination = target.slice();

      source.forEach((item: any, index: number) => {
        if (typeof destination[index] === "undefined") {
          destination[index] = options.cloneUnlessOtherwiseSpecified(
            item,
            options
          );
        } else if (options.isMergeableObject(item)) {
          destination[index] = merge(target[index], item, options);
        } else if (target.indexOf(item) === -1) {
          destination.push(item);
        }
      });

      return destination;
    };

    return merge(defaultOptions[type], options, {
      arrayMerge: mergeObjects,
    });
  };

  const updateChart = (
    chart: Chartjs,
    newData: ChartData,
    newOptions: ChartOptions
  ) => {
    chart.options = newOptions;
    chart.data = newData;

    chart.update();
  };

  const getColorMode = (disableDarkMode: boolean, darkMode: string): string => {
    let themeMode = "";

    if (!disableDarkMode) {
      themeMode =
        darkMode === "dark"
          ? "dark"
          : darkMode
          ? "light"
          : localStorage.theme ||
            (document.querySelector("html")?.classList.contains("dark")
              ? "dark"
              : "light");
    }
    return themeMode;
  };

  const getDarkConfig = (
    type: string,
    darkTicksColor: string,
    darkLabelColor: string,
    darkGridLinesColor: string,
    darkBgColor: string
  ) => {
    const xyScale = {
      scales: {
        y: {
          ticks: {
            color: darkTicksColor,
          },
          grid: {
            color: darkGridLinesColor,
          },
        },
        x: {
          ticks: {
            color: darkTicksColor,
          },
          grid: {
            color: darkGridLinesColor,
          },
        },
      },
    };

    const rScale = {
      scales: {
        r: {
          ticks: {
            color: darkTicksColor,
            backdropColor: darkBgColor,
          },
          grid: {
            color: darkGridLinesColor,
          },
          pointLabels: {
            color: darkTicksColor,
          },
        },
      },
    };

    const legendColorDark = {
      plugins: {
        legend: {
          labels: {
            color: darkLabelColor,
          },
        },
      },
    };
    const radials = ["pie", "doughnut", "polarArea", "radar"];

    const scales = !radials.includes(type)
      ? {
          ...xyScale,
          ...legendColorDark,
        }
      : ["radar"].includes(type)
      ? {
          ...rScale,
          ...legendColorDark,
        }
      : ["polarArea"].includes(type)
      ? { ...rScale, borderColor: "#262626", ...legendColorDark }
      : ["pie", "doughnut"].includes(type)
      ? {
          borderColor: "#262626",
          ...legendColorDark,
        }
      : {};

    return setupOptions(scales, type, defaultOptions);
  };

  const defaultOptions = {
    line: {
      elements: {
        line: {
          backgroundColor: "rgba(59, 112, 202, 0.0)",
          borderColor: "rgb(59, 112, 202)",
          borderWidth: 2,
          tension: 0.0,
        },
        point: {
          borderColor: "rgb(59, 112, 202)",
          backgroundColor: "rgb(59, 112, 202)",
        },
      },
      responsive: true,
      plugins: {
        tooltip: {
          intersect: false,
          mode: "index",
        },
        legend: {
          display: true,
          labels: {
            color: "rgb(102,102,102)",
          },
        },
      },
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false,
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)",
          },
        },
        y: {
          stacked: false,
          grid: {
            borderDash: [2],
            drawBorder: false,
            zeroLineColor: "rgba(0,0,0,0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)",
          },
        },
      },
    },
    bar: {
      backgroundColor: "rgb(59, 112, 202)",
      borderWidth: 0,
      responsive: true,
      plugins: {
        tooltip: {
          intersect: false,
          mode: "index",
        },
        legend: {
          display: true,
          labels: {
            color: "rgb(102,102,102)",
          },
        },
      },
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false,
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)",
          },
        },
        y: {
          stacked: true,
          grid: {
            borderDash: [2],
            drawBorder: false,
            zeroLineColor: "rgba(0,0,0,0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)",
          },
        },
      },
    },
    pie: {
      elements: {
        arc: { backgroundColor: "rgb(59, 112, 202)" },
      },
      borderColor: "#fff",
      responsive: true,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "rgb(102,102,102)",
          },
        },
      },
    },
    doughnut: {
      elements: {
        arc: { backgroundColor: "rgb(59, 112, 202)" },
      },
      responsive: true,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "rgb(102,102,102)",
          },
        },
      },
    },
    polarArea: {
      elements: {
        arc: { backgroundColor: "rgba(59, 112, 202, 0.5)" },
      },
      responsive: true,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "rgb(102,102,102)",
          },
        },
      },
    },
    radar: {
      elements: {
        line: {
          backgroundColor: "rgba(59, 112, 202, 0.5)",
          borderColor: "rgb(59, 112, 202)",
          borderWidth: 2,
        },
        point: {
          borderColor: "rgb(59, 112, 202)",
          backgroundColor: "rgb(59, 112, 202)",
        },
      },
      responsive: true,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "rgb(102,102,102)",
          },
        },
      },
    },
    scatter: {
      elements: {
        line: {
          backgroundColor: "rgba(59, 112, 202, 0.5)",
          borderColor: "rgb(59, 112, 202)",
          borderWidth: 2,
          tension: 0.0,
        },
        point: {
          borderColor: "rgb(59, 112, 202)",
          backgroundColor: "rgba(59, 112, 202, 0.5)",
        },
      },
      responsive: true,
      plugins: {
        tooltip: {
          intersect: false,
          mode: "index",
        },
        legend: {
          display: true,
          labels: {
            color: "rgb(102,102,102)",
          },
        },
      },
      datasets: {
        borderColor: "red",
      },
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false,
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)",
          },
        },
        y: {
          stacked: false,
          grid: {
            borderDash: [2],
            drawBorder: false,
            zeroLineColor: "rgba(0,0,0,0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)",
          },
        },
      },
    },
    bubble: {
      elements: {
        point: {
          borderColor: "rgb(59, 112, 202)",
          backgroundColor: "rgba(59, 112, 202, 0.5)",
        },
      },
      responsive: true,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "rgb(102,102,102)",
          },
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)",
          },
        },
        y: {
          grid: {
            borderDash: [2],
            drawBorder: false,
            zeroLineColor: "rgba(0,0,0,0)",
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
          },
          ticks: {
            fontColor: "rgba(0,0,0, 0.5)",
          },
        },
      },
    },
  };

  return {
    defaultOptions,
    setupOptions,
    getChart,
    getColorMode,
    updateChart,
    getDarkConfig,
    chartsLoaded,
  };
};

export { useCharts };
