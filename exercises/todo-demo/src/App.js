// import React from 'react';
// import Todo from './Todo';
// import TodoList from './TodoList';

// class App extends React.Component {

//   constructor() {
//     super();
//     this.state = {
//       todoList : [
//         "Buy Groceries",
//         "Buy Dinner"
//       ]
//     }
//     this.addTodoList = this.addTodoList.bind(this)
//   }
  
//   addTodoList(todo) {
//     this.setState( {
//       todoList: this.state.todoList.concat([todo])
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Todo addFunction={this.addTodoList}/>
//         <TodoList listItems = {this.state.todoList}/>
//       </div>
//     );
//   }
// }

// export default App;


import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
      <Router>
        <div>
        <h2>To Do List:</h2>
               <ul>
                  <li><Link to={'/add'}>Add To Do Item</Link></li>
                  <li><Link to={'/'}>Show To Do List</Link></li>                
               </ul>
               <hr />
         <Switch>

              <Route exact path='/' render={ () => (
              <TodoList listItems={this.state.todoList}></TodoList>
              )} />
            
            <Route exact path='/add' render={ () => (
              <Todo addFunction={this.addTodoList}></Todo>
              )} />
          </Switch>
        </div>
    </Router>
      );
    } 
  
}

export default App;
