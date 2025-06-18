/**
 * Delivery Management
 * 
 * GET    /api/v1/deliveries/         Get all deliveries
 * POST   /api/v1/deliveries/         Create a new delivery
 * GET    /api/v1/deliveries/:id      Get delivery status
 * PUT    /api/v1/deliveries/:id      Update delivery status/location
 * POST   /api/v1/deliveries/assign   Assign delivery to personnel
 * GET    /api/v1/deliveries/eta      Get predicted ETA
 * 
*/ 

const express = require('express')

const { deliveryController } = require('../../controllers')
const deliveryRouter = express.Router()

deliveryRouter.get('/', deliveryController.getAllDeliveries)
deliveryRouter.post('/', deliveryController.createDelivery)
deliveryRouter.get('/:id', deliveryController.getDeliveryStatus)
deliveryRouter.put('/:id', deliveryController.updateDelivery)
deliveryRouter.post('/assign', deliveryController.assignDelivery)
deliveryRouter.get('/eta', deliveryController.getEta)

module.exports = deliveryRouter