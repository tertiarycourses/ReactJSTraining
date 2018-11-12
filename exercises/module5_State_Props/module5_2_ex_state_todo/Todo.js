import React, { Component } from 'react';

class Todo extends Component {
	constructor() {
		super();
		this.state = {
			todoList: [
				"Buy Grocery",
				"Buy Lunch"]
			}
		}
		render() {
			return (
			<div>
				<ol>
					<li>{this.state.todoList[0]}</li>
					<li>{this.state.todoList[1]}</li>
				</ol>
			</div>
				)
			}
		}
export default Todo;