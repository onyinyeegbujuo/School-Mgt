import React from 'react'
import { Link } from 'react-router-dom';
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaEdit, FaTimes} from 'react-icons/fa';
import  { useState } from 'react'

const Subject_allocation = () => {
    const[openRemoveAllocation, setRemoveAllocation] = useState(false);
  return (
    <div className='mx-5 py-5'>
        <header>
            <div className='flex items-center justify-between bg-white px-4 py-3'>
                <div>
                    <h1>Subject Allocation</h1>
                </div>
                <div> 
                    <Link to='/dashboard'>Dashboard</Link>
                </div>
            </div>
        </header>

        <div className='flex gap-3 mt-3 items-start lg:flex-row flex-col'>
            <div className='bg-white px-5 py-4 lg:w-[350px] w-full rounded-sm'>
                <h1 className='mb-4 font-bold text-lg text-primary'>Subject Allocation</h1>
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
                    <button type='' className='px-4 py-2 bg-dash rounded-sm font-semibold mr-4'>Save</button>
                    <button type=''className='px-4 py-2 bg-body rounded-sm font-semibold' >Reset</button>
                </form>
            </div>
            <div className=' lg:w-[800px] w-full px-5 py-4 bg-white rounded-sm'>
                <h1 className='mb-4 font-bold text-lg text-primary'>Subject Allocation Details</h1>
                <div className='w-full '>
                    <table className='w-full '>
                        <tr className=''>
                            <th>S/NO</th>
                            <th>Teacher Name</th>
                            <th>Subject Full Name</th>
                            <th>Allocation Date</th>
                            <th>Action</th>
                        </tr>
                        <tbody className='text-center border-1 border-slate-300'>

                        
                            <tr className='border-1 border-slate-300'>
                                <td>1</td>
                                <td>John Okon</td>
                                <td>English Language</td>
                                <td>1/5/2025</td>
                                <td className='flex items-center gap-2'>
                                    <Link to='/edit_allocation'><FaEdit className='text-xl text-primary'/></Link>
                                    <Link to=''><RiDeleteBin5Line className='text-xl text-primary' onClick={()=>setRemoveAllocation(prev => !prev)}/></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Tochukwu Umeh</td>
                                <td>Civic Education</td>
                                <td>1/10/2025</td>
                                <td className='flex items-center gap-2'>
                                    <Link to='/edit_allocation'><FaEdit className='text-xl text-primary'/></Link>
                                    <Link to=''><RiDeleteBin5Line className='text-xl text-primary' onClick={()=>setRemoveAllocation(prev => !prev)}/></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


        {openRemoveAllocation &&(
            <div className='fixed h-screen top-0 left-0 w-full py-[90px] bg-[linear-gradient(to_right,rgba(0,0,0,0.6),rgba(0,0,0,0.6))] z-[9999] px-2'>
                <div className='bg-slate-200 lg:w-[35%] w-full mx-auto relative px-4 py-5 h-[250px] rounded-lg'>
                <div className='absolute right-4 cursor-pointer' > <FaTimes onClick={()=> setRemoveAllocation(false)}/></div>
                <h1 className='pt-5 text-center text-2xl font-bold text-primary pb-4'>Remove Allocation</h1>
                <p className='text-center pb-5 text-lg'>Are you sure u want to delete this allocation?</p>
                <div className='w-full bg-primary py-2 rounded-lg'>
                    <button className='w-full text-white' type=''>Remove Allocation</button>
                </div>

                </div>

            </div>
        )}
    </div>
  )
}

export default Subject_allocation