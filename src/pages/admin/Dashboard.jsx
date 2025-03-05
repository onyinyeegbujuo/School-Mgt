import React, { useEffect } from 'react'
import { BsPeopleFill } from "react-icons/bs";
import { GiTeacher } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaCalendarTimes, FaTimes } from "react-icons/fa";
import Barchat from '../../components/Barchat';
import Donut from '../../components/Donut';
import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { AiFillPlusSquare } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";



const Dashboard = () => {
    const ValuePiece = Date | null;
    const Value = ValuePiece | [ValuePiece, ValuePiece];
    const [value, onChange] = useState(new Date('2025-02-17'));
    const [openModal, setOpenModal] = useState(false);

    // const[posts, setPosts] = useState(false)
    // const submit = async e =>{
    //     e.preventDefault();
    //     const data = new FormData(e.target)
    //     const response=    await fetch('http://127.0.0.1/blogger/index.php',{
    //         method:"POST",
    //         body:data
    //     });

    //     const result = await response.json();
    //     console.log(result)
    // }
    
    // const fetchAllPosts = async()=>{
    //     const response=    await fetch('http://127.0.0.1/blogger/getAllPosts.php');

    //     const result = await response.json();
    //     setPosts(result.data.posts)
    // }

    // useEffect(()=>{
    //     fetchAllPosts();
    // }, [])

   
  return (
    <div className=' mx-5'>
        <div className=" grid grid-cols-1 lg:grid-cols-4 gap-5 pt-5">
            <div className="bg-primary rounded-lg text-white flex items-center gap-3 px-3 py-3">
                <div className="h-7 w-7 rounded-full  flex items-center justify-center bg-body">
                    <BsPeopleFill className="text-white"/>
                </div>
                <div>
                    <h1 className="font-bold">Total Students</h1>
                    <p>1500</p>
                </div>
            </div>
            
            <div className="bg-secondary rounded-lg text-white flex items-center gap-3 px-3 py-3">
                <div className="h-7 w-7 rounded-full  flex items-center justify-center bg-body">
                    <GiTeacher className="text-white"/>
                </div>
                <div>
                    <h1 className="font-bold">Total Teachers</h1>
                    <p>1500</p>
                </div>
            </div>

            <div className="bg-body rounded-lg text-black flex items-center gap-3 px-3 py-3">
                <div className="h-7 w-7 rounded-full  flex items-center justify-center bg-black">
                    <FaPeopleGroup className="text-white"/>
                </div>
                <div>
                    <h1 className="font-bold">Total Employees</h1>
                    <p>1500</p>
                </div>
            </div>

            <div className="bg-dash rounded-lg text-black flex items-center gap-3 px-3 py-3">
                <div className="h-7 w-7 rounded-full  flex items-center justify-center bg-body">
                    <FaCalendarTimes className="text-black"/>
                </div>
                <div>
                    <h1 className="font-bold">Finances</h1>
                    <p>1500</p>
                </div>
            </div>  
      </div>

      <section className='grid grid-cols-1 lg:grid-cols-5 gap-3 pt-10'>
        <aside className='col-span-2 bg-white'>
            <h2 className='pt-3 text-center pb-3 font-semibold'>Total Students by Gender</h2>
            <Donut className=""/>
        </aside>
        <aside className='col-span-3 bg-white'> 
            <div className='flex justify-between items-center py-4 px-5 '>
                <div>
                    <h2 className='font-semibold'>Attendance</h2>
                </div>

                <div className='flex items-center gap-5'>
                    <aside>
                        <h2>ghjddjk</h2>
                    </aside>
                    <aside>
                        <h3>hdksjkd</h3>
                    </aside>
                </div>
            </div>
            <Barchat />
        </aside>
      </section>

      {/* <div className='bg-gray-100 py-9'>

        <form onSubmit={submit}> 
          <div className='flex gap-x-5 mb-5'>
            <input placeholder='Enter Author' type="text" name='author' className='bg-gray-300 block w-full py-2 px-4' />

            <input placeholder='Enter title' type="text" name='title' className='bg-gray-300 block w-full py-2 px-3'  />
          </div>

          <div className='flex gap-x-5'>
            <input placeholder='Enter tags' type="text" name='tags' className='bg-gray-300 block w-full py-2 px-4' />

            <input placeholder='Enter content' type="text" name='content' className='bg-gray-300 block w-full py-2 px-3'  />
          </div>

          <button className='px-3 py-4 rounded-3xl bg-green-300'>Submit</button>
        </form>

      </div> */}

      {/* <div className='w-[700px] mx-auto bg-green-300 my-5 p-5'>

       {posts && posts.map(post=>(
            <div className='border-b-[1px] border-b-gray-100'>
                <p>Author: {post.author}</p>
                <h1>Title: {post.tile}</h1>
                <p>Content: {post.content}</p>
                <p>Tag: {post.tags}</p>
            </div>
       ))}
        
      </div> */}

      <section className='py-7'>
        <div className='grid grid-cols-1 lg:grid-cols-6 gap-3'>
            <div className='bg-white px-4 col-span-4'>
                <div className=' flex justify-between py-6  '>
                    <div>
                        <h1 className='font-semibold text-lg'>Notice Board</h1>
                    </div>
                    <div>
                        < AiFillPlusSquare className='text-2xl text-primary' onClick={()=>setOpenModal(prev => !prev)}/>
                        
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row lg:items-center items-start lg:gap-8  gap-3 justify-between lg:space-y-3 mb-8 lg:mb-0'> 
                    <div>
                        <p className=' font-semibold '>School annual sports day celebration 2025</p>
                    </div>
                    <div>
                        <p className=' bg-secondary p-1 text-white'>18 February, 2025</p>
                    </div>
                    <div className='flex gap-2'>
                        < IoEyeSharp className='text-2xl text-primary'/> <span className='font-semibold'>20k</span>
                    </div>
                    <div>
                        <BsThreeDots className='text-2xl text-primary'/>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row lg:items-center items-start lg:gap-8 gap-3 justify-between lg:space-y-3 mb-8 lg:mb-0'> 
                    <div>
                        <p className=' font-semibold '>School annual sports day celebration 2025</p>
                    </div>
                    <div>
                        <p className=' text-slate-400 p-1  '>18 February, 2025</p>
                    </div>
                    <div className='flex gap-2'>
                        < IoEyeSharp className='text-2xl text-primary'/> <span className='font-semibold'>20k</span>
                    </div>
                    <div>
                        <BsThreeDots className='text-2xl text-primary'/>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row lg:items-center items-start lg:gap-8 gap-3 justify-between lg:space-y-3 mb-8 lg:mb-0'> 
                    <div>
                        <p className=' font-semibold '>School annual sports day celebration 2025</p>
                    </div>
                    <div>
                        <p className=' text-slate-400 p-1  '>18 February, 2025</p>
                    </div>
                    <div className='flex gap-2'>
                        < IoEyeSharp className='text-2xl text-primary'/> <span className='font-semibold'>20k</span>
                    </div>
                    <div>
                        <BsThreeDots className='text-2xl text-primary'/>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row lg:items-center items-start lg:gap-8 gap-3 justify-between'> 
                    <div>
                        <p className=' font-semibold '>School annual sports day celebration 2025</p>
                    </div>
                    <div>
                        <p className='text-slate-400 p-1 '>18 February, 2025</p>
                    </div>
                    <div className='flex gap-2'>
                        < IoEyeSharp className='text-2xl text-primary'/> <span className='font-semibold'>20k</span>
                    </div>
                    <div>
                        <BsThreeDots className='text-2xl text-primary'/>
                    </div>
                </div>
            </div>

            <div className='bg-white col-span-2 px-2 py-2'>
                <h1 className='text-center font-semibold text-lg py-3'>Event Calendar</h1>
            <Calendar onChange={onChange} value={value} />
            </div>
        </div>
      </section>

       {openModal &&(
        <div className='fixed h-screen top-0 left-0 w-full px-4  py-[90px] bg-[linear-gradient(to_right,rgba(0,0,0,0.6),rgba(0,0,0,0.6))] z-[9999]'>
            <div className='bg-slate-200 lg:w-[35%] mx-auto relative px-4 py-5 h-[300px] w-full'>
                <div className='absolute right-4 cursor-pointer' > <FaTimes onClick={()=> setOpenModal(false)} /></div>
                <h1 className='text-center text-lg font-bold text-primary my-3'>Add Notice</h1>
                <form action="" >
                    <label htmlFor="event" className='text-lg'>Event Description</label>
                      <div className='w-full'>
                      <textarea name="" id="" className='bg-white w-full outline-hidden px-2'>
                        
                        </textarea>
                      </div>

                     <label htmlFor="date" className='text-lg'>Date</label>
                     <div className='w-full mb-3'>
                        <input type="date" name='' className='w-full bg-white py-1.5' />
                     </div>

                     <div className='w-full bg-primary py-2 rounded-lg'>
                        <button type='' className='w-full text-white'>
                            Add
                        </button>
                     </div>
                </form>

            </div>
        </div>
       )}

        
    </div>
  )
}

export default Dashboard