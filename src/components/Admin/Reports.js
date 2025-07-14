import React, { useEffect, useState } from "react";
// import { getReports } from "../../api/inventory";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Reports = () => {
  const [inventoryTrend, setInventoryTrend] = useState([]);
  const [supplierEfficiency, setSupplierEfficiency] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  // REMOVE getReports() for now
  setInventoryTrend([
    { date: "2025-07-10", inventoryLevel: 120 },
    { date: "2025-07-11", inventoryLevel: 100 },
    { date: "2025-07-12", inventoryLevel: 90 },
  ]);

  setSupplierEfficiency([
    { supplier: "Supplier A", efficiency: 0.85 },
    { supplier: "Supplier B", efficiency: 0.92 },
    { supplier: "Supplier C", efficiency: 0.78 },
  ]);

  setLoading(false);
}, []);

  return (
    <div className="p-6 w-full">
      <h2 className="text-2xl font-bold mb-4">📊 AI-Powered Reports</h2>

      {loading ? (
        <p className="text-gray-600">Loading charts...</p>
      ) : (
        <>
          {/* Inventory Trend Line Chart */}
          <div className="mb-8 w-full">
            <h3 className="text-xl font-semibold mb-2">Inventory Trend</h3>
            {inventoryTrend.length > 0 ? (
              <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                  <LineChart data={inventoryTrend}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="inventoryLevel"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <p className="text-gray-500">No data available for Inventory Trend.</p>
            )}
          </div>

          {/* Supplier Efficiency Bar Chart */}
          <div className="w-full">
            <h3 className="text-xl font-semibold mb-2">Supplier Efficiency</h3>
            {supplierEfficiency.length > 0 ? (
              <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                  <BarChart data={supplierEfficiency}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="supplier" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="efficiency" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <p className="text-gray-500">No data available for Supplier Efficiency.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Reports;





