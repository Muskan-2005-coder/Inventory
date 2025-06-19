/**
 * User Routes
 * Base Path: /api/v1/users
 * 
 * POST   /register           Register a new user
 * POST   /login              Login & get JWT token
 * POST   /logout             Logout a user
 * GET    /me                 Get current user info
 * GET    /                   List all users
 * PUT    /                   Update user's profile
 * PUT    /update_password    Update password
 * PUT    /:id                (Admin) Update user role/shift 
 * DELETE /:id                (Admin) Delete a user
 * 
*/

const express = require('express')

const { userController } = require('../../controllers')
const validator = require('../../validators/zod.validator')
const userValidators = require('../../dto/user.dto')
const { authMiddleware, adminMiddleware } = require('../../middlewares')

const userRouter = express.Router()

userRouter.post('/register', validator(userValidators.createUserSchema), userController.register)
userRouter.post('/login', validator(userValidators.loginUserSchema), userController.login)
userRouter.post('/logout', authMiddleware, userController.logout)
userRouter.get('/me', authMiddleware, userController.getUser)
userRouter.get('/', userController.getAllUsers)
userRouter.put('/', authMiddleware, validator(userValidators.updateUserSchema), userController.updateProfile)
userRouter.put('/update_password', authMiddleware, validator(userValidators.passwordSchema), userController.updatePassword)
userRouter.put('/:id', adminMiddleware, validator(userValidators.adminUserUpdateSchema), userController.ADupdateProfile)  // ADMIN
userRouter.delete('/:id', adminMiddleware, userController.ADdeleteProfile) // ADMIN

module.exports = userRouter