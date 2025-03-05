 import { Link } from 'react-router-dom';
 import LoginImage from '../../assets/images/white-sch-girls.jpg';

const Login = () => {
  return (
   <>
     {/* <div className='max-w-6xl mx-auto bg-red-500 fixed w-full'>
      <div className='flex items-center justify-between shadow-lg px-4 py-4 mt-7 rounded-3xl'>
        <div>
          <h1 className='lg:text-lg text-sm font-bold text-primary'>Elementary School Anywhere</h1>
        </div>
        <div className='px-4 py-1 rounded-3xl bg-primary'>
          <h1> <Link to="/" className='lg:text-sm font-bold text-white text-xs'>Go to Home</Link></h1>
        </div>
      </div>
    </div> */}

    <div className={`h-[600px] bg-right bg-cover `} style={{backgroundImage:`linear-gradient(105deg,rgb(255,255,255) 40%,rgba(255,255,255,0.6) 50%, transparent 50%),url(${LoginImage})`}}>
      <div className='lg:mx-28 lg:py-20   lg:w-[355px]  lg:px-7 mx-10'>
        <h1 className='text-3xl font-bold text-primary pb-9 pt-3'>Elementary School <span className='text-body'>Anywhere</span></h1>
        <p className='text-slate-500 pb-4'>Enter your Username and Password to sign in </p>
        <form action="">
          <label htmlFor="username" className='text-sm mx-2 font-medium text-primary'>Username</label>
          <div className=' w-[270px] pb-4'>
            <input type="text" name="username" placeholder='Username' required className='border-2 w-full py-2 rounded-xl px-2 outline-fuchsia-400'/>
          </div>
          <label htmlFor="password" className='text-sm mx-2 font-medium text-primary' required>Password</label>
          <div className='w-[270px] pb-4'>
            <input type="password" name="password" placeholder='Password' className='border-2 w-full py-2 rounded-xl px-2 outline-fuchsia-400 '/>
          </div>
          <div className='pb-4'>
            <input type="checkbox" name="remember" className='mr-2 ' />
            <label htmlFor="remember" className='font-medium text-primary'>Remember Me</label>
          </div>
          <div className='w-[270px] text-center pb-5 text-white font-medium'>
            <button type='submit' className='  w-full py-2 rounded-xl px-2 bg-body'>SIGN IN</button>
          </div>

          <div className='text-center  w-[240px] mx-3'>
          <p className='text-sm text-black lg:text-slate-500 font-medium'>Forgotten Password? <Link to="#" className='lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r from-primary to bg-secondary font-bold text-white'>Click here</Link></p>
        </div>

        </form>

        
      </div>
        
      </div>

   </>


  )
}

export default Login