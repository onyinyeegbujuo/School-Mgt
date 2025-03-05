import React from 'react'
import { FaBars } from 'react-icons/fa6'
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { BsPeopleFill } from "react-icons/bs";
import { FaSchoolFlag } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { FaCalendarDays } from "react-icons/fa6";
import { FaCalendarTimes } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlineArrowDropDown } from "react-icons/md";


const sidebar = ({ onClose = () => {} }) => {
  const onopen = e =>{
    e.preventDefault();
    const id =e.currentTarget.dataset.target;
    console.log(id);
    
    const targetE1= document.getElementById(id);
    targetE1.classList.toggle('hidden')
  }
  const active_user = {
    name:"Musa Uche",
    email:"musauche@gmail.com",
    role:"admin"
  };
  return (
    <div className='flex flex-col justify-center items-center h-full py-5'>
        <section className='flex justify-end px-3 py-2'>
        <button onClick={() => onClose()} className="py-1 px-2 bg-primary text-white md:hidden">
                     {/* <FaBars/> */}
                </button>

                <span className=" ">
                <h1 className="font-semi-bold">Elementary School Anywhere</h1>
                </span>
        </section>

        <section className='flex-grow w-full px-2'>
            <ul className='space-y-1'>
                {active_user.role === 'admin' && (
                  <>

                    <li className="mb-4">
                        <Link to="/dashboard" onClick={() => onClose()} className="flex items-center gap-2"><MdDashboard /><span>Dashboard</span></Link>
                    </li>
                    <li className="mb-4">
                      <Link to="/students" onClick={() => onClose()} className="flex items-center gap-2"><BsPeopleFill /><span>Students</span></Link>
                    </li>
                    <li className="mb-4">
                      <Link to="/teachers"  onClick={() => onClose()} className="flex items-center gap-2">< GiTeacher/><span> 
                        Teachers</span></Link>
                    </li>
                  <li className="mb-4">
                    <Link className="flex items-center gap-2" onClick={() => onClose()}>< FaPeopleGroup/><span> 
                      Employess</span></Link>
                  </li>
                  <li className="mb-4">
                    <Link  to="/classes" className="flex items-center gap-2" onClick={() => onClose()}>< FaSchoolFlag/><span>Classes</span></Link>
                  </li>
                  <li className="mb-4">
                    <Link data-target='subject'className="flex items-center gap-2 mb-2" onClick={onopen}>< FaSchoolFlag/><span>Subjects</span><MdOutlineArrowDropDown/> <span></span></Link>

                    <ul id='subject' className='px-5 space-y-0.5 hidden'>
                      <li className='mb-1'>
                        <Link to='/add_subject'>Add Subject</Link>
                      </li>
                      <li>
                        <Link to='/subject_allocation'>Allocate Subject</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="mb-4">
                    <Link className="flex items-center gap-2" onClick={() => onClose()}>< FaBook/><span>Results</span></Link>
                  </li>
                  <li className="mb-4">
                    <Link className="flex items-center gap-2" onClick={() => onClose()}>< FaCalendarDays /><span>Calender</span></Link>
                  </li>
                  <li  className="mb-4">
                    <Link className="flex items-center gap-2" onClick={() => onClose()}>< FaCalendarTimes /><span>Timetable</span></Link>
                  </li>
                  <li  className="mb-4">
                    <Link className="flex items-center gap-2" onClick={() => onClose()}>< FaCalendarTimes /><span>finance</span></Link>
                  </li>
                  
                  </>
                )}


                {
                  active_user.role === 'student'&& (
                    <>

                      <li  className="mb-4">
                        <Link to='/my_dashboard' className="flex items-center gap-2">< FaCalendarTimes /><span>Subjects</span></Link>
                      </li>
                      <li  className="mb-4">
                        <Link to='/my_dashboard' className="flex items-center gap-2">< FaCalendarTimes /><span>Timetable</span></Link>
                      </li>
                      <li  className="mb-4">
                        <Link to='/my_dashboard' className="flex items-center gap-2">< FaCalendarTimes /><span>Results</span></Link>
                      </li>
                      <li  className="mb-4">
                        <Link to='/my_dashboard' className="flex items-center gap-2">< FaCalendarTimes /><span>View All Payment</span></Link>
                      </li>
                    
                    </>
                  )
                }
                
            </ul>
        </section>


        <section className='w-full px-4 py-2'>
          <Link to={'/'} className="flex items-center gap-2 py-1 px-2 bg-primary text-white rounded-md w-full" >< FiLogOut /><span>Logout</span></Link>       
        </section>
    </div>
  )
}

export default sidebar