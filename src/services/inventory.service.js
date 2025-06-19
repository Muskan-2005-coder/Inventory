const logger = require('../utils/logger');
const { NotFoundError, BadRequestError } = require('../errors/client.error');

const CONTEXT = 'InventoryService';

class InventoryService {
  constructor(InventoryRepository, ProductRepository) {
    this.InventoryRepository = InventoryRepository;
    this.ProductRepository = ProductRepository;
  }

  async createInventory(inventoryDetails) {
    logger.info(`[${CONTEXT}] Creating new inventory with details: ${JSON.stringify(inventoryDetails)}`);
    const inventory = await this.InventoryRepository.createInventory(inventoryDetails);
    logger.info(`[${CONTEXT}] Inventory created successfully: ${inventory._id}`);
    return inventory;
  }

  async getInventory(inventoryId) {
    logger.info(`[${CONTEXT}] Fetching inventory by ID: ${inventoryId}`);
    const inventory = await this.InventoryRepository.getInventoryById(inventoryId);
    if (!inventory) {
      logger.warn(`[${CONTEXT}] Inventory not found with ID: ${inventoryId}`);
      throw new NotFoundError('Inventory not found');
    }
    logger.info(`[${CONTEXT}] Fetched inventory successfully: ${inventory._id}`);
    return inventory;
  }

  async getAllInventories() {
    logger.info(`[${CONTEXT}] Fetching all inventories`);
    const inventories = await this.InventoryRepository.getAllInventories();
    logger.info(`[${CONTEXT}] Fetched all inventories successfully. Count: ${inventories.length}`);
    return inventories;
  }

  async updateInventory(inventoryId, inventoryDetails) {
    logger.info(`[${CONTEXT}] Updating inventory: ${inventoryId}`);
    const updatedInventory = await this.InventoryRepository.updateInventory(inventoryId, inventoryDetails);
    if (!updatedInventory) {
      throw new NotFoundError('Inventory not found');
    }
    logger.info(`[${CONTEXT}] Inventory updated successfully: ${inventoryId}`);
    return updatedInventory;
  }

  async deleteInventory(inventoryId) {
    logger.info(`[${CONTEXT}] Deleting inventory: ${inventoryId}`);
    const deletedInventory = await this.InventoryRepository.deleteInventory(inventoryId);
    if (!deletedInventory) {
      throw new NotFoundError('Inventory not found');
    }
    logger.info(`[${CONTEXT}] Inventory deleted successfully: ${inventoryId}`);
    return deletedInventory;
  }

  async addProductToInventory(inventoryId, productId) {
    logger.info(`[${CONTEXT}] Adding product ${productId} to inventory ${inventoryId}`);
    const product = await this.ProductRepository.getProductById(productId);
    if (!product) {
      throw new NotFoundError('Product not found');
    }

    const inventory = await this.InventoryRepository.getInventoryById(inventoryId);
    if (!inventory) {
      throw new NotFoundError('Inventory not found');
    }

    if (inventory.capacityOccupied + (product.weight || 0) > inventory.totalCapacity) {
      throw new BadRequestError('Adding product exceeds inventory capacity');
    }

    const updatedInventory = await this.InventoryRepository.addProductToInventory(inventoryId, productId);
    await this.InventoryRepository.updateInventory(inventoryId, { $inc: { capacityOccupied: product.weight || 0 } });

    logger.info(`[${CONTEXT}] Product ${productId} added to inventory ${inventoryId} successfully`);
    return updatedInventory;
  }

  async removeProductFromInventory(inventoryId, productId) {
    logger.info(`[${CONTEXT}] Removing product ${productId} from inventory ${inventoryId}`);
    const product = await this.ProductRepository.getProductById(productId);
    if (!product) {
      throw new NotFoundError('Product not found');
    }

    const updatedInventory = await this.InventoryRepository.removeProductFromInventory(inventoryId, productId);
    await this.InventoryRepository.updateInventory(inventoryId, { $inc: { capacityOccupied: -(product.weight || 0) } });

    logger.info(`[${CONTEXT}] Product ${productId} removed from inventory ${inventoryId} successfully`);
    return updatedInventory;
  }

  async getInventoryCapacityUtilization(inventoryId) {
    logger.info(`[${CONTEXT}] Calculating capacity utilization for inventory: ${inventoryId}`);
    const result = await this.InventoryRepository.getInventoryCapacityUtilization(inventoryId);
    logger.info(`[${CONTEXT}] Capacity utilization for inventory ${inventoryId} is ${result.capacityUtilization}`);
    return result;
  }
}

module.exports = InventoryService;
