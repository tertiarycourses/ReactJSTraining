import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

class App extends Component {
    
  render() {
    return (
      <div>
          <h1 >To Do List - Event Binding</h1>
          <Todo />
      </div>
    );
  }
}

export default App;
