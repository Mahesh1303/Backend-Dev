import React from 'react'
import { Link } from 'react-router-dom'


function Registration() {
    return (
        <div className='bg-slate-200 h-2/4 w-2/4 justify-center mx-auto space-x-4 space-y-4 rounded-3xl shadow-slate-500 p-20'>
            <form>
    
                    <input type='text' placeholder='Enter Name'  className='border-s-gray-600  w-full my-4 p-3 rounded-3xl'></input>
                    <input type='text' placeholder='Enter email'  className='border-s-gray-600  w-full my-4 p-3 rounded-3xl'></input>
                    <input type='password' placeholder='Enter password' className='border-s-gray-600  w-full my-10 p-3 rounded-3xl' ></input>
                    <button type='submit' className='bg-red-700 rounded-full p-3  text-white mb-4'>Register</button>
                    <div>



                <Link to='/' className='text-blue-400'>
                  Dont have An Account?
                </Link>

                </div>
    
                    
    
            </form>
    
    
        </div>
      )
}

export default Registration