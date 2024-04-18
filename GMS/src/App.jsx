import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Copyright from './components/Copyright';
import ForgotPassword from './pages/ForgotPassword'; // Import ForgotPassword without curly braces
import SetPassword from './pages/SetPassword';
import toast, { Toaster } from 'react-hot-toast';
import FundingOppo from './pages/FundingOppo';

function App() {
  return (

    <div className='h-[100vh] sm:h-[100vh] w-[100vw] sm:w-[100vw]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/fundingOppo' element={<FundingOppo/>}/>
        <Route path='/setPassword/:userId' element={<SetPassword />} />
        <Route path='/setPassword/:id/:token' element={<SetPassword/>}/>
      </Routes>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
      <Footer />
      <Copyright />
     
    </div>

  );
}

export default App;
