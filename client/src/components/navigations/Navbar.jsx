import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
   return (
      <div className='bg-gray-800 text-gray-50 flex gap-2 justify-between px-20 py-4 items-center'>
         <Link to="/">
            <h1 className='font-bold tracking-wider text-2xl'>MERN STACK</h1>
         </Link>
         <ul className='flex gap-2'>
            <li>
               <Link className='text-xl hover:text-indigo-600' to="/">Home</Link>
            </li>
            <li>
               <Link className='text-xl hover:text-indigo-600' to="/new">Create task</Link>
            </li>
         </ul>
      </div>
   )
}

export default Navbar