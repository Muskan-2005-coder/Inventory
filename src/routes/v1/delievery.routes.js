/**
 * Delivery Management
 * 
 * GET    /api/v1/deliveries/         Get all deliveries
 * POST   /api/v1/deliveries/         Create a new delivery
 * GET    /api/v1/deliveries/:id      Get delivery status
 * PUT    /api/v1/deliveries/:id      Update delivery status/location
 * POST   /api/v1/deliveries/assign   Assign delivery to personnel
 * POST   /api/v1/deliveries/eta      Get predicted ETA
 * 
*/ 



const express = require('express')

const deliveryRouter = express.Router()

deliveryRouter.get('/')
deliveryRouter.post('/')
deliveryRouter.get('/:id')
deliveryRouter.put('/:id')
deliveryRouter.post('/assign')
deliveryRouter.post('/eta')

module.exports = deliveryRouter