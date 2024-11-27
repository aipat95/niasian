import Logo from './Logo';
import { MdOutlineDashboardCustomize, MdOutlineInventory2 } from "react-icons/md";
import { TbHotelService, TbLogout } from "react-icons/tb";
import { PiTentDuotone } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { LogoutUser } from '../api/auth';
// import { useState } from 'react';
// import { FaBars } from "react-icons/fa6";

const SideBar = () => {
    const navigation = useNavigate();
    const handleLogout = async () => {
        try {
            await LogoutUser();
            alert("You have been logged out successfully!");
            navigation("/");
        } catch (error) {
            console.error("Error", error);
        }
    }
    const Menus = [
        { title: "Dashboard", src: "/Admin/dashboard", icon: <MdOutlineDashboardCustomize /> },
        { title: "Inventory", src: "/Admin/inventory", icon: <MdOutlineInventory2 /> },
        { title: "Tent", src: '/Admin/tent', icon: <PiTentDuotone /> },
        { title: "Service", src: '/Admin/service', icon: <TbHotelService /> }];
    // const [expand, setExpand] = useState(false);

    return (
        <>
             {/* Hamburger icon */}
            {/* <div className='bars' onClick={() => setExpand(!expand)}>
                <FaBars/>
            </div> */}
            {/* Logout */} 
            {/* <div className={`bar-container ${expand ? 'expand' : 'small'}`}> */}
            <div className='bar-container'>
                <div className='logo'>
                    <Logo size='large' ></Logo>
                </div>
           <ul>
                    {Menus.map((Menu, index) => (
                    <Link to={Menu.src} key={index}>
                    <li >
                        
                            {Menu.icon}
                            <span>{Menu.title}</span>
                        </li>
                    </Link>
                    ))}
            </ul>   
            </div>
            <div className='UserLog'>
                <div className='logo'>
                    <Logo size='small' ></Logo>
                </div>
                <span>Admin </span>
                <TbLogout className='icon' onClick={handleLogout} />
            </div>  
    </> )
}

export default SideBar;