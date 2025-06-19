const Delivery = require('../models/delivery.model')
const logger = require('../utils/logger')

const CONTEXT = 'DeliveryRepository'

class DeliveryRepository {
  async createDelivery(deliveryDetails) {
    try {
      logger.info(`[${CONTEXT}] Creating new delivery with details: ${JSON.stringify(deliveryDetails)}`)
      const delivery = await Delivery.create(deliveryDetails)
      logger.info(`[${CONTEXT}] Delivery created successfully: ${delivery._id}`)
      return delivery

    } catch (error) {
      logger.error(`[${CONTEXT}][createDelivery] :: ${error.message}`, error)
      throw error
    }
  }

  async getDeliveryById(deliveryId) {
    try {
      logger.info(`[${CONTEXT}] Fetching delivery by ID: ${deliveryId}`)
      const delivery = await Delivery.findById(deliveryId)
      logger.info(`[${CONTEXT}] Delivery fetched successfully: ${delivery._id}`)
      return delivery

    } catch (error) {
      logger.error(`[${CONTEXT}][getDeliveryById] :: ${error.message}`, error)
      throw error
    }
  }

  async getAllDeliveries() {
    try {
      logger.info(`[${CONTEXT}] Fetching all deliveries`)
      const deliveries = await Delivery.find()
      logger.info(`[${CONTEXT}] Fetched all deliveries successfully. Count: ${deliveries.length}`)
      return deliveries

    } catch (error) {
      logger.error(`[${CONTEXT}][getAllDeliveries] :: ${error.message}`, error)
      throw error
    }
  }

  async getDeliveryByAssignee(assignedTo) {
    try {
      logger.info(`[${CONTEXT}] Fetching deliveries assigned to: ${assignedTo}`)
      const deliveries = await Delivery.find({ assignedTo })
      logger.info(`[${CONTEXT}] Fetched deliveries for assignee ${assignedTo} successfully. Count: ${deliveries.length}`)
      return deliveries

    } catch (error) {
      logger.error(`[${CONTEXT}][getDeliveryByAssignee] :: ${error.message}`, error)
      throw error
    }
  }

  async getDeliveriesByPackageId(packageId) {
    try {
      logger.info(`[${CONTEXT}] Fetching deliveries for package ID: ${packageId}`)
      const deliveries = await Delivery.find({ packageId })
      logger.info(`[${CONTEXT}] Fetched deliveries for package ID ${packageId} successfully. Count: ${deliveries.length}`)
      return deliveries

    } catch (error) {
      logger.error(`[${CONTEXT}][getDeliveriesByPackageId] :: ${error.message}`, error)
      throw error
    }
  }

  async getDeliveriesByDestination(destination) {
    try {
      logger.info(`[${CONTEXT}] Fetching deliveries with destination: ${destination}`)
      const deliveries = await Delivery.find({ destination })
      logger.info(`[${CONTEXT}] Fetched deliveries for destination ${destination} successfully. Count: ${deliveries.length}`)
      return deliveries

    } catch (error) {
      logger.error(`[${CONTEXT}][getDeliveriesByDestination] :: ${error.message}`, error)
      throw error
    }
  }

  async getDeliveriesByOrigin(startLocation) {
    try {
      logger.info(`[${CONTEXT}] Fetching deliveries with origin: ${startLocation}`)
      const deliveries = await Delivery.find({ startLocation })
      logger.info(`[${CONTEXT}] Fetched deliveries for origin ${startLocation} successfully. Count: ${deliveries.length}`)
      return deliveries

    } catch (error) {
      logger.error(`[${CONTEXT}][getDeliveriesByOrigin] :: ${error.message}`, error)
      throw error
    }
  }

  async getDeliveriesByCurrentLocation(currentLocation) {
    try {
      logger.info(`[${CONTEXT}] Fetching deliveries with current location: ${currentLocation}`)
      const deliveries = await Delivery.find({ currentLocation })
      logger.info(`[${CONTEXT}] Fetched deliveries for current location ${currentLocation} successfully. Count: ${deliveries.length}`)
      return deliveries

    } catch (error) {
      logger.error(`[${CONTEXT}][getDeliveriesByCurrentLocation] :: ${error.message}`, error)
      throw error
    }
  }

  async getDeliveriesByStatus(status) {
    try {
      logger.info(`[${CONTEXT}] Fetching deliveries with status: ${status}`)
      const deliveries = await Delivery.find({ status })
      logger.info(`[${CONTEXT}] Fetched deliveries for status ${status} successfully. Count: ${deliveries.length}`)
      return deliveries

    } catch (error) {
      logger.error(`[${CONTEXT}][getDeliveriesByStatus] :: ${error.message}`, error)
      throw error
    }
  }

  async getDeliveriesByTransportMode(transportMode) {
    try {
      logger.info(`[${CONTEXT}] Fetching deliveries with transport mode: ${transportMode}`)
      const deliveries = await Delivery.find({ transportMode })
      logger.info(`[${CONTEXT}] Fetched deliveries for transport mode ${transportMode} successfully. Count: ${deliveries.length}`)
      return deliveries

    } catch (error) {
      logger.error(`[${CONTEXT}][getDeliveriesByTransportMode] :: ${error.message}`, error)
      throw error
    }
  }

  async getOverdueDeliveries() {
    try {
      logger.info(`[${CONTEXT}] Fetching overdue deliveries`)
      const deliveries = await Delivery.find({
        eta: { $lt: new Date() },
        status: { $ne: 'delivered' }
      })
      logger.info(`[${CONTEXT}] Fetched overdue deliveries successfully. Count: ${deliveries.length}`)
      return deliveries

    } catch (error) {
      logger.error(`[${CONTEXT}][getOverdueDeliveries] :: ${error.message}`, error)
      throw error
    }
  }

  async updateDelivery(deliveryId, deliveryDetails) {
    try {
      logger.info(`[${CONTEXT}] Updating delivery: ${deliveryId}`)
      const updatedDelivery = await Delivery.findByIdAndUpdate(deliveryId, deliveryDetails, { new: true })
      logger.info(`[${CONTEXT}] Delivery updated successfully: ${updatedDelivery._id}`)
      return updatedDelivery

    } catch (error) {
      logger.error(`[${CONTEXT}][updateDelivery] :: ${error.message}`, error)
      throw error
    }
  }

  async deleteDelivery(deliveryId) {
    try {
      logger.info(`[${CONTEXT}] Deleting delivery: ${deliveryId}`)
      const deletedDelivery = await Delivery.findByIdAndDelete(deliveryId)
      logger.info(`[${CONTEXT}] Delivery deleted successfully: ${deletedDelivery._id}`)
      return deletedDelivery
      
    } catch (error) {
      logger.error(`[${CONTEXT}][deleteDelivery] :: ${error.message}`, error)
      throw error
    }
  }
}

module.exports = DeliveryRepository
