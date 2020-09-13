import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';


class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <li><Link to = '/'>Home</Link></li>
          <li><Link to = '/aboutus'>About Us</Link> </li>

          <hr/>
          
          <Switch>
            <Route exact path='/' component = {Home}/>
            <Route exact path='/aboutus' component = {AboutUs}/>
          </Switch>


        </div>
    </Router>
    );
  }
}

export default App;
