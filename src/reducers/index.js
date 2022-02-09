const listReducer = (state=[], action) => {
    console.log(state)
    switch (action.type) {
        case 'LIST_ADDED':
            return [...state, action.payload]

        case 'LIST_DELETED':
            // console.log(action.payload)
            state.splice(action.payload, 1)
            // console.log("🥶🧑🏼‍🚀😶‍🌫️"+state)
            return [...state]

        case 'LIST_EDITED':
            return [...state, action.payload]
        
        default:
            return state
    }
}

export default listReducer;



// let arr = [1, 2, 3, 4];
// arr.splice(0, 3);

// const a = arr.splice("start", "delete count");
// const b = arr;

// console.log(a)
// // [1, 2, 3]

// console.log(b);
// // [4]