import React from 'react';

function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
      }

function App() {
  return (
    <Welcome name="Sara"/>
  );
}

export default App;
