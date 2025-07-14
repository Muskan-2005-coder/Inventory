// src/api/admin.js
import api from "./index";

export const getUserRoles = () => api.get("/admin/users");
export const updateUserRole = (userId, role) =>
  api.put(`/admin/users/${userId}`, { role });

export const getReports = () => api.get("/admin/reports");
