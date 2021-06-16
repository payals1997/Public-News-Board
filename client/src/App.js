import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import HamburgerDrawer from "./HamburgerDrawer";

function App() {
  const [category, setCategory] = useState("General");
  const [newsCity, setNewsCity] = useState("Meerut");
  const [allCategory, setAllCategory] = useState([]);
  const [allNewsCity, setAllNewsCategory] = useState([]);
  console.log(process.env);
  var myvar;
  // Here we will write code to call backend api using axios
  const newsApi = async () => {
    try {
      const myAllCategories = await axios.get(
        `http://localhost:3001/newsBlogs/allCategory`
      );
      myvar = myAllCategories;
      console.log(myAllCategories);
      myAllCategories.data.map((cat) => {
        setAllCategory((arr) => [...arr, cat.category]);
      });
      console.log(allCategory);
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
  console.log(myvar);
  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [category, newsCity]);

  return (
    <div className="App" id="#home">
      <HamburgerDrawer
        setCategory={setCategory}
        setNewsCity={setNewsCity}
        allCategory={allCategory}
        allNewsCity={allNewsCity}
      />
    </div>
  );
}

export default App;
