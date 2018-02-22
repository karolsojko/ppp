import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import List from '../components/List'

class ProblemsContainer extends Component {
  render () {
    return (
      <List title="Problems" />
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(null, mapDispatchToProps)(ProblemsContainer)
