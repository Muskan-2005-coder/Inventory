const { ClientError } = require("../errors")
const logger = require("../utils/logger")

const validator = (schema) => (req, res, next) => {
  try {
    const { success, data, error } = schema.safeParse(req.body)
    if(!success) {
      throw new ClientError.BadRequestError('Invalid request body.', error)
    }
    
    req.userData = data
    req.body = undefined
    next()

  } catch (error) {
    logger.error('Invalid Request Params Received', error)
    throw error
  }
}

module.exports = validator