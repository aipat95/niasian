import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./Login&Register/Home.jsx";
import Register from "./Login&Register/Register.jsx";
import Login from "./Login&Register/Login.jsx";

function App() {

  return (
    <>
      <div className='app-container'>
      <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/register' element={<Register />} ></Route>
            <Route path='/login' element={<Login />} ></Route>
            <Route path='*' element={<div>Page Not Found</div>}  ></Route>
           
      </Routes>
    </div>
    </>

  );
    
}

export default App
