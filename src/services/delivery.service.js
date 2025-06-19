const logger = require('../utils/logger');
const { NotFoundError } = require('../errors/client.error');

const CONTEXT = 'DeliveryService';

class DeliveryService {
  constructor(DeliveryRepository) {
    this.DeliveryRepository = DeliveryRepository;
  }

  async createDelivery(deliveryDetails) {
    logger.info(`[${CONTEXT}] Creating new delivery with details: ${JSON.stringify(deliveryDetails)}`);
    const delivery = await this.DeliveryRepository.createDelivery(deliveryDetails);
    logger.info(`[${CONTEXT}] Delivery created successfully: ${delivery._id}`);
    return delivery;
  }

  async getDelivery(deliveryId) {
    logger.info(`[${CONTEXT}] Fetching delivery by ID: ${deliveryId}`);
    const delivery = await this.DeliveryRepository.getDeliveryById(deliveryId);
    if (!delivery) {
      logger.warn(`[${CONTEXT}] Delivery not found with ID: ${deliveryId}`);
      throw new NotFoundError('Delivery not found');
    }
    logger.info(`[${CONTEXT}] Fetched delivery successfully: ${delivery._id}`);
    return delivery;
  }

  async getAllDeliveries() {
    logger.info(`[${CONTEXT}] Fetching all deliveries`);
    const deliveries = await this.DeliveryRepository.getAllDeliveries();
    logger.info(`[${CONTEXT}] Fetched all deliveries successfully. Count: ${deliveries.length}`);
    return deliveries;
  }

  async getDeliveriesByAssignee(assignedTo) {
    logger.info(`[${CONTEXT}] Fetching deliveries for assignee: ${assignedTo}`);
    const deliveries = await this.DeliveryRepository.getDeliveryByAssignee(assignedTo);
    logger.info(`[${CONTEXT}] Fetched deliveries for assignee ${assignedTo} successfully. Count: ${deliveries.length}`);
    return deliveries;
  }

  async getDeliveriesByStatus(status) {
    logger.info(`[${CONTEXT}] Fetching deliveries with status: ${status}`);
    const deliveries = await this.DeliveryRepository.getDeliveriesByStatus(status);
    logger.info(`[${CONTEXT}] Fetched deliveries for status ${status} successfully. Count: ${deliveries.length}`);
    return deliveries;
  }

  async getOverdueDeliveries() {
    logger.info(`[${CONTEXT}] Fetching overdue deliveries`);
    const deliveries = await this.DeliveryRepository.getOverdueDeliveries();
    logger.info(`[${CONTEXT}] Fetched overdue deliveries successfully. Count: ${deliveries.length}`);
    return deliveries;
  }

  async updateDelivery(deliveryId, deliveryDetails) {
    logger.info(`[${CONTEXT}] Updating delivery: ${deliveryId}`);
    const updatedDelivery = await this.DeliveryRepository.updateDelivery(deliveryId, deliveryDetails);
    if (!updatedDelivery) {
      throw new NotFoundError('Delivery not found');
    }
    logger.info(`[${CONTEXT}] Delivery updated successfully: ${deliveryId}`);
    return updatedDelivery;
  }

  async updateDeliveryStatus(deliveryId, status) {
    logger.info(`[${CONTEXT}] Updating delivery status for ${deliveryId} to ${status}`);
    const updatedDelivery = await this.DeliveryRepository.updateDelivery(deliveryId, { status });
    if (!updatedDelivery) {
        throw new NotFoundError('Delivery not found');
    }
    logger.info(`[${CONTEXT}] Delivery status updated successfully for: ${deliveryId}`);
    return updatedDelivery;
  }

  async deleteDelivery(deliveryId) {
    logger.info(`[${CONTEXT}] Deleting delivery: ${deliveryId}`);
    const deletedDelivery = await this.DeliveryRepository.deleteDelivery(deliveryId);
    if (!deletedDelivery) {
      throw new NotFoundError('Delivery not found');
    }
    logger.info(`[${CONTEXT}] Delivery deleted successfully: ${deliveryId}`);
    return deletedDelivery;
  }
}

module.exports = DeliveryService;
