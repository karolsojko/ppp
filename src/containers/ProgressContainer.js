import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import List from '../components/List'

class ProgressContainer extends Component {
  render () {
    return (
      <List title="Progress" />
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(null, mapDispatchToProps)(ProgressContainer)
