import React from 'react'
import { Outlet } from "react-router-dom"
import Auth_header from '../components/Auth_header'

const AuthLayout = () => {
  return (
    <div> 
      <div className='relative z-[999] h-[50px]'>
        <Auth_header/>
      </div>

      <div>
        < Outlet />
      </div>
    </div>
  )
}

export default AuthLayout