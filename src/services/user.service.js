const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const logger = require('../utils/logger')
const { JWT_SECRET_KEY } = require('./../config/server.config')
const { jwtOptions } = require('../config/auth.config')
const { NotFoundError, BadRequestError } = require('../errors/client.error')

class UserService {
  constructor(UserRepository) {
    this.UserRepository = UserRepository
  }

  register = async (userDetails) => {
    userDetails.password = await bcrypt.hash(userDetails.password, 10)
    const user = await this.UserRepository.registerUser(userDetails)

    const token = jwt.sign({ userId: user._id }, JWT_SECRET_KEY, jwtOptions)
    user.password = undefined
    return { user, token }
  }

  login = async (userDetails) => {
    const user = await this.UserRepository.getUser(userDetails)
    if(!user) throw new NotFoundError('Incorrect Credentials')

    const isPassword = await bcrypt.compare(userDetails.password, user.password)
    if(!isPassword) throw new NotFoundError('Incorrect Credentials')

    const token = jwt.sign({ userId: user._id }, JWT_SECRET_KEY, jwtOptions)
    user.password = undefined
    return { user, token }
  }

  getUser = async (userDetails) => {
    const user = await this.UserRepository.getUser(userDetails)
    if (!user) throw new NotFoundError('User not found')

    user.password = undefined
    return user
  }

  getAllUsers = async () => {
    return await this.UserRepository.getAllUsers()
  }

  updateProfile = async (userId, updateData) => {
    return await this.UserRepository.updateUser(userId, updateData)
  }

  updatePassword = async (userId, updateData) => {
    updateData.password = await bcrypt.hash(updateData.password, 10)
    return await this.UserRepository.updateUser(userId, updateData)
  }

}

module.exports = UserService