import type { ChartData, ChartOptions, Chart as Chartjs } from "chart.js";
declare const useCharts: () => {
    defaultOptions: {
        line: {
            elements: {
                line: {
                    backgroundColor: string;
                    borderColor: string;
                    borderWidth: number;
                    tension: number;
                };
                point: {
                    borderColor: string;
                    backgroundColor: string;
                };
            };
            responsive: boolean;
            plugins: {
                tooltip: {
                    intersect: boolean;
                    mode: string;
                };
                legend: {
                    display: boolean;
                    labels: {
                        color: string;
                    };
                };
            };
            scales: {
                x: {
                    stacked: boolean;
                    grid: {
                        display: boolean;
                    };
                    ticks: {
                        fontColor: string;
                    };
                };
                y: {
                    stacked: boolean;
                    grid: {
                        borderDash: number[];
                        drawBorder: boolean;
                        zeroLineColor: string;
                        zeroLineBorderDash: number[];
                        zeroLineBorderDashOffset: number[];
                    };
                    ticks: {
                        fontColor: string;
                    };
                };
            };
        };
        bar: {
            backgroundColor: string;
            borderWidth: number;
            responsive: boolean;
            plugins: {
                tooltip: {
                    intersect: boolean;
                    mode: string;
                };
                legend: {
                    display: boolean;
                    labels: {
                        color: string;
                    };
                };
            };
            scales: {
                x: {
                    stacked: boolean;
                    grid: {
                        display: boolean;
                    };
                    ticks: {
                        fontColor: string;
                    };
                };
                y: {
                    stacked: boolean;
                    grid: {
                        borderDash: number[];
                        drawBorder: boolean;
                        zeroLineColor: string;
                        zeroLineBorderDash: number[];
                        zeroLineBorderDashOffset: number[];
                    };
                    ticks: {
                        fontColor: string;
                    };
                };
            };
        };
        pie: {
            elements: {
                arc: {
                    backgroundColor: string;
                };
            };
            borderColor: string;
            responsive: boolean;
            plugins: {
                legend: {
                    display: boolean;
                    labels: {
                        color: string;
                    };
                };
            };
        };
        doughnut: {
            elements: {
                arc: {
                    backgroundColor: string;
                };
            };
            responsive: boolean;
            plugins: {
                legend: {
                    display: boolean;
                    labels: {
                        color: string;
                    };
                };
            };
        };
        polarArea: {
            elements: {
                arc: {
                    backgroundColor: string;
                };
            };
            responsive: boolean;
            plugins: {
                legend: {
                    display: boolean;
                    labels: {
                        color: string;
                    };
                };
            };
        };
        radar: {
            elements: {
                line: {
                    backgroundColor: string;
                    borderColor: string;
                    borderWidth: number;
                };
                point: {
                    borderColor: string;
                    backgroundColor: string;
                };
            };
            responsive: boolean;
            plugins: {
                legend: {
                    display: boolean;
                    labels: {
                        color: string;
                    };
                };
            };
        };
        scatter: {
            elements: {
                line: {
                    backgroundColor: string;
                    borderColor: string;
                    borderWidth: number;
                    tension: number;
                };
                point: {
                    borderColor: string;
                    backgroundColor: string;
                };
            };
            responsive: boolean;
            plugins: {
                tooltip: {
                    intersect: boolean;
                    mode: string;
                };
                legend: {
                    display: boolean;
                    labels: {
                        color: string;
                    };
                };
            };
            datasets: {
                borderColor: string;
            };
            scales: {
                x: {
                    stacked: boolean;
                    grid: {
                        display: boolean;
                    };
                    ticks: {
                        fontColor: string;
                    };
                };
                y: {
                    stacked: boolean;
                    grid: {
                        borderDash: number[];
                        drawBorder: boolean;
                        zeroLineColor: string;
                        zeroLineBorderDash: number[];
                        zeroLineBorderDashOffset: number[];
                    };
                    ticks: {
                        fontColor: string;
                    };
                };
            };
        };
        bubble: {
            elements: {
                point: {
                    borderColor: string;
                    backgroundColor: string;
                };
            };
            responsive: boolean;
            plugins: {
                legend: {
                    display: boolean;
                    labels: {
                        color: string;
                    };
                };
            };
            scales: {
                x: {
                    grid: {
                        display: boolean;
                    };
                    ticks: {
                        fontColor: string;
                    };
                };
                y: {
                    grid: {
                        borderDash: number[];
                        drawBorder: boolean;
                        zeroLineColor: string;
                        zeroLineBorderDash: number[];
                        zeroLineBorderDashOffset: number[];
                    };
                    ticks: {
                        fontColor: string;
                    };
                };
            };
        };
    };
    setupOptions: (options: Record<string, any> | undefined, type: string, defaultOptions: Record<string, any>) => {
        [x: string]: any;
    };
    getChart: (ref: React.Ref<HTMLCanvasElement> | any, type: "bar" | "line" | "pie" | "doughnut" | "polarArea" | "radar" | "bubble" | "scatter", data: ChartData, options: ChartOptions, plugins?: any[]) => Chartjs | undefined;
    getColorMode: (disableDarkMode: boolean, darkMode: string) => string;
    updateChart: (chart: Chartjs, newData: ChartData, newOptions: ChartOptions) => void;
    getDarkConfig: (type: string, darkTicksColor: string, darkLabelColor: string, darkGridLinesColor: string, darkBgColor: string) => {
        [x: string]: any;
    };
    chartsLoaded: boolean;
};
export { useCharts };
