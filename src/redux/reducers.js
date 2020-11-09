import { combineReducers } from 'redux'

const businesses = (state = [], action) => {
    switch (action.type) {
        case 'GET_BUSINESSES':
            return action.value
        case 'REMOVE_ENTRY':
            const makes = [...state]
            makes.splice(action.value, 1)
            return makes
        default:
            return state
    }
}

const currentUser = (state = [], action) => {
    switch (action.type) {
        case 'GET_USER':
            return action.value
        default:
            return state
    }
}

const quotes = (state = [], action) => {
    switch (action.type) {
        case 'GET_QUOTES':
            return action.value
        default:
            return state
    }
}

export default combineReducers({ businesses, currentUser, quotes })
