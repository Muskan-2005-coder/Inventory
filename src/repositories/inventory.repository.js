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

  async getInventoryByProductName(productName) {
    try {
      const inventory = await Inventory.findOne({ productName })
      return inventory

    } catch (error) {
      logger.error(`[InventoryRepository][getInventoryByProductName] :: ${error.message}`, error)
      throw error
    }
  }

  async getInventoriesByCategory(category) {
    try {
      const inventories = await Inventory.find({ category })
      return inventories

    } catch (error) {
      logger.error(`[InventoryRepository][getInventoriesByCategory] :: ${error.message}`, error)
      throw error
    }
  }

  async getInventoriesByLocation(location) {
    try {
      const inventories = await Inventory.find({ location })
      return inventories

    } catch (error) {
      logger.error(`[InventoryRepository][getInventoriesByLocation] :: ${error.message}`, error)
      throw error
    }
  }

  async getInventoriesBySupplierId(supplierId) {
    try {
      const inventories = await Inventory.find({ supplierId })
      return inventories

    } catch (error) {
      logger.error(`[InventoryRepository][getInventoriesBySupplierId] :: ${error.message}`, error)
      throw error
    }
  }

  async getExpiredInventories(currentDate = new Date()) {
    try {
      const inventories = await Inventory.find({ expiryDate: { $lt: currentDate } })
      return inventories

    } catch (error) {
      logger.error(`[InventoryRepository][getExpiredInventories] :: ${error.message}`, error)
      throw error
    }
  }

  async getLowStockInventories() {
    try {
      const inventories = await Inventory.find({ $expr: { $lte: ["$quantity", "$thresholdLimit"] } })
      return inventories

    } catch (error) {
      logger.error(`[InventoryRepository][getLowStockInventories] :: ${error.message}`, error)
      throw error
    }
  }

  async getInventoriesNeedingRestock() {
    try {
      const inventories = await Inventory.find({ restockRecommended: true })
      return inventories

    } catch (error) {
      logger.error(`[InventoryRepository][getInventoriesNeedingRestock] :: ${error.message}`, error)
      throw error
    }
  }
}

module.exports = InventoryRepository
