import { combineReducers } from 'redux'
const initialState = {
    name : 'Rian Iregho',
    post: 23,
    following: 50,
    follower: 73,
}

const initialReducer = (state = initialState, action) => {
    return state
}

export default combineReducers({
    initialReducer,
})