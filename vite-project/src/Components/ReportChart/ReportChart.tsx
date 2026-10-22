import { useMemo } from "react";
import type { JSX } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import type { ChartOptions } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement);

interface ChartItem {
  label: string;
  total: number;
}

interface ReportChartProps {
  items?: ChartItem[];
}

export function ReportChart({ items = [] }: ReportChartProps): JSX.Element {
  const data = useMemo(
    () => ({
      labels: items.map((item) => item.label),
      datasets: [
        {
          data: items.map((item) => item.total),
          backgroundColor: items.map((_, index) =>
            index % 2 === 0 ? "#ff751d" : "#ffdac0"
          ),
          borderRadius: 4,
          maxBarThickness: 36,
        },
      ],
    }),
    [items]
  );

  const options: ChartOptions<"bar"> = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      layout: { padding: { top: 24 } },
      plugins: {
        legend: { display: false },
        datalabels: {
          anchor: "end",
          align: "top",
          color: "#555555",
          font: { size: 10 },
          formatter: (value: number) => `${value.toLocaleString("uk-UA")} грн`,
        },
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: "#555555", font: { size: 10 } },
        },
        y: {
          beginAtZero: true,
          border: { display: false },
          grid: { color: "#eceff5" },
          ticks: { display: false },
        },
      },
    }),
    []
  );

  return <Bar data={data} options={options} plugins={[ChartDataLabels]} />;
}