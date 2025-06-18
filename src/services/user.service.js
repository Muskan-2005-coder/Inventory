const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const logger = require('../utils/logger')
const { JWT_SECRET_KEY } = require('./../config/server.config')
const { jwtOptions } = require('../config/auth.config')

class UserService {
  constructor(UserRepository) {
    this.UserRepository = UserRepository
  }

  register = async (userDetails) => {
    try {
      userDetails.password = await bcrypt.hash(userDetails.password, 10)
      const user = await this.UserRepository.registerUser(userDetails)
  
      const token = jwt.sign({ userId: user._id }, JWT_SECRET_KEY, jwtOptions)
      user.password = undefined
      return { user, token }

    } catch (error) {
      throw error
    }
  }
}

module.exports = UserService