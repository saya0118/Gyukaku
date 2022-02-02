import React, {useState} from 'react'
import {connect} from 'react-redux'
// import Add from '../actions'
// import Input from '../actions/Input'

const AddTodo = (props) => {

    const [word, setWord] = useState("");
    const [list, setList] = useState([]);

    const onChange = (e) => {
        setWord(e.target.value)
    }

    const onHandleAdd = () => {
        setList([...list, word])
        setWord("")
    }

    return(
        <div>
            <input value={word} type="text" onChange={onChange}></input>
            <button onClick={props.listReducer}>Add</button>
        </div>
    )
}

const mapStateToProps = state => {
    return{word: state.listReducer}
}
export default connect(mapStateToProps)(AddTodo)