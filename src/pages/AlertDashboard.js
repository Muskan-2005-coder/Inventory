import React from "react";
import styles from "../styles/AlertDashboard.module.css";
import LowStockAlert from "../components/Alerts/LowStockAlert";
import DelayWarning from "../components/Alerts/DelayWarning";
import CrisisDetector from "../components/Alerts/CrisisDetector";

const AlertDashboard = () => {
  return (
    <div className={styles.container}>
           {/* <h1 className={styles.AlertTitle}>📦 Alert Dashboard</h1> */}
      
      <div className={styles.alertBox}>
        <LowStockAlert />
      </div>
      <div className={styles.alertBox}>
        <DelayWarning />
      </div>
      <div className={styles.alertBox}>
        <CrisisDetector />
      </div>
    </div>
  );
};

export default AlertDashboard;
