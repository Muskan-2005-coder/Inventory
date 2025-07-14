import React from "react";
import styles from "../styles/SmartRestocking.module.css";

import SupplierSuggestions from "../components/Restock/SupplierSuggestions";
import BulkDiscounts from "../components/Restock/BulkDiscounts";
import ExpiryAlerts from "../components/Restock/ExpiryAlerts";

const SmartRestockingPage = () => {
  return (
    <div className={styles.smartRestockingContainer}>
      <h1 className={styles.smartRestockingTitle}>📦 Smart Restocking Alert Dashboard</h1>

      <div className={styles.verticalSection}>
        <h2 className={styles.sectionHeading}>🚛 Supplier Suggestions</h2>
        <SupplierSuggestions />
      </div>

      <div className={styles.verticalSection}>
        <h2 className={styles.sectionHeading}>💰 Bulk Discounts</h2>
        <BulkDiscounts />
      </div>

      <div className={styles.verticalSection}>
        <h2 className={styles.sectionHeading}>⚠️ Expiry Alerts</h2>
        <ExpiryAlerts />
      </div>
    </div>
  );
};

export default SmartRestockingPage;
