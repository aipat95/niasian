import { useEffect, useState } from "react";
import InventoryService from "../../api/InvApi";
import "./card.css";

export default function Card() {
    const [metrics, setMetrics] = useState({
        totalProfit: 0,
        totalRevenue: 0,
        itemsOutOfStock: 0,
    });

    useEffect(() => {
        const fetchInventory = async () => {
            try {
                const data = await InventoryService.getInventory();

                const totalProfit = data.reduce(
                    (acc, item) => acc + (item.price * item.quantity - item.used),
                    0
                );
                const totalRevenue = data.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                );
                const itemsOutOfStock = data.filter((item) => item.used >= item.quantity).length;

                setMetrics({ totalProfit, totalRevenue, itemsOutOfStock });
            } catch (error) {
                console.error("Error fetching inventory:", error);
            }
        };

        fetchInventory();
    }, []);

    return (
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
    );
}

