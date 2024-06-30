import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import wolf from '../../../assets/img/wolf.jpg'
import axios from "axios"
import { useDispatch ,useSelector} from "react-redux"
import { _setToken } from '../../../stores/auth'


export default function Login() {
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const [res,setRes]=useState(false)
  const dispatch = useDispatch()
  const {user} = useSelector(state=>state.auth)
  const navigate = useNavigate()

  

  const handleSubmit = (e)=>{
    const login=async ()=>{
      try{
        const response =await axios.post('http://localhost:3000/api/auth/login',{
          username,
          password
        })
        
        if(response.status===200){
          dispatch(_setToken(response.data.token))
          localStorage.setItem('loginToken',response.data.token)
          
          setTimeout(()=>{
            navigate('/')
          },3000)
        }else {
          
        }
      }catch (err){
        console.log(err)
        setRes(err.response.data.message)
      }
    }
    e.preventDefault()
    
    login()
    


  }

 

  return (
    <div>
      {user?.message==='giris basarili' && (
        <div>giris yapmisiniz anasayfaya geri donun</div>
        
      )}
      {!user && (
        <div className='text-white h-[80vh]  flex items-center justify-center bg-cover'>
         
        <div className='bg-slate-800 border border-slate-400 rounded-md rounded-r-none p-8 shadow-lg backdrop-filter backdrop-blur-sm'>
          <h1 className='text-4xl text-white font-bold text-center mb-6'>Login</h1>
          {res && (
             <div className='bg-red-600 rounded-md w-full text-center py-2'>
             {res}
             </div>
          )}

          <form onSubmit={handleSubmit} >
              <div className='relative my-4'>
                  <input type="text" value={username} onChange={e=>setUsername(e.target.value)} className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:right-0 focus:text-white focus:border-blue-600 peer' />
                  <label className=' absolute text-white  text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 '>your email</label>
              </div>
              <div className='relative my-4'>
                  <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:right-0 focus:text-white focus:border-blue-600 peer'/>
                  <label className=' absolute text-white  text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 '>your password</label>
              </div>
              <div className='flex items-center justify-between'>
                  <div className='flex gap-2 items-center'>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Beni hatirla</label>
                  </div>
                  <span className='text-blue-500'>Forgot Password</span>
              </div>
             
              <button type='submit' className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300  '>Giris Yap</button>
              <div className='m-4'>
                  Kayit olmak icin <Link to='/register' className='text-blue-500'>buraya tikla</Link>
                  
              </div>
          </form>
        </div>
        <div className='w-[245px] h-[368px]'>
          <img src={wolf} className='bg-white' />
        </div>
      </div>
      )}
    </div>
  )
}
