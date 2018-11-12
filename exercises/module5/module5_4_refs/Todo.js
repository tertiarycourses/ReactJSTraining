import React, { Component } from 'react';

class Todo extends Component {
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

	addTodoList() {
		let todo = this._todoInput.value;
		this.setState({
			todoList: this.state.todoList.concat([todo])
		});
	}
	renderTodoList() {
		let tmpList = [];
		for (let i=0; i<this.state.todoList.length; i++) {
			tmpList.push(<li>{this.state.todoList[i]}</li>);
		}
		return tmpList;
	}
	render() {
		return (
		<div>
			<input ref={input => this._todoInput = input}/>
			<button onClick={this.addTodoList}>Add</button>
				<ol>
					{this.renderTodoList()}
				</ol>
		</div>
		)
	}

}
export default Todo;