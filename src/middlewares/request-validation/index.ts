const validateBody = require('./validate-body');
const validateParams = require('./validate-params');
const validateQueryParams = require('./validate-query-params');

module.exports = {
  ...validateBody,
  ...validateParams,
  ...validateQueryParams,
};
