import { useNavigate } from "react-router-dom";
import Logo from "../Component/Logo.jsx";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <Logo size='large'></Logo>
      Which role are you operating?
      <button onClick={()=> navigate("./Admin/Dashboard")}>
        Admin
      </button>
      <button onClick={() => navigate('./Reception/Dashboard')}>
        Reception
      </button>
    </div>
  )
}
