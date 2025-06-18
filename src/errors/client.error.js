const BaseError = require('./base.error');

class BadRequestError extends BaseError {
  constructor(description = 'Bad Request', meta = {}) {
    super('BadRequestError', 400, description, true, meta);
  }
}

class UnauthorizedError extends BaseError {
  constructor(description = 'Unauthorized', meta = {}) {
    super('UnauthorizedError', 401, description, true, meta);
  }
}

class ForbiddenError extends BaseError {
  constructor(description = 'Forbidden', meta = {}) {
    super('ForbiddenError', 403, description, true, meta);
  }
}

class NotFoundError extends BaseError {
  constructor(description = 'Not Found', meta = {}) {
    super('NotFoundError', 404, description, true, meta);
  }
}

class MethodNotAllowedError extends BaseError {
  constructor(description = 'Method Not Allowed', meta = {}) {
    super('MethodNotAllowedError', 405, description, true, meta);
  }
}

class NotAcceptableError extends BaseError {
  constructor(description = 'Not Acceptable', meta = {}) {
    super('NotAcceptableError', 406, description, true, meta);
  }
}

class ConflictError extends BaseError {
  constructor(description = 'Conflict', meta = {}) {
    super('ConflictError', 409, description, true, meta);
  }
}

class GoneError extends BaseError {
  constructor(description = 'Gone', meta = {}) {
    super('GoneError', 410, description, true, meta);
  }
}

class UnsupportedMediaTypeError extends BaseError {
  constructor(description = 'Unsupported Media Type', meta = {}) {
    super('UnsupportedMediaTypeError', 415, description, true, meta);
  }
}

class UnprocessableEntityError extends BaseError {
  constructor(description = 'Unprocessable Entity', meta = {}) {
    super('UnprocessableEntityError', 422, description, true, meta);
  }
}

class TooManyRequestsError extends BaseError {
  constructor(description = 'Too Many Requests', meta = {}) {
    super('TooManyRequestsError', 429, description, true, meta);
  }
}

module.exports = {
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  MethodNotAllowedError,
  NotAcceptableError,
  ConflictError,
  GoneError,
  UnsupportedMediaTypeError,
  UnprocessableEntityError,
  TooManyRequestsError
};