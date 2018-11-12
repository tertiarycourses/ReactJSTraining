import React, { Component } from 'react';

class TodoList extends Component {

	renderTodoList() {
		let tmpList = [];
		for (let i=0; i<this.props.listItems.length; i++) {
			tmpList.push(<li>{this.props.listItems[i]}</li>);
		}
		return tmpList;
	}

	render() {
		return (
		<ol>
			{this.renderTodoList()}
		</ol>
		)
	}

}
export default TodoList;