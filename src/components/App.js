import React from 'react'
import Input from './AddTodo'
import {connect} from 'react-redux'

const App = (props) => {
    // console.log(props);
    return (
        <div>
            <h1>Todo List</h1>
            <Input/>
            <ul>
                {props.list.map((item, i) =>
                <li key={i}>
                    {item}
                    <button>Update</button>
                    <button>Edit</button>
                    <button>Delete</button>
                </li>
                )}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    // console.log(state);
    return {list: state.lists}
}
export default connect(mapStateToProps)(App)
