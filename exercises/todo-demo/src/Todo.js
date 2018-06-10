import React from 'react';

class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.addTodoList = this.addTodoList.bind(this)
    }

    addTodoList() {
        let todo = this._todoInput.value;
        this.props.addFunction(todo)
    }
    
    // renderTodoList() {
    //     let tmpList = [];
    //     for (let i=0;i<this.state.todoList.length;i++) {
    //         tmpList.push(<li>{this.state.todoList[i]}</li>);
    //     }
    //     return tmpList;
    // }

    render() {
        return (

            <div>
                <h1>To Do List </h1>
                <input ref={input => this._todoInput = input} />
                <button onClick = {this.addTodoList}>Add</button>
            </div>

        )
    }
}

export default Todo;