import { Outlet } from "react-router-dom";
import SideBar from "../Component/Sidebar.jsx"; // Your sidebar code

function AdminLayout() {
    return (
        <div className="admin-layout">
            <SideBar />
            <main className="content">
                <Outlet />
            </main>
        </div>
    );
}

export default AdminLayout;
