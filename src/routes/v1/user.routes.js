/**
 * User Routes
 * 
 * POST   /api/v1/users/register      Register a new user
 * POST   /api/v1/users/login         Login & get JWT token
 * GET    /api/v1/users/me            Get current user info
 * GET    /api/v1/users/              (Admin) List all users
 * PUT    /api/v1/users/:id           (Admin) Update user role/shift 
 * DELETE /api/v1/users/:id           (Admin) Delete a user
 * 
*/

const express = require('express')

const { userController } = require('../../controllers')
const userRouter = express.Router()

userRouter.post('/register', userController.register)
userRouter.post('/login', userController.login)
userRouter.get('/me', userController.getUser)
userRouter.get('/', userController.getAllUsers)
userRouter.put('/:id', userController.updateProfile)
userRouter.delete('/:id', userController.deleteProfile)

module.exports = userRouter