const { ClientError } = require("../errors")
const logger = require("../utils/logger")

const validator = (schema) => (req, res, next) => {
  try {
    const result = schema.parse(req.body)
    next()

  } catch (error) {
    logger.error('Insufficient Details Reached', error)
    throw new ClientError.BadRequestError(`[Validator] :: ${error.message}`, error)
  }
}

module.exports = validator