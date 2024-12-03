import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";
import "./card.css";

export default function Table() {
    const [monthlySales, setMonthlySales] = useState([]);

    useEffect(() => {
        // Fetch monthly sales data (dummy data here)
        const salesData = [
            { month: "January", sales: 500 },
            { month: "February", sales: 400 },
            { month: "March", sales: 600 },
            { month: "April", sales: 700 },
            { month: "May", sales: 650 },
            { month: "June", sales: 500 },
        ];
        setMonthlySales(salesData);
    }, []);

    return (
        <div className="chart-container">
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
    );
}
