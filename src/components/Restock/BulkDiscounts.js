import React, { useEffect, useState, useMemo } from "react";
import dayjs from "dayjs";

// ----------------------
// MOCK MODE FOR TESTING
// ----------------------
const TEST_MODE = true;

const mockDiscounts = [
  {
    item: "Basmati Rice (25 kg)",
    percentage: 12,
    minQty: 10,
    supplier: "AgroMart Exports",
    expiresOn: dayjs().add(5, "days").toISOString(),
  },
  {
    item: "Sunflower Oil (15 L)",
    percentage: 8,
    minQty: 20,
    supplier: "Healthy Oils Ltd",
    expiresOn: dayjs().add(10, "days").toISOString(),
  },
  {
    item: "Whole Wheat Flour (50 kg)",
    percentage: 15,
    minQty: 15,
    supplier: "FarmFresh Supplies",
    expiresOn: dayjs().add(2, "days").toISOString(),
  },
];

// Stubbed real fetcher (overridden in TEST_MODE)
const realGetBulkDiscounts = () => Promise.resolve({ data: [] });

// Switches between real and mock
const getBulkDiscounts = () =>
  TEST_MODE ? Promise.resolve({ data: mockDiscounts }) : realGetBulkDiscounts();

// ----------------------
// COMPONENT
// ----------------------
const BulkDiscounts = () => {
  const [discounts, setDiscounts] = useState([]);

  useEffect(() => {
    getBulkDiscounts()
      .then((res) => setDiscounts(res.data || []))
      .catch((err) => console.error("Failed to fetch bulk discounts", err));
  }, []);

  const { count, highest, aboutToExpire } = useMemo(() => {
    if (!discounts.length) return { count: 0, highest: 0, aboutToExpire: [] };

    const highest = Math.max(...discounts.map((d) => d.percentage));
    const aboutToExpire = discounts.filter((d) => {
      if (!d.expiresOn) return false;
      const daysLeft = dayjs(d.expiresOn).diff(dayjs(), "day");
      return daysLeft >= 0 && daysLeft <= 7;
    });

    return { count: discounts.length, highest, aboutToExpire };
  }, [discounts]);

  return (
    <div className="bg-white p-5 rounded-xl shadow-md">
      {/* Heading */}
      <h3 className="text-xl font-semibold mb-2 flex items-center gap-1 text-blue-700">
        💸 Bulk Discounts
      </h3>

      {/* Summary */}
      {count > 0 ? (
        <p className="text-sm text-gray-600 mb-3">
          {count} active offers • Highest&nbsp;
          <strong>{highest}%</strong> off
        </p>
      ) : (
        <p className="text-sm text-gray-600 mb-3">
          No active discounts at the moment
        </p>
      )}

      {/* Expiring Soon Notice */}
      {aboutToExpire.length > 0 && (
        <div className="bg-red-50 text-red-600 text-xs p-2 rounded mb-4">
          ⚠️ {aboutToExpire.length} offer
          {aboutToExpire.length > 1 && "s"} expiring within 7 days – grab them soon!
        </div>
      )}

      {/* Discount Cards */}
      <ul className="space-y-3 text-sm">
        {discounts.map((d, i) => {
          const daysLeft = d.expiresOn
            ? dayjs(d.expiresOn).diff(dayjs(), "day")
            : null;

          return (
            <li
              key={i}
              className="border rounded-lg p-3 hover:bg-gray-50 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
            >
              <span>
                <strong>{d.item}</strong> — {d.percentage}% off for{" "}
                <strong>{d.minQty}+</strong> units
              </span>

              <div className="flex flex-wrap gap-2 text-xs">
                {d.supplier && (
                  <span className="bg-gray-100 px-2 py-0.5 rounded">
                    Supplier: {d.supplier}
                  </span>
                )}
                {d.expiresOn && (
                  <span
                    className={`px-2 py-0.5 rounded ${
                      daysLeft !== null && daysLeft <= 7
                        ? "bg-red-100 text-red-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    Expires: {dayjs(d.expiresOn).format("DD MMM YYYY")}
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BulkDiscounts;
