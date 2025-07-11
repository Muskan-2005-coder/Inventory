import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Adjust port or path if needed

// Smart Restocking APIs
export const getSupplierSuggestions = () => axios.get(`${API_BASE_URL}/inventory/suggestions`);
export const getBulkDiscounts = () => axios.get(`${API_BASE_URL}/inventory/discounts`);
export const getExpiringItems = () => axios.get(`${API_BASE_URL}/inventory/expiry-alerts`);

// Alerts APIs
export const getLowStockAlerts = () => axios.get(`${API_BASE_URL}/alerts/low-stock`);
export const getDelayWarnings = () => axios.get(`${API_BASE_URL}/alerts/delay-warnings`);
export const getCrisisNews = () => axios.get(`${API_BASE_URL}/alerts/crisis-news`);

// Transport APIs
export const getTransportModes = () => axios.get(`${API_BASE_URL}/transport/modes`);
export const getCarbonFootprint = () => axios.get(`${API_BASE_URL}/transport/carbon-footprint`);

// Admin APIs
export const getUserRoles = () => axios.get(`${API_BASE_URL}/admin/users`);
export const updateUserRole = (userId, role) => axios.put(`${API_BASE_URL}/admin/users/${userId}`, { role });
export const getReports = () => axios.get(`${API_BASE_URL}/admin/reports`);

// Other features (e.g., stock redistribution, alternative suppliers) can be added similarly

