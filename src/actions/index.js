export const LIST_ADDED = 'LIST_ADDED'
export const Add = (word) => {
    return {
        type: 'LIST_ADDED',
        payload: word
    }
}

export const LIST_DELETED = 'LIST_DELETED'
export const Delete = (index) => {
    return {
        type: 'LIST_DELETED',
        payload: index
    }
}

export const LIST_EDITED = 'LIST_EDITED'
export const Edit = (editText, index) => {
    return {
        type: 'LIST_EDITED',
        payload: {
            value: editText,
            index: index
        }
    }
}
