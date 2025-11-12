import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Quote from './Quote'
import User from './User'
import Comment from './Comment'
import Todo from './Todo'

const Pages = () => {
  return (
    <div>
     <Routes>
        <Route path='/' element={<Quote/>}/>
        <Route path='/User' element={<User/>}/>
        <Route path='/Comment' element={<Comment/>}/>
        <Route path='/Todo' element={<Todo/>}/>
     </Routes>
    </div>
  )
}

export default Pages