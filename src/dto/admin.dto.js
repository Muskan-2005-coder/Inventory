const { z } = require("zod")

const adminUserUpdateSchema = z.object({
  
  name: z.string().min(3).max(20).optional(),
  email: z.string().email().transform(val => val.toLowerCase()).optional(),
  phone: z.string().length(10).optional(),
  role: z.enum(['admin', 'staff', 'supplier', 'driver']).optional(),
  shift: z.enum(['morning', 'evening', 'night']).optional(),
  wagePerHour: z.number().optional(),
  hoursThisMonth: z.number().optional(),
  extraShift: z.number().optional(),
  active: z.boolean().optional(),

}).refine(data => Object.keys(data).length > 0, {
  message: 'At least one field must be updated',
  path: []
})
