import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home.jsx";
import Register from "./Pages/Register.jsx";
import Login from "./Pages/Login.jsx";

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
