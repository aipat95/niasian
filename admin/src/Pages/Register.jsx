import  { useState } from "react";
import {MdEmail, MdOutlinePassword, MdPeople} from "react-icons/md";
import './Pages.css';
import { Link } from "react-router-dom";
import Logo from "../Component/Logo.jsx";
import { UserRegister } from "../api/data.js";

export default function Register() {
  const [data, setData] = useState({
    role: '', email: '', password: '',
  })

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const res = await UserRegister(data);
      console.log("Resgister successful", res);
    } catch (error) {
      alert(error);
    }

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
       <div className="input-icon">
        <MdPeople className="input-in" />
        <input name="role" type="text" placeholder="Enter Role..." value={data.role} onChange={inputChange} required /></div>
        <label>Email</label>
        <div className="input-icon">  
        <MdEmail className="input-in" />
          <input type="email" name="email" placeholder="Enter Email..." value={data.email} onChange={inputChange} required />
        </div>
        <label>Password</label>
        <div className="input-icon">
          <MdOutlinePassword className="input-in" />
          <input type="password" name="password" placeholder="Enter Password..." value={data.password} onChange={inputChange} required />
          </div>
        <button type="submit">Register</button>
        <p>If you already have account?
          <Link to={'/login'} className="link"> Login</Link>
        </p>

      </form>

    </div>
  )
}
