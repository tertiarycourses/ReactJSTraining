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

function App() {
  return (
    <div><Hello /></div>
  );
}

export default App;