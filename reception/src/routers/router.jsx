import {createBrowserRouter} from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import App from "../App.jsx";
import Home from "../pages/home/Home.jsx";
import DashboardLayout from "../pages/dashboard/DashboardLayout.jsx";
import CheckOut from "../pages/dashboard/CheckOut.jsx";
import CheckIn from "../pages/dashboard/AddCustomers/CheckIn.jsx";

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
                path: "check-in",
                element: <CheckIn/>
            },

            {
                path: "check-out",
                element: <CheckOut/>
            },
            {
                path: "edit-customer",
                element: <></>
            },
            {
                path: "activity",
                element: <></>
            }
        ]
    }
]);

export default router;
