import React from "react";
import UserRoles from "../components/Admin/UserRoles";
import Reports from "../components/Admin/Reports";

const AdminPanel = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
        🛠️ Admin Panel
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Inventory Reports */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">📈 Inventory Reports</h2>
          <Reports />
        </div>

        {/* User Role Management */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">👤 User Role Management</h2>
          <UserRoles />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
