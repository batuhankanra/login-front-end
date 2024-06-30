import { Link, useNavigate } from "react-router-dom"
import wolf from '../../../assets/img/wolf.jpg'
import { useState } from "react"
import axios from "axios"

export default function Register() {
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate = useNavigate();
  
  const handleSubmit = (e)=>{
    const register=async ()=>{
      try{
        const response =await axios.post('http://localhost:3000/api/auth/register',{
          username,
          email,
          password
        })
        
        if(response.status===201){
          console.log('kaydetme basarili', response.data.username)
          setTimeout(() => {
            navigate('/login'); // Login sayfasına 3 saniye sonra yönlendir
          }, 3000);

        }
      }catch (err){
        console.log(err)
      }
    }
    e.preventDefault()
    
    register()
    


  }





  return (
    <div className="text-white h-[80vh]  flex items-center justify-center bg-cover">
    <div className='bg-slate-800 border border-slate-400 rounded-md rounded-r-none p-8 shadow-lg backdrop-filter backdrop-blur-sm text-lg'>
      <h1 className='text-4xl text-white font-bold text-center mb-6'>Register</h1>
      <form onSubmit={handleSubmit} >
          <div className='relative my-4'>
              <input value={username} onChange={e=>setUsername(e.target.value)} type="text" className='block w-[400px] py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:right-0 focus:text-white focus:border-blue-600 peer' />
              <label className=' absolute text-white  text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 '>your username</label>
          </div>
          <div className='relative my-4'>
              <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className='block w-[400px] py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:right-0 focus:text-white focus:border-blue-600 peer' />
              <label className=' absolute text-white  text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 '>your email</label>
          </div>
          <div className='relative my-4'>
              <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className='block w-[400px] py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:right-0 focus:text-white focus:border-blue-600 peer'/>
              <label className=' absolute text-white  text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 '>your password</label>
          </div>
          <div className='flex items-center justify-between'>
              <div className='flex gap-2 items-center'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Beni hatirla</label>
              </div>
              <span className='text-blue-500'>Forgot Password</span>
          </div>
         
          <button type="submit" className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300  '>Giris Yap</button>
          <div className='m-4'>
              Giris yapmak icin <Link to='/login' className='text-blue-500'>buraya tikla</Link>
          </div>
      </form>
    </div>
    <div className='w-[277px] h-[415px]'>
        <img src={wolf} className='bg-white' />
      </div>
    
  </div>
  )
}
