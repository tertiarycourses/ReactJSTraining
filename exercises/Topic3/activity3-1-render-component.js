import React from 'react';

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to React JS Training</h1>
        <p>Components are added successfully </p>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello/>
        <Welcome/>
      </div>
    );
  }
}

export default App;