import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Register from '../Register';
import Login from '../Login'
import Logout from "../Logout/Logout";
import Admin from "../Admin/Admin"
import CreateNews from "../CreateNews/CreateNews";
import Reporter from "../Reporter/Reporter";
import AllUser from "../AllUser/AllUser";

//import Navbar from "../Navbar";


function Routes() {
    return (
        <Router>
            <Link to="/signin">Login</Link>
            <Link to="/signup">Register</Link>
            <Link to="/logout">Logout</Link>
            <Link to="/admin">Admin</Link>
            <Link to="/createNews">createNews</Link>
            <Link to="/allUser">AllUser</Link>

          
            <Switch>

                <Route exact path="/admin" component={Admin} />
                <Route exact path="/logout" component={Logout} />
                <Route path="/signin" exact component={Login} />
                <Route path="/signup" exact component={Register} />
                <Route path="/createNews" exact component={CreateNews} />
                <Route path="/reporter" exact component={Reporter} />
                <Route path="/allUser" exact component={AllUser} />

            </Switch>
        </Router>
    );
}

export default Routes;