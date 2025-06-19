const { z } = require('zod')

const createInventorySchema = z.object({
  name: z.string().min(3).max(20)
}).strict()

const updateInventorySchema = z.object({

  name: z.string().min(3).max(10).optional(),
  products: z.array(z.string()).optional(),
  totalCapacity: z.number().nonnegative().optional(),
  capacityOccupied: z.number().optional(),
  storage: z.array(z.string()).optional(),
  inventoryLocation: z.object({
    type: z.literal('Point'),
    coordinates: z.array(z.number()).length(2, { message: "Coordinates must be an array of two numbers: [longitude, latitude]" })
  }).optional()

}).strict().refine(data => Object.keys(data).length > 0, {
  message: 'At least one field must be updated',
  path: []
})

module.exports = {
  createInventorySchema,
  updateInventorySchema
}

/**
 * Example of location..
 * "inventoryLocation": {
    "type": "Point",
    "coordinates": [77.5946, 12.9716] // [longitude, latitude]
  }
 */