import { Outlet } from "react-router-dom"
import Sidebar from "../components/sidebar"
import { useState } from "react"
import { FaBars } from "react-icons/fa";
import AdminImage from "../assets/images/christina-morrillo.jpg"
import { FaMessage } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoNotifications } from "react-icons/io5";
import { PiHandWavingBold } from "react-icons/pi";

const AppLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-slate-100 min-h-screen">
        {/*sidebar */}
        <section className={`fixed h-dvh w-52 bg-primary ${isOpen ? 'left-0' : '-left-64'} top-[100px] lg:top-0 text-slate-300 lg:left-0 z-50`}>
            <Sidebar onClose={() => setIsOpen((prev) => !prev)} /> 

        </section>

        {/* main content */}
         <main className="lg:ml-52">
          <header className="min-h-10 bg-white w-full sticky top-0 px-4 py-2 z-50">
            {/* Toggle Button */}
            <button onClick={() => setIsOpen((prev) => !prev)} className="py-1 px-2 bg-orange-400 text-white lg:hidden">
              <FaBars/>
            </button>
            {/*Top Navigation */}

            <div className="flex items-center justify-between   py-2 z-30">
              <div>
                <h1 className="flex items-center gap-2 text-2xl font-bold text-primary">Welcome <span className="text-yellow-500"><PiHandWavingBold/></span></h1>
              </div>
              <div className="lg:flex items-center gap-3   w-64   px-3 py-1 rounded-3xl bg-slate-50 hidden">
                <label htmlFor="search" className="text-2xl text-slate-400"><CiSearch/></label>
                <input type="search" name="search" placeholder="search students, staffs..."  className="border-hidden outline-hidden"/>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className=" bg-slate-200 w-8 h-8  rounded-full  flex items-center justify-center ">
                  <FaMessage/>
                </div>
                <div className=" bg-slate-200 w-8 h-8  rounded-full  flex items-center justify-center ">
                  <IoNotifications/>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-10 h-10 bg-white rounded-full overflow-hidden">
                    <img src={AdminImage} alt="image" className="w-full h-full object-cover"/>
                  </div>
                  <div>
                    <h1 className="text-sm font-bold text-primary">Onyinye Mavis</h1>
                    <p className="text-xs text-primary">Admin</p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* The main Unique content of each page is render here with the outlet component */}
          <div>
            <Outlet/>
          </div>
         </main>

    </div>
  )
}

export default AppLayout