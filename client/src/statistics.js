//npm i react-chartjs-2 chart.js
import React from "react";
import { Bar } from "react-chartjs-2";

function Statistics({ TrendingNews, NewsViews }) {
  const state = {
    labels: [TrendingNews],
    datasets: [
      {
        label: "News Title",
        backgroundColor: "",
        borderColor: "",
        borderWidth: "",
        data: [NewsViews],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },

      title: {
        text: "Top 5 viwed News",
        display: true,
        fontSize: 20,
      },
    },
  };

  return (
    <div>
      <Bar data={state} options={options}></Bar>
    </div>
  );
}

export default Statistics;

/*return (
    <div>
      <h1>hello </h1>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={statisticsData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="title"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Statistics;*/
