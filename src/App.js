// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import AdminPanel from "./pages/AdminPanel";
import SmartRestocking from "./pages/SmartRestocking";
import AlertDashboard from "./pages/AlertDashboard";
import TransportDashboard from "./pages/TransportDashboard";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/smart-restocking" element={<SmartRestocking />} />
            <Route path="/alerts" element={<AlertDashboard />} />
            <Route path="/transport" element={<TransportDashboard />} />
            {/* Add other routes here */}
            <Route path="*" element={<h2>404: Page Not Found</h2>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
