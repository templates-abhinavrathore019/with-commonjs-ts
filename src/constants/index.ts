const api = require('./api');
const apiStatusCodes = require('./api-status-codes');
const httpStatusCode = require('./http-status-codes');

module.exports = {
    ...api,
    ...apiStatusCodes,
    ...httpStatusCode,
};
