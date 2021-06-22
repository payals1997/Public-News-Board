import axios from "axios";
import { useEffect, useState } from "react";
import Statistics from "./statistics";
import "./statistics.css";

function TrendStatApp() {
  const [TrendingNews, setTrendingNews] = useState([]);

  const [NewsViews, setNewsViews] = useState([]);
  console.log(process.env);

  // Here we will write code to call backend api using axios
  const trendStateApi = async () => {
    try {
      const myTrending = await axios.get(
        `http://localhost:3001/trendState/trending`
      );

      console.log(myTrending);

      myTrending.data.map((mydata) => {
        setTrendingNews((arr) => [...arr, mydata.title]);
      });

      const myViews = await axios.get(
        `http://localhost:3001/trendState/viewsinfo`
      );

      myViews.data.map((mydata) => {
        setNewsViews((arr) => [...arr, mydata.views]);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    trendStateApi();
  }, []);

  console.log(NewsViews);
  console.log(TrendingNews);
  return (
    <div className="parentStatistics">
      <div className="childStatistics">
        <Statistics NewsViews={NewsViews} TrendingNews={TrendingNews} />
      </div>
    </div>
  );
}

export default TrendStatApp;
