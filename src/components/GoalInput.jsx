import React, { Component } from 'react'

class GoalInput extends Component {
    constructor() {
        super()
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }
    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.props.onSubmit(e.target.value)
            e.target.value = null
        }
    }
    render() {
        return (
            <input type="text" placeholder="Your goal" onKeyPress={this.handleKeyPress} />
        )
    }
}

export default GoalInput