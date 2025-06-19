const logger = require('../utils/logger')
const { NotFoundError } = require('../errors/client.error')

const CONTEXT = 'TransportationService'

class TransportationService {
  constructor(TransportationRepository) {
    this.TransportationRepository = TransportationRepository
  }

  async createTransportation(transportationDetails) {
    logger.info(`[${CONTEXT}] Creating new transportation with details: ${JSON.stringify(transportationDetails)}`)
    const transportation = await this.TransportationRepository.createTransportation(transportationDetails)
    logger.info(`[${CONTEXT}] Transportation created successfully: ${transportation._id}`)
    return transportation
  }

  async getTransportation(transportationId) {
    logger.info(`[${CONTEXT}] Fetching transportation by ID: ${transportationId}`)
    const transportation = await this.TransportationRepository.getTransportationById(transportationId)
    if (!transportation) {
      logger.warn(`[${CONTEXT}] Transportation not found with ID: ${transportationId}`)
      throw new NotFoundError('Transportation not found')
    }
    logger.info(`[${CONTEXT}] Fetched transportation successfully: ${transportation._id}`)
    return transportation
  }

  async getAllDeliveries() {
    logger.info(`[${CONTEXT}] Fetching all deliveries`)
    const deliveries = await this.TransportationRepository.getAllDeliveries()
    logger.info(`[${CONTEXT}] Fetched all deliveries successfully. Count: ${deliveries.length}`)
    return deliveries
  }

  async getDeliveriesByAssignee(assignedTo) {
    logger.info(`[${CONTEXT}] Fetching deliveries for assignee: ${assignedTo}`)
    const deliveries = await this.TransportationRepository.getTransportationByAssignee(assignedTo)
    logger.info(`[${CONTEXT}] Fetched deliveries for assignee ${assignedTo} successfully. Count: ${deliveries.length}`)
    return deliveries
  }

  async getDeliveriesByStatus(status) {
    logger.info(`[${CONTEXT}] Fetching deliveries with status: ${status}`)
    const deliveries = await this.TransportationRepository.getDeliveriesByStatus(status)
    logger.info(`[${CONTEXT}] Fetched deliveries for status ${status} successfully. Count: ${deliveries.length}`)
    return deliveries
  }

  async getOverdueDeliveries() {
    logger.info(`[${CONTEXT}] Fetching overdue deliveries`)
    const deliveries = await this.TransportationRepository.getOverdueDeliveries()
    logger.info(`[${CONTEXT}] Fetched overdue deliveries successfully. Count: ${deliveries.length}`)
    return deliveries
  }

  async updateTransportation(transportationId, transportationDetails) {
    logger.info(`[${CONTEXT}] Updating transportation: ${transportationId}`)
    const updatedTransportation = await this.TransportationRepository.updateTransportation(transportationId, transportationDetails)
    if (!updatedTransportation) {
      throw new NotFoundError('Transportation not found')
    }
    logger.info(`[${CONTEXT}] Transportation updated successfully: ${transportationId}`)
    return updatedTransportation
  }

  async updateTransportationStatus(transportationId, status) {
    logger.info(`[${CONTEXT}] Updating transportation status for ${transportationId} to ${status}`)
    const updatedTransportation = await this.TransportationRepository.updateTransportation(transportationId, { status })
    if (!updatedTransportation) {
        throw new NotFoundError('Transportation not found')
    }
    logger.info(`[${CONTEXT}] Transportation status updated successfully for: ${transportationId}`)
    return updatedTransportation
  }

  async deleteTransportation(transportationId) {
    logger.info(`[${CONTEXT}] Deleting transportation: ${transportationId}`)
    const deletedTransportation = await this.TransportationRepository.deleteTransportation(transportationId)
    if (!deletedTransportation) {
      throw new NotFoundError('Transportation not found')
    }
    logger.info(`[${CONTEXT}] Transportation deleted successfully: ${transportationId}`)
    return deletedTransportation
  }
}

module.exports = TransportationService
