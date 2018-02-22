import React, { Component } from 'react'

class List extends Component {
  render() {
    const { title, goals } = this.props

    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {goals && goals.map(goal => (
            <li key={goal.id}>{goal.name}</li>
          ))}
        </ul>
      </div>
    )
  }

}

export default List
