import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Progress Plans Problems</h1>
        </header>
        <List title="Plans" />
        <List title="Progress" />
        <List title="Problems" />
      </div>
    );
  }
}

export default App;
