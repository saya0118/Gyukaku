import React from 'react'
import Input from './AddTodo'
import DeleteButton from './DeleteTodo'
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
                    <button>Edit</button>
                    <DeleteButton index={i}/>
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
