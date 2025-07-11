import React, { useEffect, useState } from "react";
import { getCarbonFootprint } from "../../api/inventory";

const CarbonTracker = () => {
  const [carbonData, setCarbonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCarbonFootprint()
      .then((res) => {
        setCarbonData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch carbon footprint data");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading carbon footprint data...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-3">Environmental Impact</h2>

      <p>
        <strong>Total Carbon Footprint:</strong> {carbonData.totalCarbonFootprint} kg CO₂
      </p>

      <h3 className="mt-4 font-semibold">Breakdown by Transport Mode:</h3>
      <ul className="list-disc list-inside">
        {carbonData.breakdown.map(({ mode, footprint }) => (
          <li key={mode}>
            {mode}: {footprint} kg CO₂
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarbonTracker;
