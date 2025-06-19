/**
 * Transportation Management
 * 
 * GET    /api/v1/deliveries/         Get all deliveries
 * POST   /api/v1/deliveries/         Create a new transportation
 * GET    /api/v1/deliveries/:id      Get transportation status
 * PUT    /api/v1/deliveries/:id      Update transportation status/location
 * POST   /api/v1/deliveries/assign   Assign transportation to personnel
 * GET    /api/v1/deliveries/eta      Get predicted ETA
 * 
*/ 

const express = require('express')

const { transportationController } = require('../../controllers')
const transportationRouter = express.Router()

transportationRouter.get('/', transportationController.getAllDeliveries)
transportationRouter.post('/', transportationController.createTransportation)
transportationRouter.get('/:id', transportationController.getTransportationStatus)
transportationRouter.put('/:id', transportationController.updateTransportation)
transportationRouter.post('/assign', transportationController.assignTransportation)
transportationRouter.get('/eta', transportationController.getEta)

module.exports = transportationRouter