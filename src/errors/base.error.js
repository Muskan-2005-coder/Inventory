class BaseError extends Error {
  constructor (name, statusCode, description) {
    super(description)
    this.name = name
    this.statusCode = statusCode
    this.meta = meta
    Error.captureStackTrace(this, this.constructor)
  }
}

module.exports = BaseError