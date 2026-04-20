import {createBrowserRouter} from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import App from "../App.jsx";
import DashboardLayout from "../pages/dashboard/DashboardLayout.jsx";
import CheckOut from "../pages/dashboard/CheckOut.jsx";
import Customers from "../pages/dashboard/Customers.jsx";
import CheckInN from "../pages/dashboard/AddCustomers/CheckIn.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [

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
                path: "test",
                element: <CheckInN/>
            }

        ]
    }
]);

export default router;
