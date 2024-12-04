import { createBrowserRouter } from "react-router-dom"
import AdminLayout from "../../../Layout/AdminLayout.jsx";
import Dashboard from "../../Admin/DashboardA.jsx";
import Inventory from "../../Admin/Inventory.jsx";
import Employee from "../../Admin/Employee.jsx";
import Service from "../../Admin/Service.jsx";

const adminRoutes = createBrowserRouter([
    {
        path: "/admin",
        element:
            <AdminLayout />,
        children: [
            { path: "dashboard", element: <Dashboard /> },
            { path: "inventory", element: <Inventory /> },
            { path: "employee", element: <Employee /> },
            { path: "service", element: <Service /> }
        ]
    }
]);

export default adminRoutes;