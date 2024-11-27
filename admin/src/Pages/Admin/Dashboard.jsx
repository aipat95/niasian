import Chart from "../../Component/box/Chart";
import SideBar from "../../Component/Sidebar";
import Table from "../../Component/box/Table"

export default function Dashboard() { 
    return (
        <div>
        <SideBar></SideBar>
            <h1>Dashboard</h1>
            <Chart></Chart>
            <Table></Table>
        </div>
    )
}
