import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Edit} from '../actions/index'

const EditTodo = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    // const onHandleEdit = () => {
    //     setIsEditing(index);
    //     const item = list[index];
    //     setWord(item);
    // }

    return (
        <div>
            {
                isEditing === index ? <button>Update</button> : <button onClick={()=>props.Edit(props.index)}>Edit</button>
            }
        </div>
    )
}

const mapStateToProps = state => {
    // console.log(state);
    return {list: state.lists}
}

export default connect(mapStateToProps, {Edit})(EditTodo)