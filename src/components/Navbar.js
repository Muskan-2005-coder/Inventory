// src/components/Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: "#0077cc",
      padding: "1rem 2rem",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontFamily: "Arial, sans-serif"
    }}>
      <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
        InventoryMS
      </div>
      <div>
        <a href="/" style={{ color: "white", marginRight: "1rem", textDecoration: "none" }}>Dashboard</a>
        <a href="/restocking" style={{ color: "white", marginRight: "1rem", textDecoration: "none" }}>Restocking</a>
        <a href="/alerts" style={{ color: "white", marginRight: "1rem", textDecoration: "none" }}>Alerts</a>
        <a href="/transport" style={{ color: "white", marginRight: "1rem", textDecoration: "none" }}>Transport</a>
        <a href="/admin" style={{ color: "white", textDecoration: "none" }}>Admin</a>
      </div>
    </nav>
  );
};

export default Navbar;
