import HelloWorld from './index'
import React from 'react'
import {render} from 'react-dom'

const CRUD = () => {
    ReactDOM.render (
        <HelloWorld/>,
        document.getElementById('root')
    )
}