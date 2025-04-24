import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Classes = () => {
  return (
    <div >
      <div className='mx-5 py-7'>
        <h1 className='text-center text-lg text-primary font-semibold mb-3'>LIST OF SECTIONS, CLASSES AND ARMS</h1>
        <div className='flex gap-5 items-start'>
          <div className=' flex items-center gap-5 bg-white w-[400px]'>
            <div className='mb-6'>
              <h1 className='text-lg font-semibold text-primary '>SECTIONS</h1>
              <ul>
                <li>CRECHE</li>
                <li>NURSERY</li>
                <li>PRIMARY</li>
                <li>SECONDARY</li>
              </ul>
            </div>

            <div className='mb-6'>
            <h1 className='text-lg font-semibold text-primary'>CLASS NAMES</h1>
            <ul>
              <li>CRECHE</li>
              <li>NURSEY 1</li>
              <li>NURSERY 2</li>
              <li>NURSERY 3</li>
              <li>PRIMARY 1</li>
              <li>PRIMARY 2</li>
              <li>PRIMARY 3</li>
              <li>PRIMARY 4</li>
              <li>PRIMARY 5</li>
              <li>PRIMARY 6</li>
              <li>JSS 1</li>
              <li>JSS 2</li>
              <li>JSS 3</li>
              <li>SS 1</li>
              <li>SS 2</li>
              <li>SS 3</li>
            </ul>
            </div>

            <div>
              <h1 className='text-lg font-semibold text-primary'>ARMS</h1>
              <ul>
                <li>GOLD</li>
                <li>DIAMOND</li>
                <li>SILVER</li>
                <li>BRONZE</li>
              </ul>
            </div>
          </div>

        
          <div className='bg-white w-[500PX] px-6 py-6' >
            <h1 className='text-center text-lg text-primary font-bold'>ADD CLASS</h1>
            <form action="" method=''>
              <label htmlFor="section">SECTION</label>
              <div className='bg-slate-200 rounded-sm mb-5'>
              <select name="section" id="" className='w-full outline-hidden px-2 py-2 rounded-sm' >
                <option value="">SECTION</option>
                
                <option value="">CRECHE</option>
                <option value="">NURSERY</option>
                <option value="">PRIMARY</option>
                <option value="">SECONDARY</option>
              </select>
              </div>
              <label htmlFor="classname"> CLASS NAME</label>
              <div className='bg-slate-200 rounded-sm mb-5'>
              <select name="classname" id=""className='w-full outline-hidden px-2 py-2 rounded-sm' >
                <option value="">CLASS NAME</option>
                
                <option value="">CRECHE GOLD</option>
                <option value="">CRECHE DIAMOND</option>
                <option value="">CRECHE SILVER</option>
                <option value="">NURSERY 1 GOLD</option>
                <option value="">NURSERY 1 DIAMOND</option>
                <option value="">NURSERY 1 SILVER</option>
                <option value="">NURSERY 2 GOLD</option>
                <option value="">NURSERY 2 DIAMOND</option>
                <option value="">NURSERY 2 SILVER</option>
                <option value="">NURSERY 3 GOLD</option>
                <option value="">NURSERY 3 DIAMOND</option>
                <option value="">NURSERY 3 SILVER</option>
                <option value="">PRIMARY 1 GOLD</option>
                <option value="">PRIMARY 1 DIAMOND</option>
                <option value="">PRIMARY 1 SILVER</option>
                <option value="">PRIMARY 2 GOLD</option>
                <option value="">PRIMARY 2 DIAMOND</option>
                <option value="">PRIMARY 2 SILVER</option>
                <option value="">PRIMARY 3 GOLD</option>
                <option value="">PRIMARY 3 DIAMOND</option>
                <option value="">PRIMARY 3 SILVER</option>
                <option value="">PRIMARY 4 GOLD</option>
                <option value="">PRIMARY 4 DIAMOND</option>
                <option value="">PRIMARY 4 SILVER</option>
                <option value="">PRIMARY 5 GOLD</option>
                <option value="">PRIMARY 5 DIAMOND</option>
                <option value="">PRIMARY 5 SILVER</option>
                <option value="">PRIMARY 6 GOLD</option>
                <option value="">PRIMARY 6 DIAMOND</option>
                <option value="">PRIMARY 6 SILVER</option>
                <option value="">JSS 1 GOLD</option>
                <option value="">JSS 1 DIAMOND</option>
                <option value="">JSS 1 SILVER</option>
                <option value="">JSS 2 GOLD</option>
                <option value="">JSS 2 SILVER</option>
                <option value="">JSS 2 DIAMOND</option>
                <option value="">JSS 3 GOLD</option>
                <option value="">JSS 3 DIAMOND</option>
                <option value="">JSS 3 SILVER</option>
                <option value="">SS 1 GOLD</option>
                <option value="">SS 1 DIAMOND</option>
                <option value="">SS 1 SILVER</option>
                <option value="">SS 2 GOLD</option>
                <option value="">SS 2 DIAMOND</option>
                <option value="">SS 2 SILVER</option>
                <option value="">SS3 GOLD</option>
                <option value="">SS3 DIAMOND</option>
                <option value="">SS3 SILVER</option>
                </select>
              
              </div>

              <div className='flex gap-3'>
                <button type='' className='px-5 py-2 bg-secondary font-bold rounded-sm'>ADD</button>
                <button type=''className='px-5 py-2 bg-dash font-bold rounded-sm'>RESET</button>
              </div>

            </form>
          </div>
          
        </div>
        
      </div>

      
    </div>
  )
}

export default Classes