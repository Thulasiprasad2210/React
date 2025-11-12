import React, { useEffect, useState } from 'react'
import axios from 'axios'

const User = () => {
    const [user,setUser]=useState([])
    const [users,setUsers]=useState(null)
    useEffect(()=>{
     axios.get("https://dummyjson.com/users")
     .then(Response =>{
        setUser(Response.data.users)
    })
    .catch(err =>{
       setUsers(err.message)
     })
    },[])
    if(users) return <p>Error : {users}</p>
  return (
    <>
       <h1>Users-Details</h1>
     {user.map((t)=>{
      return(
        <>
    <div key={t.id}>
       <ol>
        <img src={t.image} alt={t.city}/>
        <li>Id : {t.id}</li>
        <li>Name : {t.firstName}</li>
        <li>Age : {t.age}</li>
        <li>Email : {t.email}</li>
        <li>Contact : {t.phone}</li>
       </ol>
    </div>
    </>
    )
     })}
    </>
  )
}

export default User