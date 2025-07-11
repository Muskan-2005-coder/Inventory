import React, { useEffect, useState } from "react";
import { getExpiringItems } from "../../api/inventory";

const ExpiryAlerts = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getExpiringItems()
      .then(res => setItems(res.data))
      .catch(err => console.error("Failed to fetch expiry alerts", err));
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-2">⏳ Soon-to-Expire Items</h3>
      <ul className="list-disc ml-6 text-sm">
        {items.map((item, i) => (
          <li key={i}>
            {item.name} — Expiring on: <strong>{item.expiryDate}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpiryAlerts;
