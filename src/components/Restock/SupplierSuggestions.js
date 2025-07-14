import React, { useEffect, useState, useMemo } from "react";
// import { getSupplierSuggestions as realGetSupplierSuggestions } from "../../api/inventory";
const TEST_MODE = true;

/* Mock data (5 suppliers) */
const mockSuggestions = [
  { item: "Basmati Rice (25 kg)", supplier: "AgroMart Exports", pricePerUnit: 32, leadTime: 3, rating: 4.6 },
  { item: "Sunflower Oil (15 L)", supplier: "Healthy Oils Ltd",   pricePerUnit: 118, leadTime: 2, rating: 4.2 },
  { item: "Whole Wheat Flour (50 kg)", supplier: "FarmFresh Supplies", pricePerUnit: 28, leadTime: 5, rating: 4.8 },
  { item: "White Sugar (25 kg)", supplier: "SweetLife Traders",  pricePerUnit: 31, leadTime: 2, rating: 4.0 },
  { item: "Skimmed Milk Powder (10 kg)", supplier: "DairyBest Inc.", pricePerUnit: 210, leadTime: 1, rating: 4.5 },
];

/* Stub fallback so ESLint is happy if real API still missing */
const realGetSupplierSuggestions = () => Promise.resolve({ data: [] });

/* Unified fetcher */
const getSupplierSuggestions = () =>
  TEST_MODE
    ? Promise.resolve({ data: mockSuggestions })
    : realGetSupplierSuggestions();

const SupplierSuggestions = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    getSupplierSuggestions()
      .then(res => setSuppliers(res.data || []))
      .catch(err => console.error("Failed to fetch supplier suggestions", err));
  }, []);

  /* Summary stats */
  const { total, bestRating, lowestPrice } = useMemo(() => {
    if (!suppliers.length) return { total: 0, bestRating: null, lowestPrice: null };
    const bestRating = suppliers.reduce((a, b) => (a.rating > b.rating ? a : b));
    const lowestPrice = suppliers.reduce((a, b) =>
      a.pricePerUnit < b.pricePerUnit ? a : b
    );
    return { total: suppliers.length, bestRating, lowestPrice };
  }, [suppliers]);

  return (
    <div className="bg-blue-50 border border-blue-200 p-5 rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-1">
        📦 Supplier Suggestions
      </h2>

      {total > 0 ? (
        <p className="text-sm text-gray-700 mb-3">
          {total} suggestions • Best‑rated:&nbsp;
          <strong>{bestRating.supplier}</strong> (⭐{bestRating.rating}) • Cheapest:&nbsp;
          <strong>{lowestPrice.supplier}</strong> (₹{lowestPrice.pricePerUnit}/unit)
        </p>
      ) : (
        <p className="text-sm text-gray-600">No supplier suggestions available.</p>
      )}

      <ul className="space-y-3 text-sm">
        {suppliers.map((s, i) => (
          <li
            key={i}
            className="bg-white border border-blue-100 p-3 rounded-md shadow-sm hover:bg-blue-50 transition-all"
          >
            <div className="font-semibold text-blue-800">{s.item}</div>
            <div className="text-xs text-gray-700 mt-1 flex flex-wrap gap-3">
              <span>🏢 <strong>Supplier:</strong> {s.supplier}</span>
              <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded">
                ₹{s.pricePerUnit}/unit
              </span>
              <span
                className={`px-2 py-0.5 rounded ${
                  s.leadTime <= 2
                    ? "bg-red-100 text-red-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                Lead Time: {s.leadTime} day{s.leadTime > 1 && "s"}
              </span>
              <span className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded">
                ⭐ {s.rating}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SupplierSuggestions;
