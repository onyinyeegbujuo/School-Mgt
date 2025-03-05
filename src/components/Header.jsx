import { Link } from 'react-router-dom';
import { MdCall } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { IoTime } from "react-icons/io5";
import {  FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
 
import LogoImage from "../assets/images/education-cap.png";
import { FaBars } from "react-icons/fa";
import { useState } from 'react';

 const Header = () => {
  let[openNav, setOpenNav] = useState(false);
  const[scroll,setScroll] = useState(false)
  const togggleMenu =()=>{
    setOpenNav(prev => !prev)
  }

 console.log(openNav);
 window.addEventListener('scroll', ()=>{
  if(window.scrollY >=45){
    setScroll(true)
  }else{
    setScroll(false)
  }
  console.log(window.scrollY);
 })

 console.log(scroll);
 
 
 
  
  return (
      <header className={` w-full`}>
        {/* Top Bar */}
        <div className='bg-primary'>
          <div className='flex-col items-center justify-between max-w-6xl px-4 py-3 mx-auto text-gray-300 lg:flex lg:flex-row '>

            <div className=''>
              <div className='flex items-center'>
                <div className='flex items-center justify-center border rounded-full h-7 w-7 border-primary'>
                <MdCall />
                </div>
                <a href="tel:09090909090809" className='text-xs'>0080808080808</a>

              </div>
            </div>

            <div className=''>
              <div className='flex items-center'>
                <div className='flex items-center justify-center border rounded-full h-7 w-7 border-primary'>
                <IoMail />
                </div>
                <a href="mailto:xy@gmail.com" className='text-xs'>queenscollegelagos1927@gmail.com</a>

              </div>
            </div>



            <div className='shrink-0'>
              <div className='flex items-center'>
                <div className='flex items-center justify-center border rounded-full h-7 w-7 border-primary'>
                <IoTime />
                </div>
                <p className='text-sm'>
                  School Time: 08:00am - 2:00pm
                </p>

              </div>
            </div>



            <div className='pt-3 '>
              <div >
                <ul className='flex text-sm gap-x-5'>
                  <li>
                    <Link to="">
                    <FaFacebookF />
                    </Link>
                  </li>

                  <li>
                    <Link to="">
                      <BsTwitterX />
                    </Link>
                  </li>
                </ul>

              </div>
            </div>

          </div>
        </div>

        {/* Main Navigation */}
        <div className={`text-gray-300 ${scroll ? 'h-auto fixed bg-primary top-0' :'h-0 relative'} w-full`}>
          <div className='relative flex items-center justify-between max-w-6xl px-4 py-3 mx-auto'>

          
           <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <Link to=""><img src={LogoImage} alt="" className='inline-block lg:h-24 h-9' /></Link>
            </div>
            <div>
              <p className='text-sm font-semibold lg:text-xl lg:font-semibold'>Elementary School Anywhere</p>
            </div>
           </div>

           <div className={` bg-primary lg:bg-transparent lg:block flex-shrink-0 absolute lg:static left-0 top-[50px] w-full lg:w-auto lg:flex-row p-5 ${openNav ? 'block' :'hidden'}`}>
              <div className='flex flex-col items-center lg:flex lg:flex-row'>
                <ul className='items-center py-2 mt-6 text-lg font-semibold lg:flex lg:gap-4'>
                  <li className='mb-5 border-b border-b-gray-400 lg:border-none'><Link to="">Home</Link></li>
                  <li className='mb-5 border-b border-b-gray-400 lg:border-none'><Link to="">About Us</Link></li>
                  <li className='mb-5 border-b border-b-gray-400 lg:border-none'><Link to="">News/Event</Link></li>
                  <li className='mb-5 border-b border-b-gray-400 lg:border-none'><Link to="">Gallery</Link></li>
                </ul>

                <div className='bg-body lg:ml-14'>
                  <Link to="/login" className='px-5 py-2 text-lg font-semibold rounded-lg bg-secondary'>Login</Link>
                </div>
              </div>
            </div>

          </div>

          <div className='absolute  right-5 top-[23px] lg:hidden ' onClick={togggleMenu}>
            <FaBars />
          </div>
          
          

        </div>
       
      </header>
  )
}

export default Header