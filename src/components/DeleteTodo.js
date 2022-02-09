// import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Delete} from '../actions/index'

const DeleteTodo = (props) => {
    // console.log(props);

    // const [index, setIndex] = useState([]);

    return <button onClick={()=>props.Delete(props.index)}>Delete</button>

}


const mapStateToProps = state => {
    // console.log(state);
    return {list: state.lists}
}

export default connect(mapStateToProps, {Delete})(DeleteTodo)