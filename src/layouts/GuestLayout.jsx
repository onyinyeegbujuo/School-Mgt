import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
const GuestLayout = () => {
  return (
    <div>
      <div className=" first-letter:">
        {/*Header*/}
        <section>
          <Header />
        </section>
      </div>

      <div>
        {/*Main page Content */}
        <section className=" ">
          <Outlet />
        </section>
      </div>

      <div>
        <section className="bg-primary text-gray-300  ">
          <Footer /> 
        </section>
      </div>

    </div>
  )
}

export default GuestLayout