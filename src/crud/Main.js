import React, { useState } from 'react'

const Main = () => {
    //まずはStateで変化するデータを管理
    const [word, setWord] = useState("")
    const [list, setList] = useState([])
    
    //インプットタグの中身が変わるごとにsetWordに入れられる。
    const onChange = (event) => {
        setWord(event.target.value);
    }

    //Addボタンを押された時に、新しいwordとすでにあるリストをバラして一つのarrayにする。ついでにインプットタグを空っぽにする。
    const onHandleAdd = () => {
        setList([...list, word])
        setWord("")
    }

    return (
        <div>
            <input value={word} type="text" onChange={onChange}></input>
            <button onClick={onHandleAdd}>Add</button>
            <ul>
                {/* マップはエラー出るからkeyの設定も忘れちゃダメだよ */}
                {list.map((item, i) =>
                <li key={i}>
                    {item}🔥
                    <button>Edit</button>
                    <button>Delete</button>
                </li>
                )}
            </ul>
        </div>
    )
}

export default Main;