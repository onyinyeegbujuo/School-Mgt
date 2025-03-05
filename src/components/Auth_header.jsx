import React from 'react'
import { Link } from "react-router-dom";

const Auth_header = () => {
  return (
    
        <div className='max-w-6xl mx-auto fixed  w-full left-2/4 top-4 shadow-lg -translate-x-2/4 z-50 bg-white rounded-3xl'>
            <div className='flex items-center justify-between  px-4 py-4  '>
                <div>
                    <h1 className='lg:text-lg text-sm font-bold text-primary'>Elementary School Anywhere</h1>
                </div>
            <div className='px-4 py-1 rounded-3xl bg-primary'>
                <h1> <Link to="/" className='lg:text-sm font-bold text-white text-xs'>Back</Link></h1>
            </div>
        </div>
    </div>

  )
}

export default Auth_header