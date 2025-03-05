import React from 'react'

const Add_teacher = () => {
  return (
    <div>
        <div className='mx-5 py-6'>
            <h1 className='text-center text-2xl text-primary font-semibold mb-5'>Add Teacher</h1>
            <div className='lg:w-2xl mx-auto  bg-white rounded-lg py-3 w-[310px]'>
                <form action="" method='' className='py-5 px-5'>
                    <label htmlFor="Firstname" className="font-semibold text-lg text-primary">FirstName</label>
                    <div className='lg:w-xl w-[270px] mb-3'>
                        <input type="text" name='' placeholder='Firstname' className='w-full px-3 py-2 bg-slate-100 outline-hidden' />
                    </div>
                    <label htmlFor="Middlename" className="font-semibold text-lg text-primary">MiddleName</label>
                    <div className='lg:w-xl w-[270px] mb-3'>
                        <input type="text" name='' placeholder='Middlename' className='w-full px-3 py-2 bg-slate-100 outline-hidden' />
                    </div>
                    <label htmlFor="Lastname" className="font-semibold text-lg text-primary">LastName</label>
                    <div className='lg:w-xl w-[270px] mb-3'>
                        <input type="text" name='' placeholder='Lastname' className='w-full px-3 py-2 bg-slate-100 outline-hidden' />
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
                        <input type="date" name='' placeholder='Date of Birth' className='w-full px-3 py-2 bg-slate-100 outline-hidden' />
                    </div>

                    <label htmlFor="gender" className="font-semibold text-lg text-primary">Qualification</label>
                    <div className='lg:w-xl w-[270px] mb-3'>
                        <select name="gender" id="" className='w-full px-3 py-2 bg-slate-100 outline-hidden'>
                            <option value=""></option>
                            <option value="olevel">O' LEVEL</option>
                            <option value="hnd">HND</option>
                            <option value="bsc">BSC</option>
                            <option value="phd">PHD</option>
                        </select>
                    </div>

                    <label htmlFor="" className="font-semibold text-lg text-primary">Address</label>
                    <div className='lg:w-xl w-[270px] mb-3'>
                        <input type="text" name='' placeholder='Address' className='w-full px-3 py-2 bg-slate-100 outline-hidden' />
                    </div>
                    <label htmlFor="phone" className="font-semibold text-lg text-primary">Phone</label>
                    <div className='lg:w-xl w-[270px] mb-3'>
                        <input type="text" name='' placeholder='Phone' className='w-full px-3 py-2 bg-slate-100 outline-hidden' />
                    </div>
                    <label htmlFor="class" className="font-semibold text-lg text-primary">Subject</label>
                    <div className='lg:w-xl w-[270px] mb-3'>
                        <input type="text" name='' placeholder='class' className='w-full px-3 py-2 bg-slate-100 outline-hidden' />
                    </div>

                    <label htmlFor="class" className="font-semibold text-lg text-primary">Salary</label>
                    <div className='lg:w-xl w-[270px] mb-3'>
                        <input type="text" name='' placeholder='salary' className='w-full px-3 py-2 bg-slate-100 outline-hidden' />
                    </div>

                    <label htmlFor="class" className="font-semibold text-lg text-primary">Hire Date</label>
                    <div className='lg:w-xl w-[270px] mb-3'>
                        <input type="date" name='' placeholder='salary' className='w-full px-3 py-2 bg-slate-100 outline-hidden' />
                    </div>

                    <label htmlFor="email" className="font-semibold text-lg text-primary">Email</label>
                    <div className='lg:w-xl w-[270px] mb-3'>
                        <input type="email" name='' placeholder='Email' className='w-full px-3 py-2 bg-slate-100 outline-hidden' />
                    </div>
                    <label htmlFor="password" className="font-semibold text-lg text-primary">Password</label>
                    <div className='lg:w-xl w-[270px] mb-3'>
                        <input type="password" name='' placeholder='Password' className='w-full px-3 py-2 bg-slate-100 outline-hidden' />
                    </div>
                    <label htmlFor="studentimage" className="font-semibold text-lg text-primary">Teacher Image</label>
                    <div className='lg:w-xl w-[270px] mb-7 '>
                        <input type="file" className='w-full px-3 py-2 bg-slate-100 outline-hidden' />
                    </div>
                    <div className='lg:w-xl w-[270px]    flex gap-3'>
                        <button type='' name='' className='w-full px-3 py-2 outline-hidden text-white font-semibold lg:w-[400px] bg-secondary rounded-lg'>ADD</button>
                        <button type='' name='' className='w-full px-3 py-2 outline-hidden text-white font-semibold lg:w-[400px] bg-body rounded-lg'>RESET</button>
                    </div>

                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default Add_teacher