const { StatusCodes } = require('http-status-codes')

const logger = require('../utils/logger');
const { BaseError } = require('../errors');

const errorMw = (err, req, res, next) => {

  logger.error(`[ErrorHandler] :: ${err.name}: ${err.message}`, {
    stack: err.stack,
    request: {
      method: req.method,
      url: req.originalUrl,
      body: req.body
    }
  });

  if (err instanceof BaseError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      error: {
        name: err.name,
        details: err.details || []
      }
    });
  }

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: 'An unexpected internal server error occurred.',
    error: {
      name: 'InternalServerError',
      details: []
    }
  });
}

module.exports = errorMw