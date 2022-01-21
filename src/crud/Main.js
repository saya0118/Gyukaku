import React, { useState } from 'react'

const Main = () => {
    //まずはStateで変化するデータを管理
    const [word, setWord] = useState("");
    const [list, setList] = useState([]);
    const [ isEditing, setIsEditing ] = useState(false);

    
    //インプットタグの中身が変わるごとにsetWordに入れられる。
    const onChange = (event) => {
        setWord(event.target.value);
    }

    //Addボタンを押された時に、新しいwordとすでにあるリストをバラして一つのarrayにする。ついでにインプットタグを空っぽにする。
    const onHandleAdd = () => {
        setList([...list, word])
        setWord("")
    }

    const onHandleDelete = (index) => {
        const newList = [...list]
        newList.splice(index, 1)
        setList(newList)
    }

    // const onAnythhing = () => {}

    // const onHandleEdit = ()=> {
    //     list.map((index)=> {
    //     if(i=index){
    //         return 
    //     }
    // })}

    const onHandleEdit = (index) => {

        setIsEditing(index);

        // const index = {
        //     value: "aaa",
        //     color: "red"
        // }

        // index.value = "aaa";
        // index.color = "red"

        // Apply value, index-th item in array ,to input 
        // Figure out an item at n-th in array

        const item = list[index];
        setWord(item);
    }

    const onHandleUpdate = (index) => {
        //stateをコピーするにはスプレットシンタックスで別にもう一個コピーを作る（stateは直でいじれないため）

        // const updated = list.map((item, i) => {

        //     if (i === index) {
        //         item[index] = word;
        //     }

        //     return item;
        // })

        const updated = [...list]
        updated[index] = word
        setList(updated)
        setWord("")
        setIsEditing(false);
    }


    return (
        <div>
            <input value={word} type="text" onChange={onChange}></input>
            <button onClick={onHandleAdd}>Add</button>
             
            <ul>
                {/* マップはエラー出るからkeyの設定も忘れちゃダメだよ */}
                {list.map((item, i) =>
                <li key={i}>
                    {item}
                    {
                        isEditing===i ? <button onClick={()=>onHandleUpdate(i)}>Update</button> : <button onClick={()=>onHandleEdit(i)}>Edit</button>
                    }
                    <button onClick={()=>onHandleDelete(i)}>Delete</button>
                </li>
                )}
            </ul>
        </div>
    )
}

export default Main;