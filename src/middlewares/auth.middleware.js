const jwt = require('jsonwebtoken')

const { UnauthorizedError } = require('../errors/client.error')
const { JWT_SECRET_KEY } = require('../config/server.config')
const logger = require('../utils/logger')

const authMiddleware = (req, res, next) => {

  const authHeader = req.headers['authorization']
  const token = req.cookies.token || ((authHeader && authHeader.startsWith('Bearer ')) ? authHeader.split(' ')[1] : null)
  if(!token) {
    throw new UnauthorizedError('No Token Provided')
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET_KEY)
    req.userId = decoded.userId
    next()

  } catch (error) {
    logger.error('Invalid or Expired Token Provided', error)
    throw new UnauthorizedError('Invalid or expired Token Provided')
  }
}

module.exports = authMiddleware