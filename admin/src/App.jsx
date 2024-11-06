import { Routes, Route } from 'react-router-dom';
import './App.css'
import Nav from './Component/Nav';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';


function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/register' element={<Register />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
      </Routes> 
    </>
  );
    
}

export default App
