import axios from "axios";
import { useEffect, useState } from "react";
//import "./HambergerApp.css";
import Trending from "./trending";

function TrendStatApp() {
  const [TrendingNews, setTrendingNews] = useState([]);
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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    trendStateApi();
  }, []);
  //id="#home"
  return (
    <div>
      <Trending TrendingNews={TrendingNews} />
    </div>
  );
}

export default TrendStatApp;
