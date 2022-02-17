import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

// called from result page to display Graph for data passed
function BarChart({ chartData }) {
  return <Bar data={chartData} />;
}

export default BarChart;
