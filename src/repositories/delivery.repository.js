const Delivery = require('../models/delivery.model')
const logger = require('../utils/logger')

const CONTEXT = 'DeliveryRepository'

class DeliveryRepository {
  async createDelivery(deliveryDetails) {
    try {
      const delivery = await Delivery.create(deliveryDetails)
      return delivery

    } catch (error) {
      logger.error(`[${CONTEXT}][createDelivery] :: ${error.message}`, error)
      throw error
    }
  }

  async getDeliveryById(deliveryId) {
    try {
      const delivery = await Delivery.findById(deliveryId)
      return delivery

    } catch (error) {
      logger.error(`[${CONTEXT}][getDeliveryById] :: ${error.message}`, error)
      throw error
    }
  }

  async getAllDeliveries() {
    try {
      const deliveries = await Delivery.find()
      return deliveries

    } catch (error) {
      logger.error(`[${CONTEXT}][getAllDeliveries] :: ${error.message}`, error)
      throw error
    }
  }

  async getDeliveryByAssignee(assignedTo) {
    try {
      const deliveries = await Delivery.find({ assignedTo })
      return deliveries

    } catch (error) {
      logger.error(`[${CONTEXT}][getDeliveryByAssignee] :: ${error.message}`, error)
      throw error
    }
  }

  async getDeliveriesByPackageId(packageId) {
    try {
      const deliveries = await Delivery.find({ packageId })
      return deliveries

    } catch (error) {
      logger.error(`[${CONTEXT}][getDeliveriesByPackageId] :: ${error.message}`, error)
      throw error
    }
  }

  async getDeliveriesByDestination(destination) {
    try {
      const deliveries = await Delivery.find({ destination })
      return deliveries

    } catch (error) {
      logger.error(`[${CONTEXT}][getDeliveriesByDestination] :: ${error.message}`, error)
      throw error
    }
  }

  async getDeliveriesByOrigin(startLocation) {
    try {
      const deliveries = await Delivery.find({ startLocation })
      return deliveries

    } catch (error) {
      logger.error(`[${CONTEXT}][getDeliveriesByDestination] :: ${error.message}`, error)
      throw error
    }
  }

  async getDeliveriesByCurrentLocation(currentLocation) {
    try {
      const deliveries = await Delivery.find({ currentLocation })
      return deliveries

    } catch (error) {
      logger.error(`[${CONTEXT}][getDeliveriesByCurrentLocation] :: ${error.message}`, error)
      throw error
    }
  }

  async getDeliveriesByStatus(status) {
    try {
      const deliveries = await Delivery.find({ status })
      return deliveries

    } catch (error) {
      logger.error(`[${CONTEXT}][getDeliveriesByStatus] :: ${error.message}`, error)
      throw error
    }
  }

  async getDeliveriesByTransportMode(transportMode) {
    try {
      const deliveries = await Delivery.find({ transportMode })
      return deliveries

    } catch (error) {
      logger.error(`[${CONTEXT}][getDeliveriesByTransportMode] :: ${error.message}`, error)
      throw error
    }
  }

  async getOverdueDeliveries() {
    try {
      const deliveries = await Delivery.find({
        eta: { $lt: new Date() },
        status: { $ne: 'delivered' }
      })
      return deliveries

    } catch (error) {
      logger.error(`[${CONTEXT}][getOverdueDeliveries] :: ${error.message}`, error)
      throw error
    }
  }

  async updateDelivery(deliveryId, deliveryDetails) {
    try {
      const updatedDelivery = await Delivery.findByIdAndUpdate(deliveryId, deliveryDetails, { new: true })
      return updatedDelivery

    } catch (error) {
      logger.error(`[${CONTEXT}][updateDelivery] :: ${error.message}`, error)
      throw error
    }
  }

  async deleteDelivery(deliveryId) {
    try {
      const deletedDelivery = await Delivery.findByIdAndDelete(deliveryId)
      return deletedDelivery
      
    } catch (error) {
      logger.error(`[${CONTEXT}][deleteDelivery] :: ${error.message}`, error)
      throw error
    }
  }
}

module.exports = DeliveryRepository
