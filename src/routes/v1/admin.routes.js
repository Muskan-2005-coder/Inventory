const router = require("express").Router();

/**
 * GET /api/admin/reports
 * Returns dummy data for charts
 */
router.get("/reports", (req, res) => {
  res.json({
    inventoryTrend: [
      { date: "2025-07-01", inventoryLevel: 100 },
      { date: "2025-07-02", inventoryLevel: 120 },
      { date: "2025-07-03", inventoryLevel: 90 },
    ],
    supplierEfficiency: [
      { supplier: "ABC Corp", efficiency: 0.92 },
      { supplier: "XYZ Ltd", efficiency: 0.85 },
    ],
  });
});

/**
 * You can add /users, /roles, etc. routes here later
 */

module.exports = router;
