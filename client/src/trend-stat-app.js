import axios from "axios";
import { useEffect, useState } from "react";
import Statistics from "./statistics";
import Trending from "./trending";

function TrendStatApp() {
  const [TrendingNews, setTrendingNews] = useState([]);
  /* const [Newsstatistic, setNewsStatistic] = useState({
    labels: [],
    datasets: [
      {
        label: "any name",
        data: [],
      },
    ],
  });*/
  const [NewsViews, setNewsViews] = useState([]);

  /* const state = {
    labels: ["jan", "feb", "mar", "apr", "may"],
    datasets: [
      {
        label: "rainfall",
        backgroundColor: "",
        borderColor: "",
        borderWidth: "",
        data: [65, 45, 123, 42, 43],
      },
    ],
  }; */
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
    <div>
      <Trending TrendingNews={TrendingNews} />
      <Statistics NewsViews={NewsViews} TrendingNews={TrendingNews} />
    </div>
  );
}

export default TrendStatApp;
