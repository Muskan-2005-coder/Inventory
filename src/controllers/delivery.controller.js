const { StatusCodes } = require('http-status-codes');
const { DeliveryService } = require('../services');
const { DeliveryRepository } = require('../repositories');
const logger = require('../utils/logger');
const ApiResponse = require('../dto/response.dto');

const CONTEXT = 'DeliveryController';

const deliveryService = new DeliveryService(new DeliveryRepository());

const createDelivery = async (req, res) => {
  logger.info(`[${CONTEXT}] Creating new delivery with data: ${JSON.stringify(req.body)}`);
  const delivery = await deliveryService.createDelivery(req.body);
  res.status(StatusCodes.CREATED).json(ApiResponse.success('Delivery created successfully', { delivery }));
  logger.info(`[${CONTEXT}] Delivery created successfully: ${delivery._id}`);
};

const getDelivery = async (req, res) => {
  logger.info(`[${CONTEXT}] Fetching delivery with ID: ${req.params.id}`);
  const delivery = await deliveryService.getDelivery(req.params.id);
  res.status(StatusCodes.OK).json(ApiResponse.success('Delivery fetched successfully', { delivery }));
  logger.info(`[${CONTEXT}] Delivery fetched successfully: ${delivery._id}`);
};

const getAllDeliveries = async (req, res) => {
  logger.info(`[${CONTEXT}] Fetching all deliveries`);
  const deliveries = await deliveryService.getAllDeliveries();
  res.status(StatusCodes.OK).json(ApiResponse.success('All deliveries fetched successfully', { length: deliveries.length, deliveries }));
  logger.info(`[${CONTEXT}] All deliveries fetched successfully. Total: ${deliveries.length}`);
};

const updateDelivery = async (req, res) => {
  logger.info(`[${CONTEXT}] Updating delivery ID: ${req.params.id} with data: ${JSON.stringify(req.body)}`);
  const updatedDelivery = await deliveryService.updateDelivery(req.params.id, req.body);
  res.status(StatusCodes.OK).json(ApiResponse.success('Delivery updated successfully', { delivery: updatedDelivery }));
  logger.info(`[${CONTEXT}] Delivery updated successfully: ${updatedDelivery._id}`);
};

const deleteDelivery = async (req, res) => {
  logger.info(`[${CONTEXT}] Deleting delivery ID: ${req.params.id}`);
  const deletedDelivery = await deliveryService.deleteDelivery(req.params.id);
  res.status(StatusCodes.OK).json(ApiResponse.success('Delivery deleted successfully', { delivery: deletedDelivery }));
  logger.info(`[${CONTEXT}] Delivery deleted successfully: ${deletedDelivery._id}`);
};

const getDeliveriesByStatus = async (req, res) => {
    logger.info(`[${CONTEXT}] Fetching deliveries with status: ${req.params.status}`);
    const deliveries = await deliveryService.getDeliveriesByStatus(req.params.status);
    res.status(StatusCodes.OK).json(ApiResponse.success('Deliveries fetched successfully', { deliveries }));
    logger.info(`[${CONTEXT}] Deliveries fetched for status ${req.params.status}. Count: ${deliveries.length}`);
};

const getOverdueDeliveries = async (req, res) => {
    logger.info(`[${CONTEXT}] Fetching overdue deliveries`);
    const deliveries = await deliveryService.getOverdueDeliveries();
    res.status(StatusCodes.OK).json(ApiResponse.success('Overdue deliveries fetched successfully', { deliveries }));
    logger.info(`[${CONTEXT}] Overdue deliveries fetched. Count: ${deliveries.length}`);
};

const updateDeliveryStatus = async (req, res) => {
    logger.info(`[${CONTEXT}] Updating delivery status for ID: ${req.params.id}`);
    const updatedDelivery = await deliveryService.updateDeliveryStatus(req.params.id, req.body.status);
    res.status(StatusCodes.OK).json(ApiResponse.success('Delivery status updated successfully', { delivery: updatedDelivery }));
    logger.info(`[${CONTEXT}] Delivery status updated successfully for: ${updatedDelivery._id}`);
};

const assignDelivery = async(req, res) => {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not Implemented Yet "})
}

const getEta = async(req, res) => {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not Implemented Yet "})
}

const getDeliveryStatus = async(req, res) => {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not Implemented Yet "})
}

module.exports = {
  createDelivery,
  getDelivery,
  getAllDeliveries,
  updateDelivery,
  deleteDelivery,
  getDeliveriesByStatus,
  getOverdueDeliveries,
  updateDeliveryStatus,
  assignDelivery,
  getEta,
  getDeliveryStatus
};