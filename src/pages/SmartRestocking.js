import React from "react";
import SupplierSuggestions from "../components/Restock/SupplierSuggestions";
import BulkDiscounts from "../components/Restock/BulkDiscounts";
import ExpiryAlerts from "../components/Restock/ExpiryAlerts";

const SmartRestockingPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Smart Restocking System</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SupplierSuggestions />
        <BulkDiscounts />
        <ExpiryAlerts />
      </div>
    </div>
  );
};

export default SmartRestockingPage;
