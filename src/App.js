import React, { Component } from 'react';
import Desk from './components/Desk'

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Calculator 1.0</h1>
        <Desk />
      </div>
    );
  }
}

export default App;
