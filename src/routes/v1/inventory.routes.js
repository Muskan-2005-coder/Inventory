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

const { inventoryController } = require('../../controllers')
const inventoryRouter = express.Router()

inventoryRouter.get('/', inventoryController.getAllInventories)
inventoryRouter.post('/', inventoryController.addProductToInventory)
inventoryRouter.post('/create', inventoryController.createInventory)
inventoryRouter.get('/:id', inventoryController.getInventory)
inventoryRouter.put('/:id', inventoryController.updateInventory)
inventoryRouter.delete('/:id', inventoryController.removeProductFromInventory)
inventoryRouter.get('/utilization', inventoryController.getInventoryCapacityUtilization)
// inventoryRouter.get('/low', inventoryController.getLowStockItems)
// inventoryRouter.post('/restock', inventoryController.getRestockSuggestion)

module.exports = inventoryRouter