import {createBrowserRouter} from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import App from "../App.jsx";
import Home from "../pages/home/Home.jsx";
import DashboardLayout from "../pages/dashboard/DashboardLayout.jsx";
import CheckOut from "../pages/dashboard/CheckOut.jsx";
import Customers from "../pages/dashboard/Customers.jsx";
import Inventory from "../pages/dashboard/Inventory.jsx";
import CheckInN from "../pages/dashboard/AddCustomers/CheckIn.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            }
        ]
    },
    {
        path: "/dashboard",
        element:
            <DashboardLayout/>,
        children:[
            {
                path: "",
                element: <Dashboard/>
            },
            {
                path: "checkout",
                element: <CheckOut/>
            },
            {
                path: "customers",
                element: <Customers/>
            },
            {
                path: "inventory",
                element: <Inventory/>
            },
            {
                path: "test",
                element: <CheckInN/>
            }

        ]
    }
]);

export default router;
