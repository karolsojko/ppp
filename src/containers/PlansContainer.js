import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import List from '../components/List'
import GoalInput from '../components/GoalInput'
import { addGoalToPlans } from '../reducers/plans'

class PlansContainer extends Component {
  render() {
    const { addGoalToPlans, isAdding, plans } = this.props

    return (
      <div>
        <List title="Plans" goals={plans} />
        <GoalInput onSubmit={addGoalToPlans} disabled={isAdding} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  plans: state.plans.list,
  isAdding: state.plans.isAdding
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addGoalToPlans
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(PlansContainer)
