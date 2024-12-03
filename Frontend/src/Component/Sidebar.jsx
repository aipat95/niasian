import Logo from './Logo';
import { MdOutlineDashboardCustomize, MdOutlineInventory2, MdOutlinePeopleAlt } from "react-icons/md";
import { TbHotelService, TbLogout } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { LogoutUser } from '../api/auth';
import { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import {Button} from "@mui/material";

const SideBar = () => {
    const navigation = useNavigate();
    const [expand, setExpand] = useState(true);
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
        { title: "Employee", src: '/Admin/employee', icon: <MdOutlinePeopleAlt /> },
        { title: "Service", src: '/Admin/service', icon: <TbHotelService /> }];

    return (
        <>
        <div className={`container ${expand ? "expand" : "small"}`}>        
            <div className='bars'>
                        <Button className="toggle-btn" onClick={() => setExpand(!expand)}>
                            <FaBars/>        
                    </Button>
            </div>
            <div className='bar-container'>
                    <div className='logo'>
                        <Logo size={expand ? "large":"medium"}></Logo>
                    </div>
                    <ul>
                        {Menus.map((Menu, index) => (
                            <Link to={Menu.src} key={index}>
                                <li className={location.pathname===Menu.src ? "active": ""}>            
                                    {Menu.icon}
                                    {expand &&<span>{Menu.title}</span>}
                                </li>
                            </Link>
                        ))}
                    </ul>
            </div>
            <div className='UserLog'>
                <span>Admin </span>
                    <TbLogout className='icon' onClick={handleLogout} />
                        
            </div>
        </div>
        </>
    );
};

export default SideBar;