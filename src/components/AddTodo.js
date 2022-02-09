import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Add} from '../actions/index'

const AddTodo = (props) => {

    const [word, setWord] = useState("");

    const onChange = (e) => {
        setWord(e.target.value)
    }

    // console.log(props);

    return(
        <div>
            <input value={word} type="text" onChange={onChange}></input>
            <button onClick={()=>props.Add(word)}>Add</button>
        </div>
    )
}

const mapStateToProps = state => {
    // console.log(state);
    return {list: state.lists}
}
export default connect(mapStateToProps, {Add})(AddTodo)