import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Todo = () => {
    const [todo,setTodo]=useState([])
    const [datas,setDatas]=useState(null)
    useEffect(()=>{
        axios.get("https://dummyjson.com/todos")
        .then((Response=>{
            setTodo(Response.data.todos)
        }))
        .catch((err)=>{
            setDatas(err.message)
        })
    },[])
    if(datas){
        return <p>404 : {datas}</p>
    }
  return (
    <>
        <h1>TODO-LIST</h1>
    <div className='todos'>
        {todo.map((x)=>
         (
            <div key={x.id} className='todo'>
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20210115/pngtree-original-font-checklist-background-image_529297.jpg"/>
            <p><strong>Id : </strong>{x.id}</p>
            <p><strong>ToDo : </strong>{x.todo}</p>
            <p><strong>UserId : </strong>{x.userId}</p>
            </div>
        ))}
    </div>
    </>
  )
}

export default Todo