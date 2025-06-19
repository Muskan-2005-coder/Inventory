/**
 * Common Zod middleware where you can pass any Schema to be parsed
 * Dependency Injection is Used in Routes
 */

const { ClientError } = require("../errors")
const logger = require("../utils/logger")

const CONTEXT = 'ZodValidator';

const validator = (schema) => (req, _ , next) => {
  logger.info(`[${CONTEXT}] Validating request body for ${req.method} ${req.originalUrl}: ${JSON.stringify(req.body)}`);
  try {
    const { success, data, error } = schema.safeParse(req.body)
    if(!success) {
      logger.error(`[${CONTEXT}] Validation failed for ${req.method} ${req.originalUrl}: ${error}`);
      throw new ClientError.BadRequestError('Invalid request body.', error)
    }

    req.userData = data
    req.body = undefined
    logger.info(`[${CONTEXT}] Validation passed for ${req.method} ${req.originalUrl}`);
    next()

  } catch (error) {
    logger.error(`[${CONTEXT}] Invalid Request Params Received for ${req.method} ${req.originalUrl}`, error)
    throw error
  }
}

module.exports = validator;