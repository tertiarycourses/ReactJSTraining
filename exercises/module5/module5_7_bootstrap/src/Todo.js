import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

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
            tmpList.push(
                <ListGroupItem style={{textAlign:"left"}}>
                    {this.state.todoList[i]}
                </ListGroupItem>
             );
        }
        return tmpList;
    } 


    render() {
        return (
        <div>
            <ListGroup>
                {this.renderTodoList()}
            </ListGroup>
        </div>
         )
     } 
}

export default Todo;