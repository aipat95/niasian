import {Navigate, Outlet} from "react-router-dom";
import Authenticate from "../api/Authenticate.js";


function useAuth() {
    return Authenticate.isAdminLogin;
}

const ProtectedRoute = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to='/login' />
};

export default ProtectedRoute;