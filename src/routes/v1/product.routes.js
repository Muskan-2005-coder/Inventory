const express = require('express')

const adminMiddleware = require('../../middlewares/auth.admin.middleware')
const validator = require('../../validators/zod.validator')
const { productController } = require('../../controllers')

const productRouter = express.Router()

productRouter.post('/', productController.createProduct)
productRouter.get('/', productController.getAllProducts)
productRouter.get('/needsRestock', productController.getProductsNeedingRestock)
productRouter.get('/category/:category', productController.getProductsByCategory)
productRouter.get('/supplier/:supplierId', productController.getProductsBySupplier)
productRouter.get('/:id', productController.getProduct)
productRouter.put('/:id', productController.updateProduct)
productRouter.delete('/:id', productController.deleteProduct)

module.exports = productRouter