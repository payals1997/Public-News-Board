import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "../Navbar";
import AddNews from "../AddNews"


function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <AddNews />
    </BrowserRouter>
  );
}

export default Routes;
