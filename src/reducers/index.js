import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import plans from './plans'

export default combineReducers({
    routing: routerReducer,
    plans
})
