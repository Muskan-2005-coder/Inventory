import React from "react";
import LowStockAlert from "../components/Alerts/LowStockAlert";
import DelayWarning from "../components/Alerts/DelayWarning";
import CrisisDetector from "../components/Alerts/CrisisDetector";

const AlertDashboard = () => {
  return (
    <div className="p-6 space-y-4">
      <LowStockAlert />
      <DelayWarning />
      <CrisisDetector />
    </div>
  );
};

export default AlertDashboard;
