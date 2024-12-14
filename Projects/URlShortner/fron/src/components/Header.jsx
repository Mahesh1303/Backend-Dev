import React from 'react'
import Logout from '../buttons/Logout'


function Header() {
  

  return (
    <div className="w-full flex">
        <div className="w-3/4 justify-start content-center bg-amber-400 p-4 rounded-full">
          <h1 className="text-2xl text-white">URL Shortner</h1>
        </div>
        <div className="w-1/4 justify-end p-4 content-center">
            <Logout/>
        </div>
      </div>
  )
}

export default Header