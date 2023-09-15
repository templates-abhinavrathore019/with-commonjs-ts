const logError = require('./log-error');
const logRequest = require('./log-request');
const logResponse = require('./log-response');

module.exports = {
  ...logError,
  ...logRequest,
  ...logResponse,
};
