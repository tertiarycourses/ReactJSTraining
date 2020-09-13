import React, { Component } from 'react';

class Todo extends Component {

    constructor() {
        super();
        this.state = {
            todoList : [
                'Buy Grocery', 
                'Watch Movie',
                'Swimming',
                'Running'
            ]
        }
    this.addTodoList = this.addTodoList.bind(this)
    
    }

    addTodoList() {
        let todo = this.todoInput.value;
        this.setState({
            todoList:this.state.todoList.concat([todo])
        })
    }

    render() {
        const itemList = this.state.todoList.map((item)=>
            <li>{item}</li>
            );
        return (
            <div>
                <input ref={input => this.todoInput = input}/>
                <button onClick={this.addTodoList}>Add</button>
                <h1>To Do List:</h1>
                <ol>
                    {itemList}
                </ol>
            </div>
            )
    }
}
export default Todo;