import React, { Component } from 'react';
import Todo from './Todo';
import TodoList from './TodoList';

class App extends Component {

  constructor() {
		super();
		this.state = {
			todoList: [
				"Buy Groceries",
				"Buy Lunch",
				"Buy Dinner"
			]
    }
    this.addTodoList = this.addTodoList.bind(this)
  }
  
  addTodoList(todo) {
		this.setState({
			todoList: this.state.todoList.concat([todo])
		});
	}
    
  render() {
    return (
      <div>
          <h1 >Add Task</h1>
          <Todo addFunction={this.addTodoList}/>
          <h1 >To Do List</h1>
          <TodoList listItems={this.state.todoList}/>
      </div>
    );
  }
}

export default App;
