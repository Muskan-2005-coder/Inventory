const { z } = require('zod')

const createStorageSchema = z.object({

  locationId: z.string().min(2).max(40),
  dimensions: z.object({ length: z.number(), width: z.number(), height: z.number()}),
  holdingCapacity: z.number(),
  Volume: z.number().optional()

}).strict()

const updateStorageSchema = z.object({

  locationId: z.string().min(2).max(40).optional(),
  dimensions: z.object({ length: z.number(), width: z.number(), height: z.number()}).optional(),
  holdingCapacity: z.number().optional(),
  capacityOccupied: z.number().optional(),
  Volume: z.number().optional(),
  VolumeOccupied: z.number().optional(),
  products: z.array(z.string()).optional(),

}).strict()

const addProductSchema = z.object({
  productId: z.string()
}).strict()

const removeProductSchema = z.object({
  productId: z.string()
}).strict()

module.exports = {
  createStorageSchema,
  updateStorageSchema,
  addProductSchema,
  removeProductSchema
}