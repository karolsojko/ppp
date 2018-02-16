import React, { Component } from 'react'
import uuid4 from 'uuid/v4'
import List from '../components/List'
import GoalInput from '../components/GoalInput'

const API_URL = 'test'
const API_KEY = 'test'

class PlansContainer extends Component {
  constructor() {
    super()
    this.state = {
      goals: []
    }
  }
  componentDidMount() {
    fetch(`${API_URL}?TableName=ppp-goals`, {
      headers: {
        'X-Api-Key': API_KEY
      }
    })
    .then(results => results.json().Items)
    .then(goals => this.setState({goals}))
  }
  handleOnSubmit(value) {
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'X-Api-Key': API_KEY
      },
      body: JSON.stringify({
        TableName: 'ppp-goals',
        Item: {
          id: uuid4(),
          name: value
        }
      })
    })
    .then(results => results.json())
    .then(goals => this.setState({goals}))
  }
  render() {
    return (
      <div>
        <List title="Plans" />
        <GoalInput onSubmit={this.handleOnSubmit} />
      </div>
    )
  }
}

export default PlansContainer
