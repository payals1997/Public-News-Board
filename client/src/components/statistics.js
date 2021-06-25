//npm i react-chartjs-2 chart.js
//plugin to show data on top of each bar
//npm install chartjs-plugin-datalabels --save
import React from "react";
import { Bar } from "react-chartjs-2";

function Statistics({ TrendingNews, NewsViews }) {
  const state = {
    labels: TrendingNews,
    datasets: [
      {
        label: "Views",
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86,0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: "1",
        //this will take array
        // since our NewsViews state is already array so we directly given it.
        data: NewsViews,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "left",
      },
      title: {
        text: "Top 5 News on the basis of views",
        display: true,
        font: { size: 25 },
        padding: {
          top: 30,
          bottom: 30,
        },
      },
    },
  };

  return (
    <div style={{ height: "400px", width: "850px" }}>
      <Bar data={state} options={options}></Bar>
    </div>
  );
}

export default Statistics;
