import React from 'react';
import { GiCampingTent } from "react-icons/gi";

const Navbar = () => {
    const Menus = [
        { title: "Overview", src: "Overview" },
        { title: "Inventory", src: "Inventory" },
        { title: "Customers", src: "Customers" },
        { title: "Activities", src: "Activities"}];
    return (
        <div className="flex">
            <div className="bg-red-600 h-screen p-16 pt-8">
                <div className="flex gap-x-4 items-center">
                    <h1 className={`text-white origin-left font-medium text-xl`}>
                        Logo Camp
                        <GiCampingTent />
                    </h1>
                </div>
                <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                <li key={index} className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
 ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}>
                <span className={`origin-left duration-200`}>
                    {Menu.title}
                </span>
                 </li>))}
                </ul>
            </div>
        </div>


)
}

export default Navbar