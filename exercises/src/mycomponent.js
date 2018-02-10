import React, { Component } from 'react';

export default class MyComponent extends Component {
  render() {
    return (
      <section>
        <h1>My Component</h1>
        <p>Hello {this.props.greet}</p>
      </section>
    );
  }
}
