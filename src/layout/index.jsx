import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './sideBar'
import ProtectedRoute from '../components/ProtectedRoute'
import { useDispatch } from 'react-redux'
import { _loadUser } from '../stores/auth'

export default function MainLayout() {
  const dispatch =useDispatch()
  useEffect(()=>{
    dispatch(_loadUser())
  },[dispatch])
  return (
    <div className='w-[1500px]  mx-auto   '>
      <SideBar />
      <ProtectedRoute />

      <Outlet />
    </div>
  )
}
