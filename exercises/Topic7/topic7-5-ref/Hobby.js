import React from 'react';

export default class Hello extends React.Component {

    constructor() {
        super();
        this.state = {
            hobby: ['Travel']
        }
        this.addHobby = this.addHobby.bind(this)
    }

    showHobby() {
        let a = [];
        for (let i=0;i<this.state.hobby.length;i++) {
            a.push(<li>{this.state.hobby[i]}</li>);
        }
        return a;
    }

    addHobby() {
        let hobby = this.hobbyInput.value;
        this.setState({
            hobby: this.state.hobby.concat([hobby])
        })
    }

    render() {
      return (
        <div>
            <h1> Hello {this.props.name}</h1>
            <input ref={input => this.hobbyInput = input}/><br/>
            <button onClick = {this.addHobby}>Add your hobby</button>
            
            <p>My hobbies are: </p>
            <ul>
                {this.showHobby()}
            </ul>
        </div>
      )
    }
  }
