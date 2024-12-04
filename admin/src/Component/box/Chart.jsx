import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";
import InventoryService from "../../api/InvApi";
import "./card.css";

export default function Chart() {
  const [pieData, setPieData] = useState([]);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const data = await InventoryService.getInventory();

        const itemsOutOfStock = data.filter((item) => item.used >= item.quantity).length;
        const inStock = data.length - itemsOutOfStock;

        setPieData([
          { name: "In Stock", value: inStock },
          { name: "Out of Stock", value: itemsOutOfStock },
        ]);
      } catch (error) {
        console.error("Error fetching inventory:", error);
      }
    };

    fetchInventory();
  }, []);

  return (
    <div className="chart-container">
      <h3>Inventory Status</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={60} fill="#8884d8">
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index % 2 === 0 ? "#4caf50" : "#f44336"} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
