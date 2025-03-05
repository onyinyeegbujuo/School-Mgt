import { Link } from 'react-router-dom';
import {  FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

 const Footer = () => {
  return (
    <div  className='max-w-6xl mx-auto py-7'>
      <div className='flex items-center justify-between pb-5 lg:flex-row flex-col-reverse gap-5'>
      <div>
        <ul className='flex items-center gap-5'>
          <li><Link to="#">Home</Link></li>
          <li><Link to="#">About Us</Link></li>
          <li><Link to="#">News/Event</Link></li>
          <li><Link to="#">Gallery</Link></li>
          <li><Link to="#">Login</Link></li>
        </ul>
      </div>

      <div >
        <ul className='flex items-center gap-5'>
          <li><Link to="#">
            < FaFacebookF/>
          </Link></li>
          <li><Link to="#">
            <BsTwitterX/>
          </Link></li>
        </ul>
      </div>
    </div>
    <div className='px-8 lg:px-0'>
      <p> Copyright&copy;2025, Elementary School Anywhere | Powered by: <Link to="#" className='font-bold'>Mavis</Link> </p>
    </div>
    </div>
  )
}

export default Footer