import React, { Component } from 'react';

class Todo extends Component {

	constructor(props) {
		super(props);
		this.addTodoList = this.addTodoList.bind(this)
	}

	addTodoList() {
		let todo = this._todoInput.value;
        this.props.addFunction(todo)
    }

	render() {
		return (
		<div>
			<input ref={input => this._todoInput = input}/>
			<button onClick={this.addTodoList}>Add</button>
		</div>
		)
	}

}

export default Todo;
