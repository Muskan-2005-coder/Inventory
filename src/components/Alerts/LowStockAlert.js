import React, { useEffect, useState } from "react";
import { getLowStockAlerts as realGetLowStockAlerts } from "../../api/inventory";

const TEST_MODE = true;

const mockAlerts = [
  { itemName: "Wheat Flour", quantity: 12, threshold: 20 },
  { itemName: "Cooking Oil", quantity: 8, threshold: 15 },
  { itemName: "Sugar", quantity: 5, threshold: 10 },
  { itemName: "Milk Packets", quantity: 3, threshold: 10 },
  { itemName: "Salt", quantity: 6, threshold: 12 },
];

const getLowStockAlerts = () =>
  TEST_MODE ? Promise.resolve({ data: mockAlerts }) : realGetLowStockAlerts();

const LowStockAlert = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    getLowStockAlerts()
      .then((res) => setAlerts(res.data || []))
      .catch((err) => console.error("Failed to fetch low stock alerts", err));
  }, []);

  const handleAddItem = () => {
    alert("Low stock form popup coming soon!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-orange-700 flex items-center gap-2">
            📦 Low Stock Alerts
          </h2>
          <button
            onClick={handleAddItem}
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded shadow"
          >
            ➕ Add Low Stock Item
          </button>
        </div>

        {alerts.length === 0 ? (
          <p className="text-gray-600">All items are sufficiently stocked.</p>
        ) : (
          <ul className="grid sm:grid-cols-2 gap-4">
            {alerts.map((item, index) => (
              <li
                key={index}
                className="border border-orange-200 rounded-lg p-4 bg-orange-50 shadow-sm hover:bg-orange-100 transition-all"
              >
                <h4 className="text-lg font-semibold text-orange-800 mb-1">
                  {item.itemName}
                </h4>
                <p className="text-sm text-gray-700">
                  🔢 Remaining: <strong>{item.quantity}</strong>
                </p>
                <p className="text-sm text-gray-700">
                  ⚠️ Threshold: <strong>{item.threshold}</strong>
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LowStockAlert;
