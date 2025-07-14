import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { getDelayWarnings as realGetDelayWarnings } from "../../api/inventory";

const TEST_MODE = true;

const mockDelays = [
  {
    item: "Fresh Tomatoes",
    route: "Nashik → Delhi",
    carrier: "AgriLogistics Pvt Ltd",
    expectedDelay: "2 days",
    eta: "2025-07-16",
  },
  {
    item: "Rice Bags",
    route: "Kolkata → Patna",
    carrier: "East Express",
    expectedDelay: "1 day",
    eta: "2025-07-15",
  },
  {
    item: "Olive Oil",
    route: "Mumbai Port → Jaipur",
    carrier: "OceanTrans",
    expectedDelay: "3 days",
    eta: "2025-07-18",
  },
  {
    item: "Canned Beans",
    route: "Ahmedabad → Lucknow",
    carrier: "QuickDeliver",
    expectedDelay: "4 days",
    eta: "2025-07-19",
  },
  {
    item: "Frozen Meat",
    route: "Hyderabad → Ranchi",
    carrier: "ColdChainPro",
    expectedDelay: "2 days",
    eta: "2025-07-17",
  },
];

const getDelayWarnings = () =>
  TEST_MODE ? Promise.resolve({ data: mockDelays }) : realGetDelayWarnings();

const DelayWarning = () => {
  const [delays, setDelays] = useState([]);

  useEffect(() => {
    getDelayWarnings()
      .then((res) => setDelays(res.data || []))
      .catch((err) => console.error("Failed to fetch delay warnings", err));
  }, []);

  const handleAddWarning = () => {
    alert("Delay warning form coming soon!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-yellow-700 flex items-center gap-2">
            🚚 Delivery Delay Warnings
          </h2>
          <button
            onClick={handleAddWarning}
            className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium px-4 py-2 rounded shadow"
          >
            ➕ Add Delay Warning
          </button>
        </div>

        {delays.length === 0 ? (
          <p className="text-gray-500">No current delivery delays.</p>
        ) : (
          <ul className="space-y-4">
            {delays.map((delay, index) => (
              <li
                key={index}
                className="border border-yellow-100 rounded-lg p-4 bg-yellow-50 shadow-sm hover:bg-yellow-100 transition-all"
              >
                <h4 className="text-lg font-semibold text-yellow-800 mb-1">
                  {delay.item}
                </h4>
                <div className="text-sm text-gray-700 flex flex-col sm:flex-row sm:gap-6">
                  <span>📍 Route: {delay.route}</span>
                  <span>🚛 Carrier: {delay.carrier}</span>
                  <span>⏳ Expected Delay: {delay.expectedDelay}</span>
                  <span>📅 ETA: {dayjs(delay.eta).format("DD MMM YYYY")}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DelayWarning;
