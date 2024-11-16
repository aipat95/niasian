import { useState } from "react";
import './Pages.css';
import Logo from '../Component/Logo';
import { Link, useNavigate } from "react-router-dom";
import { UserLogin } from "../api/data";



export default function Login() {
  const navigator = useNavigate();
  const [data, setData] = useState({
    email: '', password: ''
  });
  async function loginUser(e) {
    e.preventDefault();
    try {
      const res = await UserLogin(data);
      console.log("Login successful", res);
      if (res.data.message == "Email not exists") {
        alert("Email not exists");
      }
      else if (res.data.message == "Login Success") { navigator("/") }
      else {
        alert("Incorrect Email and Password not match");
      }

    } catch (error) {
      alert(error);
    }

  }
  //handle all input data
  const inputChange = (e) => {
    const { name, value } = e.target;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  }
  return (
    <div className="log-container">
      <Logo size='large'></Logo>
      <h1>LOGIN</h1>
      <form onSubmit={loginUser} >
        <label>Email</label>
        <input name="email" type="email" placeholder="Enter Email..." value={data.email} onChange={inputChange} required />
        <label>Password</label>
        <input name="password" type="password" placeholder="Enter Password..." value={data.password} onChange={inputChange} required />
        <button type="submit">Login</button>
      </form>
      <p>Don&apos;t have account? <Link className="link" to={'/register'}>Register</Link></p>

    </div>
  )
}

