import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Register from '../Register';
import Login from '../Login'
import Logout from "../Logout/Logout";
import Admin from "../Admin/Admin"
import Reporter from "../Reporter/Reporter";
import Reader from "../Reader/Reader";




function Routes() {
    return (
        <Router> 
            <Switch>

                <Route exact path="/admin" component={Admin} />
                <Route exact path="/logout" component={Logout} />
                <Route path="/signin" exact component={Login} />
                <Route path="/signup" exact component={Register} />
                <Route path="/reporter" exact component={Reporter} />
                <Route path="/reader" exact component={Reader} />
               

            </Switch>
        </Router>
    );
}

export default Routes;