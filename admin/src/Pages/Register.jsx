import { useState } from "react";
import { MdEmail, MdOutlinePassword, MdPeople } from "react-icons/md";
import './Pages.css';
import { Link } from "react-router-dom";
import Logo from "../Component/Logo.jsx";
import { UserRegister } from "../api/auth.js";


export default function Register() {
  const [data, setData] = useState({
    role: '', email: '', password: '',
  })
  
  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const res = await UserRegister(data);//if need be change this line to the whole 7 line
      console.log("Resgister successful", res);
      navigator("/");
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
        <div className="role">
          <label>
          <MdPeople className="input-in" />
            <input name="role" type="radio" value="ADMIN" checked={data.role === "ADMIN"} onChange={inputChange} required />
            Admin
          </label>
          <label>
            <MdPeople className="input-in" />
            <input name="role" type="radio" value="RECEPTION" checked={data.role === "RECEPTION"} onChange={inputChange} required />
            Reception
          </label>
        </div>
      
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
        <button className="button" type="submit">Register</button>
        <p>If you already have account?
          <Link to={'/'} className="link"> Login</Link>
        </p>

      </form>

    </div>
  )
}
