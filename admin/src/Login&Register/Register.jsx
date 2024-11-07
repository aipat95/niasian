import { useState } from "react";
import './Pages.css';


import {Link,useNavigate} from "react-router-dom";
import Logo from "../Component/Logo.jsx";

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    role: '', email: '', password: '',
  })
  //store in locally
  const registerUser = async(e) => {
     e.preventDefault();
    navigate('/login');
//not yet connect with backend/api
   }
  const inputChange = (e) => {
    const { name, value } = e.target;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  }
  return (
    <div className="reg-container">
      <Logo size='large'></Logo>
      <h1>REGISTRATION</h1>
      <form onSubmit={registerUser}>
        <label>Role</label>
          <input name="role" type="text" placeholder="Enter Role..." value={data.role} onChange={inputChange} required/>
        <label>Email</label>
        <input type="email" name="email" placeholder="Enter Email..." value={data.email} onChange={inputChange} required/>
        <label>Password</label>
        <input type="password" name="password" placeholder="Enter Password..." value={data.password} onChange={inputChange} required/>
        <button type="submit">Register</button>
        <p>If you already have account? 
          <Link to={'/login'} className="link"> Login</Link>
        </p>

      </form>

    </div>
  )
}
