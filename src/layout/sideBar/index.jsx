import React from 'react'
import HomeIcon from './homeIcon'
import Menu from './menu'
import LoginMenu from './loginMenu'


export default function SideBar() {
  return (
    <div className='flex items-center justify-between gap-x-5 py-10 mx-5'>
      <HomeIcon />
      <Menu />
      <LoginMenu />
    </div>
  )
}
