import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { getCrisisNews as realGetCrisisNews } from "../../api/inventory";

// Toggle mock data mode
const TEST_MODE = true;

const mockCrisisNews = [
  {
    title: "Global Wheat Shortage Due to War in Region X",
    date: "2025-07-12",
    source: "Reuters",
    severity: "High",
  },
  {
    title: "Drought Affects Vegetable Supply in Northern India",
    date: "2025-07-10",
    source: "BBC",
    severity: "Moderate",
  },
  {
    title: "Transport Strike Causes Delays in Fresh Produce Delivery",
    date: "2025-07-13",
    source: "The Times",
    severity: "Moderate",
  },
  {
    title: "Avian Flu Detected in Poultry Farms in South India",
    date: "2025-07-11",
    source: "India Today",
    severity: "High",
  },
  {
    title: "Export Restrictions Imposed on Rice",
    date: "2025-07-09",
    source: "Al Jazeera",
    severity: "Low",
  },
];

const getCrisisNews = () =>
  TEST_MODE ? Promise.resolve({ data: mockCrisisNews }) : realGetCrisisNews();

const CrisisDetector = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getCrisisNews()
      .then((res) => setNews(res.data || []))
      .catch((err) => console.error("Failed to fetch crisis news", err));
  }, []);

  const handleAddCrisis = () => {
    alert("Crisis reporting feature coming soon!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-red-700 flex items-center gap-2">
            🌍 Crisis Alerts
          </h2>
          <button
            onClick={handleAddCrisis}
            className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-2 rounded shadow"
          >
            ➕ Report New Crisis
          </button>
        </div>

        {news.length === 0 ? (
          <p className="text-gray-500">No active crisis news found.</p>
        ) : (
          <ul className="space-y-4">
            {news.map((item, index) => (
              <li
                key={index}
                className="border border-red-100 rounded-lg p-4 bg-red-50 shadow-sm hover:bg-red-100 transition-all"
              >
                <h4 className="text-lg font-semibold text-red-800 mb-1">
                  {item.title}
                </h4>
                <div className="text-sm text-gray-700 flex flex-wrap gap-4">
                  <span>🗞 Source: {item.source}</span>
                  <span>📅 {dayjs(item.date).format("DD MMM YYYY")}</span>
                  <span>
                    ⚠️ Severity:{" "}
                    <span
                      className={`px-2 py-0.5 rounded text-white text-xs ${
                        item.severity === "High"
                          ? "bg-red-600"
                          : item.severity === "Moderate"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                    >
                      {item.severity}
                    </span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CrisisDetector;
