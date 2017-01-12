import React, { Component } from 'react';
import './App.css';
import ItemContainer from './components/ItemContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Expresso</h1>
        </div>
        <p className="App-intro">
          Welcome to the Expresso web application!
        </p>
          <div className="Item-example">
              <ItemContainer />
          </div>
      </div>
    );
  }
}

export default App;
