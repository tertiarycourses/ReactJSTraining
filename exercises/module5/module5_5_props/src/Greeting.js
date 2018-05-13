import React from 'react';

class Greeting extends React.Component {
    render() {
        return (
            <h2>It is my pleasure, {this.props.greet}</h2>
        )
    }

}

export default Greeting;