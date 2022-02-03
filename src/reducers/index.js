const listReducer = (state=[], action) => {
    switch (action.type) {
        case 'LIST_ADDED':
            return [...state, action.payload]
        
        default:
            return state
    }
}

export default listReducer;