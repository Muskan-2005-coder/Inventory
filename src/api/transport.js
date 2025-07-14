// src/api/transport.js
import api from "./index";

// Get available transport modes
export const getTransportModes = () => api.get("/transport/modes");

// Get carbon footprint summary and breakdown
export const getCarbonFootprint = () => api.get("/transport/carbon");

// Add a new transport entry (if needed)
export const addTransportEntry = (entry) => api.post("/transport/add", entry);

// Example of updating transport data
export const updateTransportEntry = (id, updatedData) =>
  api.put(`/transport/${id}`, updatedData);
