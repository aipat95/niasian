import { useState } from "react";
import './Pages.css';
import Logo from '../Component/Logo';
import { Link, useNavigate } from "react-router-dom";
import { UserLogin } from "../api/data";
import { MdEmail, MdOutlinePassword } from "react-icons/md";



export default function Login() {
  const navigator = useNavigate();
  const [data, setData] = useState({
    email: '', password: ''
  });
  async function loginUser(e) {
    e.preventDefault();
    try {
      const res = await UserLogin(data);//if need change here
      console.log('Login succesfull', res);      
      navigator('/');
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
        <div className="input-icon">
          <MdEmail className="input-in" />
          <input type="email" name="email" placeholder="Enter Email..." value={data.email} onChange={inputChange} required />
        </div>
        <label>Password</label>
        <div className="input-icon">
          <MdOutlinePassword className="input-in" />
          <input type="password" name="password" placeholder="Enter Password..." value={data.password} onChange={inputChange} required />
        </div>
        <button type="submit">Login</button>

      </form>
      <p>Don&apos;t have account? <Link className="link" to={'/register'}>Register</Link></p>

    </div>
  )
}

