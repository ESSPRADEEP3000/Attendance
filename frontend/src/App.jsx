import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/home';
import Services from './components/services';
import Menu from './components/Navbar';
import Login from './Auth/Login';
import Contact from './components/contact';
import Signup from './Auth/Signup';
import Stuportfolio from './components/portfolio';
import TrainerMainpage from './components/Trainer/TrainerMainpage';
import { UserProvider } from './Auth/userProvider';
import Attendance from './components/Trainer/Attendance';
import Display from './components/Trainer/Displaystudent';
import Admin from './components/Admin/Adminpage';
import PrivateRoute from './Privateroute';
import DisplayALL from './components/Admin/Displayall';
import AddTrainer from './components/Admin/TrainerAdd';
import Error from './pagenotfound';
import TrainerData from './components/Admin/Trainerdata';
import Forgot from './Auth/forgotpass';
import About from './components/about';
function App() {
  
  return (
    <UserProvider>
    <div>
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/Signup' element={<Signup />}/>
        <Route path='/not-found' element={<Error />}/>
        <Route path='/forgotpasswd' element={<Forgot />}/>
        {/* <Route  element={<Error />}/> */}
        <Route
            path="/Studentreport/:id"
            element={<PrivateRoute element={<Stuportfolio />} role={"student"}/>}
          />
         <Route
            path="/Trainer/:id"
            element={<PrivateRoute element={<TrainerMainpage />} role={"trainer"}/>}
          />
          <Route
            path="/Trainer/:id/Trainerpage/:tech"
            element={<PrivateRoute element={<Attendance />} role={"trainer"}/>}
          />
          <Route
            path="/Trainer/:id/Displaystudent/:tech"
            element={<PrivateRoute element={<Display />} role={"trainer"}/>}
          />
          <Route
            path="/Admin/:id/"
            element={<PrivateRoute element={<Admin />} role={"admin"}/>}
          />
          <Route
            path="/Admin/:id/Displayall"
            element={<PrivateRoute element={<DisplayALL />} role={"admin"}/>}
          />
          <Route
            path="/Admin/:id/Trainerlist"
            element={<PrivateRoute element={<TrainerData />} role={"admin"}/>}
          />
          <Route
            path="/Admin/:id/Addtrainer"
            element={<PrivateRoute element={<AddTrainer />} role={"admin"}/>}
          />
      </Routes> 
    </BrowserRouter>
    </div>
    </UserProvider>
  );
}

export default App;
