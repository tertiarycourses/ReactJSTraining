import React, { Component } from 'react';
import AddHobby from './AddHobby';
import ShowHobby from './ShowHobby';

class App extends Component {

  constructor() {
    super();
    this.state = {
        hobby: ['Travel']
    }
    this.addHobbyList = this.addHobbyList.bind(this)
  }

  addHobbyList(hobby) {
    this.setState({
      hobby: this.state.hobby.concat([hobby])
    })
  }

  render() {
    return (
      <div>
        <h1>Add Your Hobby Below</h1>
        <AddHobby addFunction={this.addHobbyList}/>

        <h1>Your Hobbies are </h1>
        <ShowHobby hobbylist={this.state.hobby} />

      </div>
    );
  }
}

export default App;
