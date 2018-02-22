import uuid4 from 'uuid/v4'

export const ADD_GOAL_TO_PLANS_REQUESTED = 'plans/ADD_GOAL_TO_PLANS_REQUESTED'
export const ADD_GOAL_TO_PLANS = 'plans/ADD_GOAL_TO_PLANS'

const API_URL = 'test'

const initialState = {
    list: [
        { id: 1, name: 'Sample goal' }
    ],
    isAdding: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_GOAL_TO_PLANS_REQUESTED:
            return {
                ...state,
                isAdding: true
            }
        case ADD_GOAL_TO_PLANS:
            return {
                ...state,
                isAdding: !state.isAdding,
                list: action.goals
            }
        default:
            return state
    }
}

export const addGoalToPlans = (value) => {
    return dispatch => {
        dispatch({
            type: ADD_GOAL_TO_PLANS_REQUESTED
        })

        fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify({
                TableName: 'ppp-goals',
                Item: {
                id: uuid4(),
                name: value
                }
            })
        })
        .then(goals => dispatch({
            type: ADD_GOAL_TO_PLANS,
            goals
        }))
    }
}
