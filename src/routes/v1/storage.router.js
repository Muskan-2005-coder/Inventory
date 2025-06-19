const express = require('express');

const { storageController } = require('../../controllers');

const storageRouter = express.Router();

storageRouter.get('/', storageController.getAllStorages);
storageRouter.post('/', storageController.createStorageLocation);
storageRouter.get('/:id', storageController.getStorage);
storageRouter.put('/:id', storageController.updateStorage);
storageRouter.delete('/:id', storageController.deleteStorage);
storageRouter.post('/:id/products', storageController.addProductToStorage);
storageRouter.delete('/:id/products', storageController.removeProductFromStorage);
storageRouter.get('/:id/utilization', storageController.getStorageUtilization);

module.exports = storageRouter;
