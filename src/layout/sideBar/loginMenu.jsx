import React from 'react'
import { FaPowerOff } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react'
import {jwtDecode} from 'jwt-decode';
import { _logout } from '../../stores/auth';

export default function LoginMenu() {
  const {user} = useSelector(state=>state.auth)
  const dispatch =useDispatch()


  

  
  return (
    <div  className='relative inline-block text-left'>
      {user && (
        <Menu>
        <Menu.Button className=' inline-flex items-center justify-center bg-white text-black text-2xl p-3 rounded-full hover:bg-gray-300 baslik w-[250px]'> {user.username }</Menu.Button>
        <Menu.Items>
          <Menu.Item className="absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white  text-black ring-1 ring-black ring-opacity-5 focus:outline-none hover:bg-gray-200 font-semibold p-1 text-center ">
            {({ active }) => (
              <button
                className={`${active && 'bg-blue-500'}`}
                onClick={()=>dispatch(_logout())}
                
              >
                Cikis Yap
              </button>
            )}
          </Menu.Item>
          
        </Menu.Items>
      </Menu>
      )}
      {!user && (
        <Link to='/login' className='flex items-center justify-center bg-white text-black text-2xl p-3 rounded-full hover:bg-gray-300'>
          <FaPowerOff />
         </Link>
      )}
    </div>
  )
}
