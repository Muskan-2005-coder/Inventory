// src/pages/Dashboard.js
import React from "react";

const Dashboard = () => {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Dashboard</h1>
      <p>Welcome to the Inventory Management System dashboard.</p>
      
      <div style={{ display: "flex", gap: "2rem", marginTop: "2rem" }}>
        <div style={{ flex: 1, padding: "1rem", backgroundColor: "#f0f0f0", borderRadius: "8px" }}>
          <h3>Total Stock Items</h3>
          <p>1200</p>
        </div>
        <div style={{ flex: 1, padding: "1rem", backgroundColor: "#f0f0f0", borderRadius: "8px" }}>
          <h3>Suppliers</h3>
          <p>25</p>
        </div>
        <div style={{ flex: 1, padding: "1rem", backgroundColor: "#f0f0f0", borderRadius: "8px" }}>
          <h3>Pending Restocks</h3>
          <p>8</p>
        </div>
      </div>
      
      <section style={{ marginTop: "3rem" }}>
        <h2>Recent Alerts</h2>
        <ul>
          <li>Stock running low on Item A</li>
          <li>Delivery delay expected for Supplier X</li>
          <li>Items near expiry detected in Warehouse 3</li>
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;
