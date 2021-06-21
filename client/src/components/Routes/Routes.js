import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReadMore from "../NewsBlogs/ReadMore";
import Dashboard from "../../Dashboard";

function Routes() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={Dashboard}></Route>
          <Route path="/readmore/:id" exact component={ReadMore}></Route>
        </Switch>
      </Router>
  );
}

export default Routes;
