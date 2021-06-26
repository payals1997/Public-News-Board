import axios from "axios";
import { useEffect, useState } from "react";
import Statistics from "./statistics";
import "./statistics.css";

function StatisticsApp() {
  const [TrendingNews, setTrendingNews] = useState([]);

  const [NewsViews, setNewsViews] = useState([]);
  console.log(process.env);

  // Here we will write code to call backend api using axios
  const trendStateApi = async () => {
    try {
      const myTrending = await axios.get(
        `http://localhost:3001/trendState/trending`
      );
      myTrending.data.map((mydata) => {
        setTrendingNews((arr) => [...arr, mydata.title]);
      });

      const myViews = await axios.get(
        `http://localhost:3001/trendState/viewsinfo`
      );

      myViews.data.map((mydata) => {
        setNewsViews((arr) => [...arr, mydata.views]);
      });
    } catch (error) {}
  };

  useEffect(() => {
    trendStateApi();
  }, []);
  return (
    <div>
      <Statistics NewsViews={NewsViews} TrendingNews={TrendingNews} />
    </div>
  );
}

export default StatisticsApp;
