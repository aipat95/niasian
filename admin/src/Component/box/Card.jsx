import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import InventoryService from "../../api/InvApi";
import "./card.css";


 export default function Card() {
    const [inventoryData, setInventoryData] = useState([]);
    const [monthlySales, setMonthlySales] = useState([]);
    const [metrics, setMetrics] = useState({
        totalProfit: 0,
        totalRevenue: 0,
        itemsOutOfStock: 0,
    });

    useEffect(() => {
        // Fetch inventory data
        const fetchInventory = async () => {
            try {
                const data = await InventoryService.getInventory();
                setInventoryData(data);

                // Calculate metrics
                const totalProfit = data.reduce((acc, item) => acc + (item.price * item.quantity - item.used), 0);
                const totalRevenue = data.reduce((acc, item) => acc + item.price * item.quantity, 0);
                const itemsOutOfStock = data.filter((item) => item.used > 0).length;

                setMetrics({ totalProfit, totalRevenue, itemsOutOfStock });
            } catch (error) {
                console.error("Error fetching inventory:", error);
            }
        };

        // Fetch monthly sales data (dummy data here)
        const fetchMonthlySales = async () => {
            const salesData = [
                { month: "January", sales: 500 },
                { month: "February", sales: 400 },
                { month: "March", sales: 600 },
                { month: "April", sales: 700 },
                { month: "May", sales: 650 },
                { month: "June", sales: 500 },
            ];
            setMonthlySales(salesData);
        };

        fetchInventory();
        fetchMonthlySales();
    }, []);

    // Data for Pie Chart
    const pieData = [
        { name: "In Stock", value: inventoryData.filter((item) => item.used === 0).length },
        { name: "Out of Stock", value: inventoryData.filter((item) => item.used > 0).length },
    ];
    const pieColors = ["#4caf50", "#f44336"]; // Green and Red

    // Render
    return (
    <div className="dashboard-container">
        <div className="dashboard">
            {/* Metrics Section */}
            <div className="metrics-container">
                <div className="metric-card">
                    <h3>Total Profit</h3>
                        <p>${metrics.totalProfit}</p>
                </div>
                <div className="metric-card">
                    <h3>Total Revenue</h3>
                        <p>${metrics.totalRevenue}</p>
                </div>
                <div className="metric-card">
                    <h3>Items Out of Stock</h3>
                        <p>{metrics.itemsOutOfStock}</p>
                </div>
            </div>
                
            {/* Charts Section */}
            <div className="charts-container">
                {/* Pie Chart */}
                <div className="chart">
                    <h3>Inventory Status</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={pieData}
                                dataKey="value"
                                nameKey="name"
                                outerRadius={60}
                                fill="#8884d8"
                            >
                            {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                            ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Bar Chart */}
                <div className="chart">
                    <h3>Monthly Sales</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={monthlySales}>
                                <XAxis dataKey="month" />
                                <YAxis />                                
                                <Tooltip />
                                <Bar dataKey="sales" fill="#3f51b5" />
                            </BarChart>
                        </ResponsiveContainer>
                </div>
            </div>
                    
            {/* Suggestions Section */}
            <div className="suggestions-container">
            <h3>Suggestions</h3>
                <ul>
                    <li>Reorder items that are out of stock.</li>
                    <li>Increase stock of high-demand items.</li>
                    <li>Consider promotional discounts for slow-moving items.</li>
                </ul>
            </div>
                
        </div>
    </div>
    );
}
