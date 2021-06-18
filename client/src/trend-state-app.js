import axios from "axios";
import { useEffect, useState } from "react";
import "./HambergerApp.css";
import HamburgerDrawer from "./HamburgerDrawer";

function HambergerApp() {
  //const [category, setCategory] = useState("General");
  //const [newsCity, setNewsCity] = useState("Meerut");
  const [catAndCity, setCatAndCity] = useState({
    category: "",
    city: "",
  });
  const [allCategory, setAllCategory] = useState([]);
  const [allNewsCity, setAllNewsCategory] = useState([]);
  console.log(process.env);

  // Here we will write code to call backend api using axios
  const newsApi = async () => {
    try {
      const myAllCategories = await axios.get(
        `http://localhost:3001/newsBlogs/allCategory`
      );

      console.log(myAllCategories);
      // eslint-disable-next-line array-callback-return
      myAllCategories.data.map((cat) => {
        setAllCategory((arr) => [...arr, cat.category]);
      });
      console.log(allCategory);
      const myAllNewsCity = await axios.get(
        `http://localhost:3001/newsBlogs/allNewsCity`
      );
      // eslint-disable-next-line array-callback-return
      myAllNewsCity.data.map((cat) => {
        setAllNewsCategory((arr) => [...arr, cat.newsCity]);
      });
    } catch (error) {
      console.log(error);
    }
  };
  console.log(catAndCity);
  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, []);
  //id="#home"
  return (
    <div className="HambergerApp">
      <HamburgerDrawer
        // setCategory={setCategory}
        //setNewsCity={setNewsCity}
        setCatAndCity={setCatAndCity}
        catAndCity={catAndCity}
        allCategory={allCategory}
        allNewsCity={allNewsCity}
      />
    </div>
  );
}

export default HambergerApp;
