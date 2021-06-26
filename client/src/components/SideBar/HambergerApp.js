import axios from "axios";
import { useEffect, useState } from "react";
import SwipeableTemporaryDrawer from "./HamburgerDrawer";

function HambergerApp({ catAndCity, setCatAndCity }) {
  const [allCategory, setAllCategory] = useState([]);
  const [allNewsCity, setAllNewsCategory] = useState([]);

  // Here is the code call backend api using axios
  const newsApi = async () => {
    try {
      const myAllCategories = await axios.get(
        `http://localhost:3001/newsBlogs/allCategory`
      );
      myAllCategories.data.map((cat) => {
        setAllCategory((arr) => [...arr, cat.category]);
      });
      const myAllNewsCity = await axios.get(
        `http://localhost:3001/newsBlogs/allNewsCity`
      );
      myAllNewsCity.data.map((cat) => {
        setAllNewsCategory((arr) => [...arr, cat.newsCity]);
      });
    } catch (error) {}
  };
  useEffect(() => {
    newsApi();
  }, []);
  return (
    <div className="HambergerApp">
      <SwipeableTemporaryDrawer
        setCatAndCity={setCatAndCity}
        catAndCity={catAndCity}
        allCategory={allCategory}
        allNewsCity={allNewsCity}
      />
    </div>
  );
}

export default HambergerApp;
