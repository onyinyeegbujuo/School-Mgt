import React, { useState } from 'react'
import { FaPlus, FaRegEdit, FaSearch, FaTimes } from 'react-icons/fa'
import { RiDeleteBinLine } from 'react-icons/ri'
import BoyIcon from "../../assets/images/boy-icon.png";
import GirlIcon from "../../assets/images/girl-icon.png"
import { Link } from 'react-router-dom';

const Teachers = () => {
    const[openRemoveTeacher, setRemoveTeacher] = useState(false);
  return (
    <div>
        <div className='mx-5 py-8'>
            <h1 className='text-center text-2xl font-bold text-primary pb-4'>Teachers</h1>
            <form action="" className='flex items-center pb-5'>
                <div className='lg:w-full w-[340px] flex lg:flex-row flex-col lg:items-center items-start lg:border-2 border-0 lg:outline-primary outline-hidden'>
                    <input type="search" name='search' placeholder='Search by teacher...'className='lg:w-[460px] w-full outline-hidden border-4 px-1 py-1 lg:mb-0 mb-2' />
                    <select name="gender" id=""  className='lg:w-[460px] w-full outline-hidden border-4 px-1 py-1 lg:mb-0 mb-2' >
                        <option value="placeholder">search by gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <button type='search' className='flex items-center gap-1 w-[110px] border-4 px-1 py-1'>
                        <FaSearch /> <span>search</span>
                    </button>
                </div>
            </form>

            <div className='pb-5'>
                <Link to="/add_teacher"   className='flex items-center gap-1 bg-secondary text-white p-2 rounded-lg font-semibold cursor-pointer w-[180px]'>
                <FaPlus/> <span>Add New Teacher</span>
                </Link>
            </div>

            <div className='lg:w-full w-410px lg:overflow-hidden overflow-scroll'>
                <table className='w-full border-2'>
                    <tr className='border-2 bg-body'>
                        <th className='border-2 px-2 py-3'>ID</th>
                        <th className='border-2 px-2 py-3'>Image</th>
                        <th className='border-2 px-2 py-3'>Name</th>
                        <th className='border-2 px-2 py-3'>Gender</th>
                        <th className='border-2 px-2 py-3'>Address</th>
                        <th className='border-2 px-2 py-3'>Phone</th>
                        <th className='border-2 px-2 py-3'>Subject</th>
                        <th className='border-2 px-2 py-3'>Email</th>
                        <th className='border-2 px-2 py-3'>Actions</th>
                    </tr>
                    <tr className=''>
                        <td className='border-2 px-1'>1</td>
                        <td className='border-2 px-1'><img src={GirlIcon} alt="" className='w-12'/></td>
                        <td className='border-2 px-1'>Onyinyechi</td>
                        <td className='border-2 px-1'>Female</td>
                        <td className='border-2 px-1'>Awaka</td>
                        <td className='border-2 px-1'>08137540163</td>
                        <td className='border-2 px-1'>Maths</td>
                        <td className='border-2 px-1'>ajdjjdhurhfhf@gmail.com</td>
                        <td className='border-2 flex items-center gap-1.5 p-3'>
                        <Link to="/edit_teacher" className='flex items-center gap-1 px-2 py-2 bg-dash rounded-lg' >
                            <FaRegEdit /> <span className='font-semibold'>Edit</span>
                        </Link>
                        <button type=''className='flex items-center gap-1 px-2 py-2 rounded-lg bg-primary text-white'onClick={()=>setRemoveTeacher(prev => !prev)} >
                            <RiDeleteBinLine/> <span>Delete</span>
                        </button>
                        <Link to='/teachers_details' className='px-2 py-2 rounded-lg bg-secondary text-white cursor-pointer'>Details</Link>
                        </td>
                    </tr>

                    <tr className=''>
                        <td className='border-2 px-1'>2</td>
                        <td className='border-2 px-1'><img src={BoyIcon} alt="" className='w-12'/></td>
                        <td className='border-2 px-1'>Elvis</td>
                        <td className='border-2 px-1'>Male</td>
                        <td className='border-2 px-1'>Awaka</td>
                        <td className='border-2 px-1'>08137540163</td>
                        <td className='border-2 px-1'>Maths</td>
                        <td className='border-2 px-1'>ajdjjdhurhfhf@gmail.com</td>
                        <td className='border-2 flex items-center gap-1.5 p-3'>
                        <Link to="/edit_teacher" className='flex items-center gap-1 px-2 py-2 bg-dash rounded-lg '>
                            <FaRegEdit/> <span className='font-semibold'>Edit</span>
                        </Link>
                        <button type=''className='flex items-center gap-1 px-2 py-2 rounded-lg bg-primary text-white'>
                            <RiDeleteBinLine/> <span>Delete</span>
                        </button>
                        <Link to='/teachers_details' className='px-2 py-2 rounded-lg bg-secondary text-white cursor-pointer'>Details</Link>
                        </td>
                    </tr>
                </table>
            </div>
 

            {openRemoveTeacher &&(
            <div className='fixed h-screen top-0 left-0 w-full py-[90px] bg-[linear-gradient(to_right,rgba(0,0,0,0.6),rgba(0,0,0,0.6))] z-[9999] px-2'>
                <div className='bg-slate-200 lg:w-[35%] w-full mx-auto relative px-4 py-5 h-[250px] rounded-lg'>
                <div className='absolute right-4 cursor-pointer' > <FaTimes onClick={()=> setRemoveTeacher(false)}/></div>
                <h1 className='pt-5 text-center text-2xl font-bold text-primary pb-4'>Remove Teacher</h1>
                <p className='text-center pb-5 text-lg'>Are you sure u want to remove this Teacher?</p>
                <div className='w-full bg-primary py-2 rounded-lg'>
                    <button className='w-full text-white' type=''>Remove Teacher</button>
                </div>
    
                </div>
    
            </div>
            )}


        </div>
    </div>
  )
}

export default Teachers