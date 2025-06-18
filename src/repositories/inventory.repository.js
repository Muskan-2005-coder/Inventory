const Inventory = require('../models/inventory.model')
const logger = require('../utils/logger')

class InventoryRepository {
  async createInventory(inventoryDetails) {
    try {
      const inventory = await Inventory.create(inventoryDetails)
      return inventory
    } catch (error) {
      logger.error(`[InventoryRepository][createInventory] :: ${error.message}`, error)
      throw error
    }
  }

  async getInventoryById(inventoryId) {
    try {
      const inventory = await Inventory.findById(inventoryId)
      return inventory
    } catch (error) {
      logger.error(`[InventoryRepository][getInventoryById] :: ${error.message}`, error)
      throw error
    }
  }

  async getAllInventories() {
    try {
      const inventories = await Inventory.find()
      return inventories
    } catch (error) {
      logger.error(`[InventoryRepository][getAllInventories] :: ${error.message}`, error)
      throw error
    }
  }

  async updateInventory(inventoryId, inventoryDetails) {
    try {
      const updatedInventory = await Inventory.findByIdAndUpdate(inventoryId, inventoryDetails, { new: true })
      return updatedInventory
    } catch (error) {
      logger.error(`[InventoryRepository][updateInventory] :: ${error.message}`, error)
      throw error
    }
  }

  async deleteInventory(inventoryId) {
    try {
      const deletedInventory = await Inventory.findByIdAndDelete(inventoryId)
      return deletedInventory
    } catch (error) {
      logger.error(`[InventoryRepository][deleteInventory] :: ${error.message}`, error)
      throw error
    }
  }
}

module.exports = new InventoryRepository()
