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
    
    }


    render() {
        const itemList = this.state.todoList.map((item)=>
            <li>{item}</li>
            );
        return (
            <div>
                <h1>To Do List:</h1>
                <ol>
                    {itemList}
                </ol>
            </div>
            )
    }
}
export default Todo;
