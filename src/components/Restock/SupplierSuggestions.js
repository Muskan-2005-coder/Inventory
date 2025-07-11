import React, { useEffect, useState } from "react";
import { getSupplierSuggestions } from "../../api/inventory";

const SupplierSuggestions = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    getSupplierSuggestions()
      .then(res => setSuppliers(res.data))
      .catch(err => console.error("Failed to fetch supplier suggestions", err));
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-2">📦 Supplier Suggestions</h3>
      <ul className="list-disc ml-6 text-sm">
        {suppliers.map((s, i) => (
          <li key={i}>
            {s.item} — Recommended Supplier: <strong>{s.supplier}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SupplierSuggestions;
