import { Routes, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import Register from "./Pages/Register.jsx";
import Login from "./Pages/Login.jsx";
import Service from './Pages/Admin/pages/Service.jsx';
import Inventory from './Pages/Admin/pages/Inventory.jsx';
import Dashboard from './Pages/Admin/Dashboard.jsx'
import Employee from './Pages/Admin/Employee.jsx';
import Routers from './Pages/reception/routers/router.jsx';
import Reception from './Pages/reception/routers/router.jsx';

function App() {

  return (
    <>
      <div className='app-container'>
        <Routes>
          {/* Public route */}
          <Route path='/register' element={<Register />} ></Route>
          <Route path='/' element={<Login />} ></Route>
          {/* Admin route */}
          <Route path='/admin/dashboard' element={<Dashboard />} ></Route>
          <Route path='/admin/employee' element={<Employee />} ></Route>
          <Route path='/admin/inventory' element={<Inventory />} ></Route>
          <Route path='/admin/service' element={<Service />} ></Route>
          {/* Reception route */}


          {/* Not found route */}
          <Route path='*' element={<div>Page Not Found</div>}  ></Route>

        </Routes>
      </div>
    </>

  );

}

export default App
