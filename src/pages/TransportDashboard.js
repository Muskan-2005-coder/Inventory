import React from "react";
import ModeSelector from "../components/Transport/ModeSelector";
import CarbonTracker from "../components/Transport/CarbonTracker";

const TransportDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Smart Transport Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ModeSelector />
        <CarbonTracker />
      </div>
    </div>
  );
};

export default TransportDashboard;
