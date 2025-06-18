const { ClientError } = require("../errors")
const logger = require("../utils/logger")

const validator = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body)
    next()

  } catch (error) {
    logger.error('Invalid Request Params Received', error)
    throw new ClientError.BadRequestError(`[Validator] :: ${error.message}`, error)
  }
}

module.exports = validator