import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Register from '../Register/Register';
import Login from '../Login'
import Logout from "../Logout/Logout";


function Routes() {
    return (
        <Router> 
            <Switch>
                <Route path="/logout" component={Logout} />
                <Route path="/signin" exact component={Login} />
                <Route path="/signup" exact component={Register} />
            </Switch>
        </Router>
    );
}

export default Routes;

