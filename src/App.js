import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <article>{this.props.children}</article>
      </div>
    );
  }
}

export default App;
