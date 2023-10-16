
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup';
import LoginFreelancer from './pages/Login/LoginFreelancer';
import LoginClient from './pages/Login/LoginClient';
import Home from './pages/Home';
import FreelancerDashboard from './Users/Freelancer/Dashboard/Dashboard';
import ContactUs from './components/ContactUs';
import Blog from './pages/Blog';
import EditProfile from './Users/Freelancer/Dashboard/DashboardComponents/EditProfile';
import ClientDashboard from './Users/Client/Dashboard/Dashboard'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/loginfreelancer' element={<LoginFreelancer/>}/>
          <Route path='/loginclient' element={<LoginClient/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/freelancerdashboard' element={<FreelancerDashboard/>}/>
          <Route path='/clientdashboard' element={<ClientDashboard/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/editprofile' element={<EditProfile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
