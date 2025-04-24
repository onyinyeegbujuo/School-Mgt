import React from 'react'
import { useState } from "react";
import axios from "axios";

const Add_student = () => {

     
    // const [error, setError] = useState('');

    // const submitForm = async (ev) => {
    //     ev.preventDefault();
    //     setError('')
    //     let baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

    //     let data = new FormData(ev.target)
    //     await axios.post(`${baseUrl}/user/add_student.php`, data)
    //     .then((res) => {
    //         alert(res.data.message);
    //     })

    //     .catch((error) => {
    //         console.log(error.response.data);
    //         setError(error.response.data.message);
    //     })
         
        
    // }


    const submit = async e =>{
        e.preventDefault();
        const data = new FormData(e.target)
        const response=    await fetch('http://localhost/school_management/users/add_student.php',{
            method:"POST",
            body:data
        });

        const result = await response.json();
        console.log(result)
    }



  return (
    <div>
        <div className='mx-5 py-6'>
            <h1 className='text-center text-2xl text-primary font-semibold mb-5'>Add Student</h1>
            <div className='lg:w-2xl mx-auto  bg-white rounded-lg py-3 w-[310px]'>
                <form onSubmit={submit} action="" method='post' className='py-5 px-5'>
                    <label htmlFor="Firstname" className="font-semibold text-lg text-primary">FirstName</label>
                    <div className='lg:w-xl w-[270px] mb-3'>
                        <input type="text" name='firstname' placeholder='Firstname' className='w-full px-3 py-2 bg-slate-100 outline-hidden' />
                    </div>
                    <label htmlFor="Middlename" className="font-semibold text-lg text-primary">MiddleName</label>
                    <div className='lg:w-xl w-[270px] mb-3'>
                        <input type="text" name='middlename' placeholder='Middlename' className='w-full px-3 py-2 bg-slate-100 outline-hidden' />
                    </div>
                    <label htmlFor="Lastname" className="font-semibold text-lg text-primary">LastName</label>
                    <div className='lg:w-xl w-[270px] mb-3'>
                        <input type="text" name='lastname' placeholder='Lastname' className='w-full px-3 py-2 bg-slate-100 outline-hidden' />
                    </div>
                    <label htmlFor="regNo" className="font-semibold text-lg text-primary">Reg No</label>
                    <div className='lg:w-xl w-[270px] mb-3'>
                        <input type="text" name='regno' placeholder='Reg No' className='w-full px-3 py-2 bg-slate-100 outline-hidden' />
                    </div>
                    <label htmlFor="gender" className="font-semibold text-lg text-primary">Gender</label>
                    <div className='lg:w-xl w-[270px] mb-3'>
                        <select name="gender" id="" className='w-full px-3 py-2 bg-slate-100 outline-hidden'>
                            <option value=""></option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <label htmlFor="birthdate" className="font-semibold text-lg text-primary">Date of Birth</label>
                    <div className='lg:w-xl w-[270px] mb-3'>
                        <input type="date" name='birthdate' placeholder='Date of Birth' className='w-full px-3 py-2 bg-slate-100 outline-hidden' />
                    </div>
                    <label htmlFor="" className="font-semibold text-lg text-primary">Address</label>
                    <div className='lg:w-xl w-[270px] mb-3'>
                        <input type="text" name='address' placeholder='Address' className='w-full px-3 py-2 bg-slate-100 outline-hidden' />
                    </div>
                    <label htmlFor="phone" className="font-semibold text-lg text-primary">Phone</label>
                    <div className='lg:w-xl w-[270px] mb-3'>
                        <input type="text" name='phone' placeholder='Phone' className='w-full px-3 py-2 bg-slate-100 outline-hidden' />
                    </div>
                    {/* <label htmlFor="class" className="font-semibold text-lg text-primary">Class</label>
                    <div className='lg:w-xl w-[270px] mb-5'>
                         <div className='lg:w-xl w-[270px]'>
                            <select name="section" id="" className='w-full px-3 py-2 bg-slate-100 outline-hidden mb-1'>
                                <option value="">SECTION</option>
                                
                                <option value="">CRECHE</option>
                                <option value="">NURSERY</option>
                                <option value="">PRIMARY</option>
                                <option value="">SECONDARY</option>
                            </select>
                         </div>
                         <div className='lg:w-xl w-[270px]'>
                         <select name="classname" id="" className='w-full px-3 py-2 bg-slate-100 outline-hidden mb-1'>
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
                          
                    </div> */}
                    <label htmlFor="parentsname" className="font-semibold text-lg text-primary">Parent's Name</label>
                    <div className='lg:w-xl w-[270px] mb-3'>
                        <input type="text" name='parentname' placeholder='Parents name' className='w-full px-3 py-2 bg-slate-100 outline-hidden' />
                    </div>
                    <label htmlFor="parentsAddress" className="font-semibold text-lg text-primary">Parents Address</label>
                    <div className='lg:w-xl w-[270px] mb-3'>
                        <input type="text" name='parentaddress' placeholder='Parents Address' className='w-full px-3 py-2 bg-slate-100 outline-hidden' />
                    </div>
                    <label htmlFor="parentsphone" className="font-semibold text-lg text-primary">Parents Phone</label>
                    <div className='lg:w-xl w-[270px] mb-3'>
                        <input type="text" name='parentphone' placeholder='Parents phone' className='w-full px-3 py-2 bg-slate-100 outline-hidden' />
                    </div>
                    <label htmlFor="email" className="font-semibold text-lg text-primary">Email</label>
                    <div className='lg:w-xl w-[270px] mb-3'>
                        <input type="email" name='email' placeholder='Email' className='w-full px-3 py-2 bg-slate-100 outline-hidden' />
                    </div>
                    <label htmlFor="password" className="font-semibold text-lg text-primary">Password</label>
                    <div className='lg:w-xl w-[270px] mb-3'>
                        <input type="password" name='password' placeholder='Password' className='w-full px-3 py-2 bg-slate-100 outline-hidden' />
                    </div>
                    <label htmlFor="studentimage" className="font-semibold text-lg text-primary">Student Image</label>
                    <div className='lg:w-xl w-[270px] mb-7 '>
                        <input type="file" name='studentimage' className='w-full px-3 py-2 bg-slate-100 outline-hidden' />
                    </div>
                    <div className='lg:w-xl w-[270px]  flex gap-3'>
                        <button type='submit' name='' className='w-full px-3 py-2 outline-hidden text-white font-semibold lg:w-[400px] bg-secondary rounded-lg cursor-pointer'>ADD</button>
                        <button type='submit' name='' className='w-full px-3 py-2 outline-hidden text-white font-semibold lg:w-[400px] bg-body rounded-lg cursor-pointer'>RESET</button>
                    </div>

                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default Add_student