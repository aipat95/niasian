import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./Page/Home.jsx";
import Register from "./Page/Register.jsx";
import Login from "./Page/Login.jsx";
import Dashboard from './Page/Admin/Dashboard.jsx';
import Dashboard2 from "./Page/Reception/Dashboard2.jsx";




function App() {
 
  return (
    <>
      <div className='app-container'>
        <Routes>
          <Route path='/register' element={<Register />} ></Route>
          <Route path='/login' element={<Login />} ></Route>
          <Route path='*' element={<div>Page Not Found</div>}  ></Route>
          
          <Route path='/' element={<Home />} ></Route>
          <Route path='/Admin/dashboard' element={<Dashboard />}></Route>
          <Route path='/Reception/Dash2' element={<Dashboard2 />}></Route>

            
          
        </Routes>
      </div>
    </>

  );

}

export default App
