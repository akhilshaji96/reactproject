import logo from './logo.svg';
import './App.css';
import Home from './home/Home';
import Listofcakes from './Listofcakes/Listofcakes';
import Detailedpage from './Detailedpage/Detailedpage'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import  Buyingpage from './Buyingpage/Buyingpage'
import Register from './Register/Register'
import Login from './Login/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/list" element={<Listofcakes />} />
        <Route path="/detailed/:id" element={<Detailedpage />} />
        <Route path="/buy" element={<Buyingpage />} />
        <Route path="/logout" element={<Login />} />
      </Routes>
       <ToastContainer></ToastContainer>
      </BrowserRouter>

    </div>
  );
}

export default App;

