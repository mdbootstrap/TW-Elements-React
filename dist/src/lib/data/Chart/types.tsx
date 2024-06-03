import { BaseComponent } from "../../types/baseComponent";
import { ChartData } from "chart.js";

interface ChartProps extends BaseComponent {
  type:
    | "bar"
    | "line"
    | "pie"
    | "doughnut"
    | "polarArea"
    | "radar"
    | "bubble"
    | "scatter";
  options?: Record<string, any> | undefined;
  darkOptions?: Record<string, any> | undefined;
  disableDarkMode?: boolean | undefined;
  darkMode?: "dark" | "light" | null;
  chartRef?: React.Ref<HTMLCanvasElement> | any;
  datalabels?: boolean;
  data: ChartData;
  darkTicksColor?: string;
  darkLabelColor?: string;
  darkGridLinesColor?: string;
  darkBgColor?: string;
}

export { ChartProps };
