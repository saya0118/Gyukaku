export const WORD_CHANGED = 'WORD_CHANGED'
export const Input = () => {
    return {
        type: 'WORD_CHANGED',
        payload: ''
    }
}

export const LIST_ADDED = 'LIST_ADDED'
export const Add = () => {
    return {
        type: 'LIST_ADDED',
        payload: []
    }
}
