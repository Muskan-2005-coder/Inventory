import React, { useEffect, useState } from "react";
import { getReports } from "../../api/inventory";
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

  useEffect(() => {
    getReports()
      .then((res) => {
        setInventoryTrend(res.data.inventoryTrend || []);
        setSupplierEfficiency(res.data.supplierEfficiency || []);
      })
      .catch((err) => {
        console.error("Failed to fetch reports", err);
      });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📊 AI-Powered Reports</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Inventory Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
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

      <div>
        <h3 className="text-xl font-semibold mb-2">Supplier Efficiency</h3>
        <ResponsiveContainer width="100%" height={300}>
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
    </div>
  );
};

export default Reports;
