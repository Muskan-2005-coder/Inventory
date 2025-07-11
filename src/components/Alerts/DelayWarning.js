import React, { useEffect, useState } from "react";
import { getDelayWarnings } from "../../api/inventory";

const DelayWarning = () => {
  const [delays, setDelays] = useState([]);

  useEffect(() => {
    getDelayWarnings()
      .then(res => setDelays(res.data))
      .catch(err => console.error("Failed to fetch delay warnings", err));
  }, []);

  return (
    <div className="bg-yellow-100 p-4 rounded shadow">
      <h2 className="text-lg font-semibold text-yellow-700 mb-2">🚚 Delivery Delay Warnings</h2>
      {delays.length === 0 ? (
        <p>No current delivery delays.</p>
      ) : (
        <ul className="list-disc ml-6">
          {delays.map((delay, index) => (
            <li key={index} className="text-sm">{delay}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DelayWarning;
