import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const passedStudents = 85;
  const failedStudents = 15;

  const totalStudents = passedStudents + failedStudents;

  const data = {
    labels: ["Passed", "Failed"],
    datasets: [
      {
        label: "Students",
        data: [passedStudents, failedStudents],
        backgroundColor: [
          "#279AF1", 
          "#ED6A5A", 
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
            const percentage = ((value / totalStudents) * 100).toFixed(1);

            return `${context.label}: ${value} Students (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg mt-6">
      <h2 className="text-lg font-medium mb-5">
        Student Result Analysis
      </h2>

      <Pie data={data} options={options} />

    </div>
  );
};

export default PieChart;