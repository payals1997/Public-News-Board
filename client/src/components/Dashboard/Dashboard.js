import "../../App.css";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import BlogTableData from "../NewsBlogs/BlogsData";
import Top10newsBlogs from "../Homepg/top10";
import HambergerApp from "../SideBar/HambergerApp";
import Footer from "../Footer/Footer";

const Dashboard = () => {
  const [catAndCity, setCatAndCity] = useState({
    category: "all",
    city: "all",
  });

  return (
    <div className="App" title="data">
      <Navbar />
      <div>
        <HambergerApp
          catAndCity={catAndCity}
          setCatAndCity={setCatAndCity}
        ></HambergerApp>
        <div></div>
      </div>
      <div className="blogDisplay">
        <BlogTableData catAndCity={catAndCity} />
        <div className="top10div">
          <Top10newsBlogs className={"Top10mini"} />
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};
export default Dashboard;
