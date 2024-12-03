import Card from "../../Component/box/Card";
import Chart from "../../Component/box/Chart";
import SideBar from "../../Component/Sidebar";
import Table from "../../Component/box/Table";
import Suggest from "../../Component/box/Suggest";
// import SideBar from "../../Component/navbar";
export default function Dashboard() {

    return (
        <>
        <div className="dashboard-container">    
            <SideBar />   
            <div className="dashboard">
                    <h1>Dashboard</h1>
                    <div className="dash-box">

                    <div className="CC-container">
                        <Card/> 
                    </div>    
                    <div className="CT-container">
                            <Chart/><Table/>
                    </div>
                    <div className="TS-container">
                        <Suggest />
                        </div>
                    </div>
            </div>   
        </div>
        </>
    )
}
