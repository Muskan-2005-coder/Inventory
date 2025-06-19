const express = require('express')

const adminMiddleware = require('../../middlewares/auth.admin.middleware')
const validator = require('../../validators/zod.validator')
const { productController } = require('../../controllers')

const productRouter = express.Router()

productRouter.post('/', productController.createProduct)
productRouter.get('/', productController.getAllProducts)
productRouter.get('/:id', productController.getProduct)

module.exports = productRouter