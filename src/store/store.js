import{createStore as reduxCreateStore, combineReducers} from 'redux';

import {listReducer} from '../reducers/index'

export default function createStore() {
    return reduxCreateStore(
        combineReducers({
            lists: listReducer
        })
    )
}