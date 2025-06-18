const { z } = require("zod")

const createUserSchema = z.object({
  name: z.string().min(3),
  username: z.string().min(3).max(10).transform(val => val.toLowerCase()),
  email: z.string().email().transform(val => val.toLowerCase()),
  password: z.string().min(4).max(10),
  role: z.string().optional(),
  phone: z.optional()
}).strict()

const updateUserSchema = z.object({

})

module.exports = {
  createUserSchema
}