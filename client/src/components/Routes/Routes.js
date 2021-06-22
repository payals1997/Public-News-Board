import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Footer />
    </BrowserRouter>
  );
}

export default Routes;
