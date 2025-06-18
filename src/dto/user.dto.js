const { z } = require("zod")

const createUserSchema = z.object({
  name: z.string().min(3).max(20),
  email: z.string().email().transform(val => val.toLowerCase()),
  password: z.string().min(4).max(10),
  role: z.enum(['admin', 'staff', 'supplier', 'driver']).default('staff')
}).strict()

const updateUserSchema = z.object({
  name: z.string().min(3).max(20).optional(),
  username: z.string().min(3).max(10).optional(),
  email: z.string().email().transform(val => val.toLowerCase()).optional(),
  role: z.enum(['admin', 'staff', 'supplier', 'driver']).optional(),
  phone: z.string().length(10).optional(),
  shift: z.enum(['morning', 'evening', 'night']).optional(),
  wagePerHour: z.coerce.number().optional(),
  active: z.boolean().optional().default(true)
})

module.exports = {
  createUserSchema,
  updateUserSchema
}