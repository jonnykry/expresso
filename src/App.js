import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Expresso</h1>
        </div>
        <p className="App-intro">
          Welcome to the Expresso web application!</p>
          <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default App;
