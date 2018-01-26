import React, { Component } from 'react'
import { Link } from "react-router-dom"
import logo from '../logo.svg'

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          <li><Link to="/">Plans</Link></li>
          <li><Link to="/progress">Progress</Link></li>
          <li><Link to="/problems">Problems</Link></li>
        </ul>
      </header>
    )
  }
}

export default Header
