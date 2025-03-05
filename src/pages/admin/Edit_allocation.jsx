import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

const Edit_allocation = () => {
    
  return (
    <div className='mx-5 py-5'> 
        <header className='mb-5'>
            <div className='flex items-center justify-between bg-white px-4 py-3'>
                <div>
                    <h1>Subject</h1>
                </div>
                <div> 
                    <Link to='/subject_allocation'><FaArrowAltCircleLeft className='text-xl'/></Link>
                </div>
            </div>
        </header>

        <div className='bg-white px-5 py-4 lg:w-[450px] w-full rounded-sm mx-auto'>
          <h1 className='mb-4 font-bold text-lg text-primary'>Update Allocation</h1>
          <form action="" method=''>
              <label htmlFor="SubjectName" className='mb-1'>Subject Full Name</label>
              <div className='bg-slate-200 rounded-sm mb-2'>
                  <input type="text" name='' className='w-full px-2 py-2 outline-hidden '/>
              </div>
              <label htmlFor="subject_shortName">Teacher Name</label>
              <div className='rounded-sm bg-slate-200 mb-3'>
                  <input type="text" name='' className='w-full px-2 py-2 outline-hidden '/>
              </div>
              <label htmlFor="day_allocated">Day Allocated</label>
              <div className='rounded-sm bg-slate-200 mb-3'>
                <input type="date" name='' className='w-full px-2 py-2 outline-hidden '/>
              </div>
              <button type='' className='px-4 py-2 bg-dash rounded-sm font-semibold mr-4'>Update</button>
              <button type=''className='px-4 py-2 bg-body rounded-sm font-semibold' >Reset</button>
          </form>
        </div>


        
    </div>
  )
}

export default Edit_allocation