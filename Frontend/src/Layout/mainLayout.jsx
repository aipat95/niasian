import { createBrowserRouter } from "react-router-dom"
import Login from "../Pages/Login.jsx";
import Register from "../Pages/Register.jsx";
import AdminLayout from "./AdminLayout.jsx";
import DashboardA from "../Pages/Admin/DashboardA.jsx";
import Inventory from "../Pages/Admin/Inventory.jsx";
import Employee from "../Pages/Admin/Employee.jsx";
import Service from "../Pages/Admin/Service.jsx";
import DashboardLayout from "./DashboardLayout.jsx";
import Dashboard from "../Pages/reception/pages/dashboard/Dashboard.jsx";
import CheckIn from "../Pages/reception/pages/dashboard/AddCustomers/CheckIn.jsx";
import CheckOut from "../Pages/reception/pages/dashboard/CheckOut.jsx";
import Customers from "../Pages/reception/pages/dashboard/Customers.jsx";


const mainRoute = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path:'/register', element:<Register/> },
    {
        path: "/admin",
        element:
            <AdminLayout />,
        children: [
            { path: "dashboard", element: <DashboardA /> },
            { path: "inventory", element: <Inventory /> },
            { path: "employee", element: <Employee /> },
            { path: "service", element: <Service /> }
        ]
    },
    {
        path: "/dashboard",
        element:
            <DashboardLayout />,
        children: [
            { path: "", element: <Dashboard /> },
            { path: "check-in", element: <CheckIn /> },
            { path: "check-out", element: <CheckOut /> },
            { path: "inventory", element: <Inventory />},
            { path: "customers", element: <Customers /> },
        ]
    }
]);

export default mainRoute;