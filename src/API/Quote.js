import React, { useState , useEffect} from "react";
import axios from 'axios'

const Api = () => {
    const [data,setData]=useState([])
    const [mydata,setMydata]=useState(null)
    useEffect(()=>{
        axios.get("https://dummyjson.com/quotes")
        .then(Response =>{
            setData(Response.data.quotes)
        })
        .catch(err=>{
            setMydata(err.message)
        })
    },[])
    if (mydata) return <p>Error : {mydata}</p>
  return (
        <>
        
    <div className="card">
        <h1>Quotes</h1>     
                
                <table border='1' rules="all" cellPadding="10">
                <thead>
                 <tr>
                    <th>Id</th>
                    <th>Author</th>
                    <th>Quotes</th>
                 </tr>
                </thead>
        {data.map((i)=>{
            return(
                
                <tbody key={i.id}>
                    <tr>
                        <td>{i.id}</td>
                        <td>{i.author}</td>
                        <td>{i.quote}</td>
                    </tr>
                </tbody>
                
            )
        })}
        </table>
    </div>
      

        </>
  )
}

export default Api