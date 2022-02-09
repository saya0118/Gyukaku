const listReducer = (state=[], action) => {
    console.log(state)
    switch (action.type) {
        case 'LIST_ADDED':
            return [...state, action.payload]

        case 'LIST_DELETED':
            console.log(action.payload)
            return　[...state.splice(action.payload, 1)]

        // case 'LIST_EDITED':
        //     return [...state, action.payload]
        
        default:
            return state
    }
}

export default listReducer;