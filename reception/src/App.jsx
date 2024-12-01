
import './App.css'
import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/home/Home.jsx";
import Inventory from "./pages/dashboard/Inventory.jsx";
import DashboardLayout from "./pages/dashboard/DashboardLayout.jsx";

function App() {

  return (
    <>
    <main className='min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-secondary'>
      <Outlet/>
    </main>
    </>
  )
}

export default App
