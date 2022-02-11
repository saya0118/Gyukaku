import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Edit} from '../actions/index';

const EditTodo = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    // const [updatedWord, setUpdatedWord] = useState("");

    const onHandleEdit = (index) => {

        setIsEditing(true);
        props.setEditIndex(index);
        props.setDefaultText(index);
        // setIsEditing(props.index);
        // const id = document.getElementById("list-id");
        // const input = document.createElement("input");
        // input.setAttribute("type", "text");
        // input.setAttribute("value", "");
        // console.log(props.item);
        // id.removeChild(props.item);
        // id.appendChild(input);

        // const item = props.list[props.index];
        // props.setWord(item);
    }

    const onHandleUpdate = (index) => {
        // Actionの始まり
        props.updateText(index);

        setIsEditing(false);
        props.setEditIndex(null);
    }

    return isEditing ? <button onClick={()=> onHandleUpdate(props.index)}>Update</button> : <button onClick={()=>onHandleEdit(props.index)}>Edit</button>          
}

const mapStateToProps = state => {
    // console.log(state);
    return {list: state.lists}
}

export default connect(mapStateToProps, {Edit})(EditTodo)