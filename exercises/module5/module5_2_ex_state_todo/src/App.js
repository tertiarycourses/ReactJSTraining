import React, { Component } from 'react';
import Todo from './Todo';

class App extends Component {    
  render() {
    return (
      <div>
        <h1 >To Do List</h1>
        <Todo />
      </div>
    );
  }
}

export default App;
