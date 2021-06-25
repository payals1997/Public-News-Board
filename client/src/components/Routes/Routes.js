import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import './Routes.styles.scss'

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="body">
      <Footer />
      </div>
      
    </BrowserRouter>
  );
}

export default Routes;
