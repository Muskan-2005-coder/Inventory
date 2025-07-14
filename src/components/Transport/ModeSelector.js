import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";

const ModeSelector = () => {
  const [modes, setModes] = useState([]);
  const [selectedMode, setSelectedMode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setModes([
        {
          id: 1,
          icon: "🚛",
          name: "Truck",
          description: "Heavy ground transport for large distances",
          efficiency: "Medium",
          co2PerKm: 0.25,
        },
        {
          id: 2,
          icon: "🚆",
          name: "Train",
          description: "Eco-friendly rail transport for long routes",
          efficiency: "High",
          co2PerKm: 0.10,
        },
        {
          id: 3,
          icon: "🚢",
          name: "Ship",
          description: "Cargo transport by sea with bulk capacity",
          efficiency: "Medium",
          co2PerKm: 0.18,
        },
        {
          id: 4,
          icon: "✈️",
          name: "Air",
          description: "Fastest but most polluting option",
          efficiency: "Low",
          co2PerKm: 0.45,
        },
        {
          id: 5,
          icon: "🛸",
          name: "Drone",
          description: "Lightweight air delivery for small items",
          efficiency: "Medium",
          co2PerKm: 0.15,
        },
        {
          id: 6,
          icon: "🚴‍♂️",
          name: "Bike Courier",
          description: "Zero-emission last-mile delivery option",
          efficiency: "Very High",
          co2PerKm: 0.00,
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleChange = (e) => {
    const mode = modes.find((m) => m.name === e.target.value);
    setSelectedMode(mode);
  };

  if (loading) return <p className="text-center mt-10">Loading transport modes...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="min-h-screen flex justify-center items-start bg-gradient-to-r from-green-50 to-blue-50 py-10 px-4">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-md p-6 space-y-6">
        <h2 className="text-3xl font-bold text-center text-green-700">
          🌍 Select Transport Mode
        </h2>

        <select
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          value={selectedMode?.name || ""}
          onChange={handleChange}
        >
          <option value="" disabled>
            -- Choose a mode --
          </option>
          {modes.map((mode) => (
            <option key={mode.id} value={mode.name}>
              {mode.icon} {mode.name} — {mode.description}
            </option>
          ))}
        </select>

        {selectedMode && (
          <div className="bg-gray-100 rounded-lg p-4 shadow-inner">
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">
              {selectedMode.icon} {selectedMode.name}
            </h3>
            <p><strong>Description:</strong> {selectedMode.description}</p>
            <p><strong>Efficiency:</strong> {selectedMode.efficiency}</p>
            <p><strong>CO₂ per km:</strong> {selectedMode.co2PerKm} kg</p>
          </div>
        )}

        {/* Table Section */}
        <div className="overflow-x-auto">
          <h3 className="text-2xl font-bold mb-2 text-blue-700 text-center">
            📋 Transport Modes Summary
          </h3>
          <table className="w-full border border-gray-300 text-left text-sm">
            <thead className="bg-blue-100 text-blue-800">
              <tr>
                <th className="p-2 border">#</th>
                <th className="p-2 border">Mode</th>
                <th className="p-2 border">Description</th>
                <th className="p-2 border">Efficiency</th>
                <th className="p-2 border">CO₂/km (kg)</th>
              </tr>
            </thead>
            <tbody>
              {modes.map((mode, index) => (
                <tr key={mode.id} className="hover:bg-gray-50">
                  <td className="p-2 border">{index + 1}</td>
                  <td className="p-2 border font-medium">
                    {mode.icon} {mode.name}
                  </td>
                  <td className="p-2 border">{mode.description}</td>
                  <td className="p-2 border">{mode.efficiency}</td>
                  <td className="p-2 border">{mode.co2PerKm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bar Chart */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold mb-4 text-center text-green-700">
            📊 CO₂ Emissions per Kilometer
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={modes} layout="vertical" margin={{ top: 10, right: 30, left: 50, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" label={{ value: "kg CO₂/km", position: "insideBottom", offset: -5 }} />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Legend />
              <Bar dataKey="co2PerKm" fill="#34d399" name="CO₂/km" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ModeSelector;
