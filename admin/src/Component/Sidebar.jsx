import Logo from './Logo';
import { MdOutlineDashboardCustomize, MdOutlineInventory2 } from "react-icons/md";
import { TbHotelService, TbLogout } from "react-icons/tb";
import { PiTentDuotone } from "react-icons/pi";
import { Link,useNavigate } from "react-router-dom";
import { LogoutUser } from '../api/data';



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
    return (
        <div className="bar-container">
            <div className='UserLog'> 
                <span>Admin </span>
        <TbLogout className='icon' onClick={handleLogout} />
            </div>
        <div >
            <Logo size='large'></Logo>
            <ul>
                {Menus.map((Menu, index) => (
                    <li key={index}>
                        <Link to={Menu.src}>
                            {Menu.icon}
                            <span>{Menu.title}</span></Link>
                    </li>)
                )}
            </ul>
        </div>
    </div>
    )
}

export default SideBar;