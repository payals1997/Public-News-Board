import ReadMore from "../NewsBlogs/ReadMore"
import '../../App.css';
import Dashboard from "../Dashboard/Dashboard";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "../Homepg/Home"
import Register from "../Register";
import Login from "../Login/Login";

const Routing = ()=>{
    return(
<Router>
        
<Switch>
<Route path="/" exact component={Home}></Route>
<Route path="/signup" exact component={Register}></Route>
<Route path="/signin" exact component={Login}></Route>
  <Route path="/dashboard" exact component={Dashboard}></Route>
  <Route path="/readmore/:id" exact component={ReadMore}></Route>
</Switch>
</Router>

    )
}

export default Routing;