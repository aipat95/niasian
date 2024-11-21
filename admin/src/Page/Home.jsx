import { useNavigate } from "react-router-dom";
import Logo from "../Component/Logo.jsx";

export default function Home() {
  const navigate = useNavigate();
  const handleClick = (role) => {
    if (role === "admin") {
      navigate('../Admin/Dashboard.jsx');
    } else if (role === "reception") {
      navigate('../Reception/new');
    } else {
      alert("Please select role!")
    }
  };
  

  return (
    <div className='container'>
      <Logo size='large'></Logo>
      Which role are you operating?
      <button>
        <a href="./Admin/Dashboard.jsx"> Admin</a>
     </button>
      <button onClick={() => handleClick('reception')}>
        Reception
      </button>
    </div>
)
}
