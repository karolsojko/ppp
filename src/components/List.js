import React, { Component } from 'react'

type Props = {
  title: string
}

class List extends Component {
  props: Props

  render() {
    const { title } = this.props

    return (
      <div>
        <h1>{title}</h1>
        <ul>
          <li>Task 1</li>
          <li>Task 2</li>
          <li>Task 3</li>
        </ul>
      </div>
    )
  }

}

export default List
