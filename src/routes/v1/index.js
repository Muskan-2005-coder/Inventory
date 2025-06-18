
// All routes According to HLD at one Place:
/**
 * User Management
 * 
 * POST   /api/v1/auth/register       Register a new user
 * POST   /api/v1/auth/login          Login & get JWT token
 * GET    /api/v1/users/me            Get current user info
 * GET    /api/v1/users/              (Admin) List all users
 * PATCH  /api/v1/users/:id           Update user role/shift
 * DELETE /api/v1/users/:id           Delete a user
 * 
 * 
 * Inventory Management
 * 
 * GET    /api/v1/inventory/          Get all inventory items
 * POST   /api/v1/inventory/          Add new inventory item
 * GET    /api/v1/inventory/:id       Get single inventory item
 * PATCH  /api/v1/inventory/:id       Update item details
 * DELETE /api/v1/inventory/:id       Delete item
 * GET    /api/v1/inventory/low       Get items low on stock
 * POST   /api/v1/inventory/restock   Auto-restock suggestion (calls AI service)
 * GET    /api/v1/inventory/heatmap   Location-wise distribution data
 * 
 * 
 * Delivery Management
 * 
 * GET    /api/v1/deliveries/         Get all deliveries
 * POST   /api/v1/deliveries/         Create a new delivery
 * GET    /api/v1/deliveries/:id      Get delivery status
 * PATCH  /api/v1/deliveries/:id      Update delivery status/location
 * POST   /api/v1/deliveries/assign   Assign delivery to personnel
 * POST   /api/v1/deliveries/eta      Get AI-predicted ETA
 * 
 * 
 * Wage & Workforce Management
 * 
 * GET    /api/v1/wages/              List wage entries
 * POST   /api/v1/wages/calculate     Calculate wages for all employees
 * GET    /api/v1/wages/overworked    Get list of overworked employees
 * PATCH  /api/v1/wages/:userId       Update wage info
 * 
 * 
 * Alerts & Notifications
 * 
 * GET    /api/v1/alerts/             Get all active alerts
 * POST   /api/v1/alerts/trigger      Manually trigger an alert (for testing)
 * POST   /api/v1/alerts/send         Send alert (SMS/Push) to subscribed users
 * 
 * 
 * Admin & Misc
 * 
 * GET    /api/v1/admin/metrics       Return analytics/reporting data
 * GET    /api/v1/admin/roles         View all user roles (staff, supplier)
 * PATCH  /api/v1/admin/layout        Update warehouse layout config
 */



const express = require('express')

const userRouter = require('./user.routes')

const v1Router = express.Router()

v1Router.use('/users', userRouter)

module.exports = v1Router
