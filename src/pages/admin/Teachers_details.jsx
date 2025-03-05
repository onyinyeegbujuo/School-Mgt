import React from 'react'
import { FaArrowAltCircleLeft, FaEdit } from 'react-icons/fa'
import TeacherImage from "../../assets/images/girl-icon.png"
import { Link } from 'react-router-dom';

const Teachers_details = () => {
  return (
    <div> 
      <div className='mx-5 py-6'>
        <div className=' flex items-center justify-between mb-6 bg-white px-2 py-3'>
          <FaArrowAltCircleLeft className='text-2xl'/>
           <Link to='/edit_teacher'>
            <FaEdit className='text-2xl'/>
           </Link>
        </div>
        <h1 className='mb-7 text-xl'>Teachers Details</h1>
        <div className='flex lg:flex-row flex-col space-x-20   mx-auto lg:w-[800px] w[400px] px-5 py-5 bg-white'>
          <div className='lg:mb-0 mb-8'>
            <div className='bg-red-400 w-[180px]'>
              <img src={TeacherImage} alt="" className='w-full bg-cover ' />
            </div>
          </div>
          <div>
            <h1 className='text-lg font-semibold mb-5'>About</h1>
            <div>
              <ul>
                <li className='flex gap-10'>
                   <div>Name:</div>
                   <div>Eke Mitchelle</div>
                </li>
                <li className='flex gap-10'>
                  <div>Gender:</div>
                  <div>Female</div>
                </li>
                <li className='flex gap-10'>
                  <div>Date of Birth:</div>
                  <div>12/4/2367</div>
                </li>
                <li className='flex gap-10'>
                  <div>Address:</div>
                  <div>Umuerim</div>
                </li>
                <li className='flex gap-10'>
                  <div>Phone:</div>
                  <div>09047484783</div>
                </li>
                <li className='flex gap-10'>
                  <div>Subject:</div>
                  <div>Maths</div>
                </li>
                <li className='flex gap-10'>
                  <div>Email:</div>
                  <div>ghsjjaiiall@gmail.com</div>
                </li>
              </ul>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Teachers_details