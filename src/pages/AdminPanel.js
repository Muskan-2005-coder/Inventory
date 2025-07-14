import React from "react";
import Reports from "../components/Admin/Reports";
import UserRoles from "../components/Admin/UserRoles"; // Optional
import styles from "../styles/AdminPanel.module.css";

const AdminPanel = () => {
  return (
    <div className={styles.container}>
     <h1 className={styles.AdminTitle}>📦 Admin Panel</h1>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>📈 Inventory Reports</h2>
          <Reports />
        </div>

     
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>👤 User Role Management</h2>
          <UserRoles />
        </div>
       
      </div>
    </div>
  );
};

export default AdminPanel;



