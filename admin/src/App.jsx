import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home.jsx";
import Register from "./Pages/Register.jsx";
import Login from "./Pages/Login.jsx";
import Employee from './Pages/Admin/Employee.jsx';
import Service from './Pages/Admin/Service.jsx';
import Inventory from './Pages/Admin/Inventory.jsx';
import Tent from './Pages/Admin/Tent.jsx';
import Dashboard from './Pages/Admin/Dashboard.jsx'
import Team from './Pages/Reception/team.jsx';

function App() {

  return (
    <>
      <div className='app-container'>
      <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/register' element={<Register />} ></Route>
          <Route path='/login' element={<Login />} ></Route>
          <Route path='*' element={<div>Page Not Found</div>}  ></Route>
          <Route path='/Admin/dashboard' element={<Dashboard />} ></Route>
          <Route path='/Admin/tent' element={<Tent />} ></Route>
          <Route path='/Admin/inventory' element={<Inventory />} ></Route>
          <Route path='/Admin/service' element={<Service />} ></Route>
          <Route path='/Admin/employee' element={<Employee />} ></Route>
          <Route path='/Reception/team' element={<Team />} ></Route>

           
      </Routes>
    </div>
    </>

  );
    
}

export default App
