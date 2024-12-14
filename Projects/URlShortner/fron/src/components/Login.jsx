import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'




function Login() {

  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")

  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault();

    navigate('/url')
  }


  return (
    <div className='bg-slate-200 h-2/4 w-2/4 justify-center mx-auto space-x-4 space-y-4 rounded-3xl shadow-slate-500 p-20'>
        <form onSubmit={handleSubmit}>

                <input 
                type='text' 
                placeholder='Enter email'  
                className='border-s-gray-600  w-full my-4 p-3 rounded-3xl'
                value={email}
                onChange={(e)=>setemail(e.target.value)}
                
                ></input>
                <input type='password' placeholder='Enter password' className='border-s-gray-600  w-full my-10 p-3 rounded-3xl'
                value={password}
                onChange={(e)=>{
                  setpassword(e.target.value)
                }}
                
                ></input>
                <button type='submit' className='bg-red-700 rounded-full p-3 mb-4 text-white'>Login</button>
                <div>



                <Link to='/registration' className='text-blue-500 '>
                  Dont have An Account?
                </Link>

                </div>

                

        </form>


    </div>
  )
}

export default Login