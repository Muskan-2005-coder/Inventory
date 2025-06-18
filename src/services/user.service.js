const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const logger = require('../utils/logger')
const { JWT_SECRET_KEY } = require('./../config/server.config')
const { jwtOptions } = require('../config/auth.config')
const { NotFoundError } = require('../errors/client.error')

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

  login = async (userDetails) => {
    try {
      let user = null
      if(userDetails.email) user = await this.UserRepository.getUserByEmail(userDetails.email)
      else user = await this.UserRepository.getUserByPhone(userDetails.phone)
      if(!user) {
        throw new NotFoundError('Incorrect Credentials')
      }
    
      const isPassword = await bcrypt.compare(userDetails.password, user.password)
      if(!isPassword){
        throw new NotFoundError('Incorrect Credentials')
      }
    
      const token = jwt.sign({ userId: user._id }, JWT_SECRET_KEY, jwtOptions)
      user.password = undefined
      return { user, token }

    } catch (error) {
      throw error
    }
  }
}

module.exports = UserService