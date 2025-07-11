import React, { useEffect, useState } from "react";
import { getCrisisNews } from "../../api/inventory";

const CrisisDetector = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getCrisisNews()
      .then(res => setNews(res.data))
      .catch(err => console.error("Failed to fetch crisis news", err));
  }, []);

  return (
    <div className="bg-red-100 p-4 rounded shadow">
      <h2 className="text-lg font-semibold text-red-700 mb-2">🌍 Crisis Alerts</h2>
      {news.length === 0 ? (
        <p>No active crisis news found.</p>
      ) : (
        <ul className="list-disc ml-6">
          {news.map((item, index) => (
            <li key={index} className="text-sm">{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CrisisDetector;
