import React, { Component } from 'react';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            todoList: [
                "Buy Groceries",
                "Buy Lunch",
                "Buy Dinner",
                "Book Appointments"
            ]
        }
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
        <ol>
        {this.renderTodoList()}
        </ol>
        </div>
        )
    }
}

export default Todo;