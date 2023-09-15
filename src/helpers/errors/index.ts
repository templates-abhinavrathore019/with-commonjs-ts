const serverError = require('./ServerError');
const badRequestError = require('./BadRequest');
const forbiddenRequestError = require('./ForbiddenRequest');
const notFoundRequestError = require('./NotFoundError');
const serverRequestError = require('./ServerError');
const unauthorizedRequestError = require('./UnauthorizedError');

module.exports = {
  ...serverError,
  ...badRequestError,
  ...forbiddenRequestError,
  ...notFoundRequestError,
  ...serverRequestError,
  ...unauthorizedRequestError,
};
