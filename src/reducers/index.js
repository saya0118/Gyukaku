import * as Actions from '../actions/index'
import initialState from '../store/initialState'

export default listReducer = (state=initialState, action) => {
    switch (action.type) {
        case Actions.WORD_CHANGED:
            return {
                ...state,
                ...action.payload
            }

        case Actions.LIST_ADDED:
            return {
                ...state,
                list: [...state.list, action.payload]
            }

            default:
            return state
        }
        
    }