const jwt = require('jsonwebtoken')

const { UnauthorizedError } = require('../errors/client.error')
const { JWT_SECRET_KEY } = require('../config/server.config')
const logger = require('../utils/logger')
const { BaseError } = require('../errors')

const adminMiddleware = (req, res, next) => {

  const authHeader = req.headers['authorization']
  const token = req.cookies.token || ((authHeader && authHeader.startsWith('Bearer ')) ? authHeader.split(' ')[1] : null)
  if(!token) {
    throw new UnauthorizedError('No Token Provided')
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET_KEY)
    if(req.role != 'admin') throw new UnauthorizedError('Only Admin can Do this Operation!')
    req.userId = decoded.userId
    next()

  } catch (error) {
    logger.error('Invalid or Expired Token Provided', error)
    if(error instanceof BaseError) throw error
    throw new UnauthorizedError('Invalid or expired Token Provided')
  }
}

module.exports = adminMiddleware