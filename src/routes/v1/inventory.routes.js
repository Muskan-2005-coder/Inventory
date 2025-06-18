/**
 * Inventory Management
 * 
 * GET    /api/v1/inventory/          Get all inventory items
 * POST   /api/v1/inventory/          Add new inventory item
 * GET    /api/v1/inventory/:id       Get single inventory item
 * PUT    /api/v1/inventory/:id       Update item details
 * DELETE /api/v1/inventory/:id       Delete item
 * GET    /api/v1/inventory/low       Get items low on stock
 * POST   /api/v1/inventory/restock   Auto-restock suggestion
 * GET    /api/v1/inventory/heatmap   Location-wise distribution data
 * 
*/

const express = require('express')

const inventoryRouter = express.Router()

inventoryRouter.get('/')
inventoryRouter.post('/')
inventoryRouter.get('/:id')
inventoryRouter.put('/:id')
inventoryRouter.delete('/:id')
inventoryRouter.get('/low')
inventoryRouter.post('/restock')
inventoryRouter.get('/heatmap')

module.exports = inventoryRouter