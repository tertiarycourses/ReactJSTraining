import React from 'react';

export default class AddHobby extends React.Component {

    constructor(props) {
        super(props);
        this.addHobby = this.addHobby.bind(this)
    }

    addHobby() {
        let hobby = this._hobbyInput.value;
        this.props.addFunction(hobby)
    }

    render() {
      return (
        <div >
            <input ref={input => this._hobbyInput = input}/><br/>
            <button onClick = {this.addHobby}>Add your hobby</button>
        </div>
      )
    }