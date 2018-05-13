import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

class App extends Component {

  constructor() {
		super();
		this.state = {
				Name: "Alfred",
				Country: "Singapore"
			}
    }
    
  render() {
    return (
      <div className="App">
        <header className="App-title">
          <h1>Name : {this.state.Name}</h1>
          <h1>Country: {this.state.Country}</h1>
          <h1 >To Do List</h1>
        </header>
        <Todo />

      </div>
    );
  }
}

export default App;
