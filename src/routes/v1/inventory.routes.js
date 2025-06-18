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

inventoryRouter.get('/', inventoryController.getAllInventory)
inventoryRouter.post('/', inventoryController.addNewItem)
inventoryRouter.get('/:id', inventoryController.getItem)
inventoryRouter.put('/:id', inventoryController.updateItem)
inventoryRouter.delete('/:id', inventoryController.deleteItem)
inventoryRouter.get('/low', inventoryController.getLowStockItems)
inventoryRouter.post('/restock', inventoryController.getRestockSuggestion)
inventoryRouter.get('/heatmap', inventoryController.getHeatmap)

module.exports = inventoryRouter