import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const CarbonTracker = () => {
  const [carbonData, setCarbonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);

  useEffect(() => {
    const mock = {
      totalCarbonFootprint: 2450, // kg CO₂
      breakdown: [
        { mode: "🚛 Truck", footprint: 1200 },
        { mode: "🚆 Train", footprint: 450 },
        { mode: "🚢 Ship", footprint: 600 },
        { mode: "✈️ Air", footprint: 200 },
      ],
    };

    setTimeout(() => {
      setCarbonData(mock);
      setLoading(false);
    }, 500);
  }, []);

  if (loading)
    return (
      <p className="text-center mt-10 text-gray-600 text-lg">
        Loading carbon footprint data...
      </p>
    );
  if (error)
    return (
      <p className="text-red-500 text-center mt-10 text-lg">{error}</p>
    );

  const chartData = carbonData.breakdown.map((item) => ({
    name: item.mode,
    footprint: item.footprint,
  }));

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-white p-6">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-green-800 text-center">
          🌿 Environmental Impact Tracker
        </h2>

        <p className="text-xl text-gray-700 text-center">
          <strong>Total Carbon Footprint:</strong>{" "}
          <span className="text-red-500">
            {carbonData.totalCarbonFootprint} kg CO₂
          </span>
        </p>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            📊 Emissions Breakdown by Transport Mode
          </h3>

          <ul className="list-disc list-inside text-lg text-gray-700 space-y-1 mb-6">
            {carbonData.breakdown.map(({ mode, footprint }, i) => (
              <li key={i}>
                {mode}: <strong>{footprint} kg CO₂</strong>
              </li>
            ))}
          </ul>

          {/* Manual Bar Chart */}
          <div className="mt-6">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="footprint" fill="#4ade80" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonTracker;
