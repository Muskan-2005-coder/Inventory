import React, { useEffect, useState } from "react";
import { getTransportModes } from "../../api/inventory";

const ModeSelector = () => {
  const [modes, setModes] = useState([]);
  const [selectedMode, setSelectedMode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTransportModes()
      .then(res => {
        setModes(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError("Failed to load transport modes");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading transport modes...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-3">Select Transport Mode</h2>
      <select
        className="w-full p-2 border rounded"
        value={selectedMode || ""}
        onChange={(e) => setSelectedMode(e.target.value)}
      >
        <option value="" disabled>Select mode</option>
        {modes.map(mode => (
          <option key={mode.id} value={mode.name}>
            {mode.name} — {mode.description}
          </option>
        ))}
      </select>

      {selectedMode && (
        <div className="mt-4 p-2 bg-green-100 rounded">
          <p>
            <strong>Selected Mode:</strong> {selectedMode}
          </p>
          {/* Optionally add more details/info about the selected mode here */}
        </div>
      )}
    </div>
  );
};

export default ModeSelector;
