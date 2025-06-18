const BaseError = require('../errors/base.error')
const { StatusCodes } = require('http-status-codes')
const logger = require('../utils/logger')

const errorMw = (error, req, res, next) => {
  if (error instanceof BaseError) {
    return res.status(error.statusCode).json({
      success: false,
      message: error.message,
      error: error.name,
      meta: error.meta || {}
    })
  }

  logger.error('Something went wrong!', error)
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: 'Something went wrong',
    error: 'InternalServerError',
    meta: {}
  })
}

module.exports = errorMw