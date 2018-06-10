import React from 'react';
import './style.css';

class Welcome extends React.Component {

    constructor() {
        super();
        this.state = {
            course: "React JS Training"
        }
    }
    render() {
      return (
        <div>
          <p>Welcome to {this.props.course}</p>
        </div>
      )
    }
  }

export default Welcome;