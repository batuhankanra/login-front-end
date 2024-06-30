import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div className='flex items-center justify-center rounded-full gap-x-10 p-1 bg-white text-black text-2xl baslik'>
      <Link to='/about' className='flex items-center justify-center hover:bg-gray-300 p-1 rounded-md w-[220px] py-2 px-3 rounded-l-full' >Hakkimizda</Link>
      <Link to='/project' className='flex items-center justify-center hover:bg-gray-300 p-1 rounded-md w-[220px] py-2 px-3 ' >Projeler</Link>
      <Link to='/blog' className='flex items-center justify-center hover:bg-gray-300 p-1 rounded-md w-[220px] py-2 px-3 rounded-r-full' >blog</Link>

    </div>
  )
}
