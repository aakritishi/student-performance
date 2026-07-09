import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const FeaturesChart = () => {
  const assignment = 30;
  const attendance = 20;
  const examresult= 40;
  const behavior = 10;

  const total = assignment + attendance + examresult + behavior;

  const data = {
    labels: ["assignment", "attendance", "examresult", "behavior"],
    datasets: [
      {
        label: "Features",
        data: [assignment, attendance, examresult, behavior],
        backgroundColor: [
          "#279AF1", 
          "#ED6A5A", 
          "#90BEDE",
          "#F39B6D"
        ],
        borderColor: "#ffffff",
        borderWidth: 2,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.raw;
            const percentage = ((value / total) * 100).toFixed(1);

            return `${context.label}: ${value} features (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg mt-6">
      <h2 className="text-lg font-medium mb-5 text-center">
        Features Affecting Result
      </h2>

      <Pie data={data} options={options} />

    </div>
  );
};

export default FeaturesChart;