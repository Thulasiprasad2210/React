import React from 'react'
import { Link } from 'react-router-dom'

const Anchor = () => {
  return (
    <div className='head'>
            <h3>API</h3>
        <nav className='navbar'>
        <ul type='none'>
            <li><Link to='/' className='link'>QUOTES</Link></li>
            <li><Link to='/User' className='link'>USERS</Link></li>
            <li><Link to='/Comment' className='link'>COMMENTS</Link></li>
            <li><Link to='/Todo' className='link'>TODO</Link></li>
        </ul>
        </nav>
    </div>
  )
}

export default Anchor