const express = require('express');

const { storageController } = require('../../controllers');
const authMiddleware = require('../../middlewares/auth.middleware');
const adminMiddleware = require('../../middlewares/auth.admin.middleware');
const validator = require('../../validators/zod.validator');
const { storageDto } = require('../../dto');

const storageRouter = express.Router();

storageRouter.get('/', storageController.getAllStorages);
storageRouter.post('/', authMiddleware, validator(storageDto.createStorageSchema), storageController.createStorageLocation);
storageRouter.post('/:id/products', authMiddleware, validator(storageDto.addProductSchema), storageController.addProductToStorage);
storageRouter.delete('/:id/products', authMiddleware, validator(storageDto.removeProductSchema), storageController.removeProductFromStorage);
storageRouter.get('/:id/utilization', authMiddleware, storageController.getStorageUtilization);
storageRouter.get('/:id', storageController.getStorage);
storageRouter.put('/:id', authMiddleware, validator(storageDto.updateStorageSchema), storageController.updateStorage);
storageRouter.delete('/:id', adminMiddleware, storageController.deleteStorage);

module.exports = storageRouter;
