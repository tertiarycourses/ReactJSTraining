import React, { Component } from 'react';
import Greeting from './Greeting'

class App extends Component {
   constructor() {
      super();
      this.state = {
         world: "World",
         course: "Learning React JS "
      }
   }
   render() {
      return (
         <div>
            <Hello who = {this.state.world}/>
            <Welcome course = {this.state.course} greet="Alfred" />
         </div>
      );
   }
}
class Hello extends Component {
   render() {
      return (
         <div>
            <h1>Hello {this.props.who}</h1>
         </div>
      );
   }
}
class Welcome extends Component {
   render() {
      return (
         <div>
            <h1> Welcome to {this.props.course}</h1> 
            <Greeting greet={this.props.greet}/>
         </div>
      );
   }
}
export default App;