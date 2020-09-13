import React from 'react';

export default class ShowHobby extends React.Component {

    showHobby() {
        let a = [];
        for (let i=0;i<this.props.hobbylist.length;i++) {
            a.push(<li>{this.props.hobbylist[i]}</li>);
        }
        return a;
    }

    render() {
      return (
        <div>
            <p>My hobbies are: </p>
            <ul>
                {this.showHobby()}
            </ul>
        </div>
      )
    }