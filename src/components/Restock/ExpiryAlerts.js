import React, { useEffect, useState, useMemo } from "react";
import dayjs from "dayjs";
import { getExpiringItems as realGetExpiringItems } from "../../api/inventory";

const TEST_MODE = true;

const mockExpiringItems = [
  { name: "Milk", expiryDate: "2025-07-15", category: "Dairy", batch: "B104" },
  { name: "Yogurt", expiryDate: "2025-07-17", category: "Dairy", batch: "B102" },
  { name: "Cheese", expiryDate: "2025-07-24", category: "Dairy", batch: "B107" },
  { name: "Eggs", expiryDate: "2025-07-19", category: "Poultry", batch: "P201" },
  { name: "Butter", expiryDate: "2025-07-29", category: "Dairy", batch: "B109" },
];

const getExpiringItems = () =>
  TEST_MODE
    ? Promise.resolve({ data: mockExpiringItems })
    : realGetExpiringItems();

const ExpiryAlerts = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getExpiringItems()
      .then((res) => setItems(res.data || []))
      .catch((err) => console.error("Failed to fetch expiry alerts", err));
  }, []);

  const { total, expiringSoon, earliest } = useMemo(() => {
    if (!items.length) return { total: 0, expiringSoon: [], earliest: null };

    const sorted = [...items].sort((a, b) =>
      dayjs(a.expiryDate).isAfter(dayjs(b.expiryDate)) ? 1 : -1
    );
    const soon = sorted.filter(
      (item) => dayjs(item.expiryDate).diff(dayjs(), "day") <= 5
    );

    return {
      total: items.length,
      expiringSoon: soon,
      earliest: sorted[0]?.expiryDate || null,
    };
  }, [items]);

  return (
    <div className="bg-yellow-50 border border-yellow-200 p-5 rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-yellow-700 mb-3 flex items-center gap-1">
        ⏳ Expiry Alerts
      </h2>

      <p className="text-sm text-gray-700 mb-2">
        {total ? (
          <>
            <span className="font-medium">{total}</span> item{total > 1 && "s"} nearing expiry.
            Soonest expiry on{" "}
            <span className="font-medium text-yellow-800">
              {dayjs(earliest).format("DD MMM YYYY")}
            </span>
          </>
        ) : (
          "All items are fresh 🎉"
        )}
      </p>

      {expiringSoon.length > 0 && (
        <div className="bg-red-100 text-red-800 text-xs p-2 rounded mb-3">
          ⚠️ {expiringSoon.length} item{expiringSoon.length > 1 && "s"} expiring within 5 days.
        </div>
      )}

      <ul className="space-y-3 text-sm">
        {items.map((item, i) => {
          const daysLeft = dayjs(item.expiryDate).diff(dayjs(), "day");
          return (
            <li
              key={i}
              className="bg-white border border-yellow-100 p-3 rounded-md shadow-sm"
            >
              <div className="font-semibold text-gray-800">{item.name}</div>
              <div className="text-xs text-gray-600 mt-1 flex flex-wrap gap-3">
                <span>
                  📆 <strong>Expires:</strong>{" "}
                  {dayjs(item.expiryDate).format("DD MMM YYYY")}
                </span>
                <span>
                  ⏱ <strong>In:</strong> {daysLeft} day{daysLeft !== 1 && "s"}
                </span>
                <span>
                  🏷 <strong>Category:</strong> {item.category}
                </span>
                <span>
                  🧪 <strong>Batch:</strong> {item.batch}
                </span>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-4 text-right">
        <button className="bg-yellow-600 text-white text-sm px-4 py-2 rounded hover:bg-yellow-700 transition">
          View Full Inventory
        </button>
      </div>
    </div>
  );
};

export default ExpiryAlerts;
