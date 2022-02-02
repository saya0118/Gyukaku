import React from 'react'
import Input from './AddTodo'

const App = (props) => {
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

export default App;

// const Main = () => {
//     //まずはStateで変化するデータを管理
//     const [word, setWord] = useState("");
//     const [list, setList] = useState([]);
//     const [ isEditing, setIsEditing ] = useState(false);

    
//     //インプットタグの中身が変わるごとにsetWordに入れられる。
//     const onChange = (event) => {
//         setWord(event.target.value);
//     }

//     //Addボタンを押された時に、新しいwordとすでにあるリストをバラして一つのarrayにする。ついでにインプットタグを空っぽにする。
//     const onHandleAdd = () => {
//         setList([...list, word])
//         setWord("")
//     }

//     const onHandleDelete = (index) => {
//         const newList = [...list]
//         newList.splice(index, 1)
//         setList(newList)
//     }
