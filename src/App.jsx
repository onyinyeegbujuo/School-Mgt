 import { BrowserRouter, Routes, Route } from "react-router-dom"
 import GuestLayout from "./layouts/GuestLayout"
import About from "./pages/About"
import Index from "./pages"
import AppLayout from "./layouts/AppLayout"
import AuthLayout from "./layouts/AuthLayout"

//Login pages
import Login from "./pages/Auth/Login"
 
//Admin Pages
import Dashboard from "./pages/admin/Dashboard"
import Students from "./pages/admin/Students"
import Teachers from "./pages/admin/Teachers"
import Add_student from "./pages/admin/Add_student"
import Edit_student from "./pages/admin/Edit_student"
import Add_teacher from "./pages/admin/Add_teacher"
import Edit_teacher from "./pages/admin/Edit_teacher"
import Teachers_details from "./pages/admin/Teachers_details"
import Add_subject from "./pages/admin/Add_subject"
import Update_subject from "./pages/admin/Update_subject"
import Subject_allocation from "./pages/admin/Subject_allocation"
import Edit_allocation from "./pages/admin/Edit_allocation"
//Student Pages
import StudentDashboard from './pages/student/Dashboard'
import Classes from "./pages/admin/Classes"
import Student_details from "./pages/admin/Student_details"









  
 
 

const App = () => {
  return (
     <BrowserRouter>
        <Routes>
          {/* This is guest page route*/}
          <Route element={<GuestLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About/>} />
          </Route>

          <Route element={<AppLayout/>}>
            {/* The Admin pages routes */}
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/students" element={<Students />}/>
            <Route path="/teachers" element={<Teachers />}/>
            <Route path="/add_student" element={<Add_student />}/>
            <Route path="/edit_student" element={<Edit_student />}/>
            <Route path="/add_teacher" element={<Add_teacher />}/>
            <Route path="/edit_teacher" element={<Edit_teacher  />}/>
            <Route path="/classes" element={<Classes  />}/>
            <Route path="/teachers_details" element={<Teachers_details />}/>
            <Route path="/student_details" element={<Student_details/>}/>
            <Route path="/add_subject" element={<Add_subject/>}/>
            <Route path="/edit_subject" element={<Update_subject/>}/>
            <Route path="/subject_allocation" element={<Subject_allocation/>}/>
            <Route path="/edit_allocation" element={<Edit_allocation/>}/>


            {/* The Student pages routes */}
            <Route path='/my_dashboard' element={<StudentDashboard />} />
          </Route>

          <Route  element={<AuthLayout/>}>
            <Route path="/login" element={<Login/>} />
          </Route>
        </Routes>
     </BrowserRouter>
  )
}

export default App
