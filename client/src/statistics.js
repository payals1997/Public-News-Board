//npm i react-chartjs-2 chart.js
//plugin to show data on top of each bar
//npm install chartjs-plugin-datalabels --save
import React from "react";

import { Bar } from "react-chartjs-2";

//import ChartDataLabels from "chartjs-plugin-datalabels";

function Statistics({ TrendingNews, NewsViews }) {
  const state = {
    labels: TrendingNews,
    datasets: [
      {
        label: "Views",
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          //"rgba(196, 196, 196)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          // "rgba(196, 196, 196,1)",
          //"rgba(255, 159, 64, 1)",
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
    /*scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "probability",
          },
        },
      ],
    },*/
    plugins: {
      legend: {
        display: true,
        position: "left",
      },
      /*  datalabels: {
        display: true,
        color: "white",
      },*/

      title: {
        text: "Top 5 Viwed News",
        display: true,
        fontSize: 40,
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
