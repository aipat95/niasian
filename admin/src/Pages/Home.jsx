import { useNavigate } from "react-router-dom";
import Logo from "../Component/Logo.jsx";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <Logo size='large'></Logo>
      <p>Which role are you operating?</p>
      {/* still not working */}
      <button onClick={() => navigate("./Admin/dashboard")}>
        Admin
      </button>
      <button onClick={() => navigate("./Reception/team")}>
        Reception
      </button>
    </div>
  )
}
