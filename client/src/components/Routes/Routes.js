import ReadMore from "../NewsBlogs/ReadMore";
import "../../App.css";
import Dashboard from "../Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Homepg/Home";
import Register from "../Register";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import Statistics from "../Statistics";
import Navbar from "../Navbar";
import { useState } from "react";

const Routing = () => {
  // let [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/signup" exact component={Register}></Route>
        <Route path="/signin"><Login /></Route>
        
          
          <Route path="/dashboard" exact component={Dashboard}></Route>
          <Route path="/statistics" exact component={Statistics}></Route>
        

        <Route path="/readmore/:id" exact component={ReadMore}></Route>
        <Route path="/logout"><Logout /></Route>
      </Switch>
    </Router>
  );
};

export default Routing;
