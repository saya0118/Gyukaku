import React, {useState} from 'react'
import Input from './AddTodo'
import DeleteButton from './DeleteTodo'
import EditButton from './EditTodo'
import {connect} from 'react-redux'

import {Edit} from '../actions/index';

const App = (props) => {

    const [ editIndex, setEditIndex ] = useState(null);
    const [ editText, setEditText ] = useState("");
    // console.log(props);

    const onHandleTextChange = (e) => {
        setEditText(e.target.value)
    }

    const setDefaultText = (index) => {
        const label = props.list[index]
        setEditText(label);
    }

    const updateText = (index) => {
        props.Edit(editText, index);
    }

    return (
        <div>
            <h1>Todo List</h1>
            <Input/>
            <ul>
                {props.list.map((item, i) =>
                <li id="list-id" key={i}>
                    {item}
                    <EditButton setEditIndex={setEditIndex} setDefaultText={setDefaultText} updateText={updateText} index={i} item={item}/>
                    <DeleteButton index={i}/>
                    {editIndex === i && <input type="text" value={editText} onChange={onHandleTextChange}/>}
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
export default connect(mapStateToProps, {Edit})(App)
