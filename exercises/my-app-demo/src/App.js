import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Hello from './Hello' ;
import Welcome from './Welcome';
import Home from './Home';
import Login from './Login';

// class Hello extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello World</h1>
//       </div>
//     )
//   }
// }

// class Welcome extends React.Component {
//   render() {
//     return (
//       <div>
//         <p>Welcome to React JS training</p>
//       </div>
//     )
//   }
// }

class App extends React.Component {
  render() {
    return (
      <Router>

        <div>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/login'}>Login</Link></li>
          </ul>

        <hr/>

        <Switch>
          <Route exact path="/" component = {Home}/>
          <Route exact path="/login" component = {Login}/>
        </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
