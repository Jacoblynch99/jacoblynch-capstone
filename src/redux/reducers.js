import { combineReducers } from 'redux'

const businesses = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_MAKES':
            return action.value
        case 'REMOVE_ENTRY':
            const makes = [...state]
            makes.splice(action.value, 1)
            return makes
        default:
            return state
    }
}

export default combineReducers({ businesses })
