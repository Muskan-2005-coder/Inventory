const { z } = require('zod')

const createStorageSchema = z.object({

  locationId: z.string().min(2).max(40),
  dimensions: z.object({ length: z.number(), width: z.number(), height: z.number()}).optional(),
  holdingCapacity: z.number(),
  volume: z.number().optional()

}).strict()

const updateStorageSchema = z.object({

  locationId: z.string().min(2).max(40),
  dimensions: z.object({ length: z.number(), width: z.number(), height: z.number()}).optional(),
  holdingCapacity: z.number(),
  capacityOccupied: z.number(),
  Volume: z.number().optional(),
  VolumeOccupied: z.number().optional(),
  products: z.array(z.string()).optional(),

}).strict()

const addProductSchema = z.object({
  products: z.string()
}).strict()

const removeProductSchema = z.object({
  products: z.string()
}).strict()

module.exports = {
  createStorageSchema,
  updateStorageSchema,
  addProductSchema,
  removeProductSchema
}