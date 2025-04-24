import React from 'react'
import { FaCircleArrowRight, } from "react-icons/fa6";
import { IoPeople } from 'react-icons/io5';
import { LuBookType } from 'react-icons/lu';
import { MdOutlineSubject, MdPayments } from 'react-icons/md';
import { Link } from 'react-router-dom';


const Dashboard = () => {
  return (
    <div>
      <div className='mx-5 my-8'>
        <div className='flex items-center gap-3'>
          <FaCircleArrowRight className='text-2xl text-primary'/> <span className='text-2xl text-primary'>Student Dashboard</span>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-8  mt-6 gap-3'>
          <div className='col-span-4 bg-white rounded-lg'>
            <div className='bg-primary text-white px-3 py-2 text-lg'>Quick Links</div>
            <div className='flex lg:flex-row flex-col items-center justify-between p-8 gap-6'>
              <div className='w-[140px] bg-body rounded-md text-center px-4 py-4'>
                <IoPeople className='text-4xl'/>
                <h1 className='text-xl'><Link to='/student_details'>profile</Link></h1>
              </div>
              <div className='w-[140px] bg-body rounded-md text-center px-4 py-4'>
                <MdOutlineSubject className='text-4xl'/>
                <h1 className='text-xl'>Subject</h1>
              </div>
              <div className='w-[140px] bg-body rounded-md text-center px-4 py-4'>
                <MdPayments className='text-4xl'/>
                <h1 className='text-xl'>Payment</h1>
              </div>
              <div className='w-[140px] bg-body rounded-md text-center px-4 py-4'>
                < LuBookType className='text-4xl'/>
                <h1 className='text-xl'>Exams</h1>
              </div>
            </div>
          </div>

          <div className='col-span-4 bg-white'>
            <div className='text-white bg-primary px-3 py-2'>
              <h1 className='text-lg'>Event Schedule</h1>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard