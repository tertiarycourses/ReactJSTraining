import React, { Component } from 'react';

class App extends Component {

  constructor() {
		super();
		this.state = {
				Name: "Alfred",
				Country: "Singapore"
			}
    }
    
  render() {
    return (
      <div >
          <h1>Name : {this.state.Name}</h1>
          <h1>Country: {this.state.Country}</h1>
      </div>
    );
  }
}

export default App;
