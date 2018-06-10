import React from 'react';
import './style.css';

class Hello extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "Alfred"
        }
    }
    render() {
      return (
        <div>
          <h1>Hello {this.state.name}</h1>
        </div>
      )
    }
  }

export default Hello;