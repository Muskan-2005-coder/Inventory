import React, { useEffect, useState } from "react";
import { getLowStockAlerts } from "../../api/inventory";

const LowStockAlert = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    getLowStockAlerts()
      .then(res => setAlerts(res.data))
      .catch(err => console.error("Failed to fetch low stock alerts", err));
  }, []);

  return (
    <div className="bg-orange-100 p-4 rounded shadow">
      <h2 className="text-lg font-semibold text-orange-700 mb-2">📦 Low Stock Alerts</h2>
      {alerts.length === 0 ? (
        <p>All items are sufficiently stocked.</p>
      ) : (
        <ul className="list-disc ml-6">
          {alerts.map((item, index) => (
            <li key={index} className="text-sm">
              {item.itemName} - Remaining: {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LowStockAlert;
