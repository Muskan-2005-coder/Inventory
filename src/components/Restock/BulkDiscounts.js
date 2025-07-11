import React, { useEffect, useState } from "react";
import { getBulkDiscounts } from "../../api/inventory";

const BulkDiscounts = () => {
  const [discounts, setDiscounts] = useState([]);

  useEffect(() => {
    getBulkDiscounts()
      .then(res => setDiscounts(res.data))
      .catch(err => console.error("Failed to fetch bulk discounts", err));
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-2">💸 Bulk Discounts</h3>
      <ul className="list-disc ml-6 text-sm">
        {discounts.map((d, i) => (
          <li key={i}>
            {d.item} — {d.percentage}% off for {d.minQty}+ units
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BulkDiscounts;
