import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Register from '../Register';
import Login from '../Login'
//import Navbar from "../Navbar";


function Routes() {
    return (
        <Router>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
            </Switch>
        </Router>
    );
}

export default Routes;