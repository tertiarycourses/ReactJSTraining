import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

class App extends Component {

  render() {
    return (
      <div >
        <header>
          <h1>To Do List</h1>
        </header>
        <Todo />

      </div>
    );
  }
}

export default App;
