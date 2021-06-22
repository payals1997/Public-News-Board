
import ReadMore from './components/NewsBlogs/ReadMore';
import './App.css';
import Dashboard from './Dashboard';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div >
      <Router>
        
        <Switch>
          <Route path="/" exact component={Dashboard}></Route>
          <Route path="/readmore/:id" exact component={ReadMore}></Route>
        </Switch>
      </Router>
    </div>
  ); 
}

export default App;
