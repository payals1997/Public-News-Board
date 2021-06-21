import axios from "axios";
import { useEffect, useState } from "react";
import "./HambergerApp.css";
import HamburgerDrawer from "./HamburgerDrawer";

function HambergerApp({catAndCity, setCatAndCity}) {

  const [allCategory, setAllCategory] = useState([]);
  const [allNewsCity, setAllNewsCategory] = useState([]);


  const newsApi = async () => {
    try {
      const myAllCategories = await axios.get(
        `http://localhost:3001/newsBlogs/allCategory`
      );

      // eslint-disable-next-line array-callback-return
      myAllCategories.data.map((cat) => {
        setAllCategory((arr) => [...arr, cat.category]);
      });

      const myAllNewsCity = await axios.get(
        `http://localhost:3001/newsBlogs/allNewsCity`
      );
      

      myAllNewsCity.data.map((cat) => {
        setAllNewsCategory((arr) => [...arr, cat.newsCity]);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
  }, []);

  
  return (
    <div className="HambergerApp">
      <HamburgerDrawer
        setCatAndCity={setCatAndCity}
        catAndCity={catAndCity}
        allCategory={allCategory}
        allNewsCity={allNewsCity}
      />
    </div>
  );
}

export default HambergerApp;
