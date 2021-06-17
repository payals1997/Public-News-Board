import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Register from '../Register';
import Login from '../Login'
import Logout from "../Logout/Logout";
import Admin from "../Admin/Admin"
import CreateNews from "../CreateNews/CreateNews";
//import Navbar from "../Navbar";


function Routes() {
    return (
        <Router>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/logout">Logout</Link>
            <Link to="/admin">Admin</Link>
            <Link to="/createNews">createNews</Link>
            <Switch>

                <Route exact path="/admin" component={Admin} />
                <Route exact path="/logout" component={Logout} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/createNews" exact component={CreateNews} />
            </Switch>
        </Router>
    );
}

export default Routes;