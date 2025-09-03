import logo from './logo.svg';
import './App.css';
import Home from './home/Home';
import Listofcakes from './Listofcakes/Listofcakes';
import Detailedpage from './Detailedpage/Detailedpage'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import  Buyingpage from './Buyingpage/Buyingpage'
import Register from './Register/Register'
import Login from './Login/Login'
import Myorders from './Myorders/Myorders'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './body/Contact';
import Aboutus from './body/Aboutus';
import Myprofile from './Myprofile/Myprofile';
import Orderdetails from './Myorders/Orderdetails';
import CakeProvider from '../src/Context/cakecontext'
function App() {
  
  return (
    <div>
       <CakeProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/list" element={<Listofcakes />} />
        <Route path="/detailed/:id" element={<Detailedpage />} />
        <Route path="/buy" element={<Buyingpage />} />
        <Route path="/logout" element={<Login />} />
        <Route path="/myorders" element={<Myorders />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/about" element={<Aboutus />} />
         <Route path="/myprofile" element={<Myprofile />} />
          <Route path="/orderdetails" element={<Orderdetails />} />
        
      </Routes>
       <ToastContainer></ToastContainer>
      </BrowserRouter>
</CakeProvider>
    </div>
  );
}

export default App;

