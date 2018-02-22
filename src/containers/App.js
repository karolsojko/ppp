import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Header from '../components/Header'
import PlansContainer from './PlansContainer'
import ProblemsContainer from './ProblemsContainer'
import ProgressContainer from './ProgressContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <article>{this.props.children}</article>

        <main>
          <Route exact path="/" component={PlansContainer} />
          <Route exact path="/progress" component={ProgressContainer} />
          <Route exact path="/problems" component={ProblemsContainer} />
        </main>
      </div>
    )
  }
}

export default App
