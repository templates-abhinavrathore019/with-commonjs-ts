const paginatedResults = require('./paginated-results');
const requestValidation = require('./request-validation');

module.exports = {
  ...paginatedResults,
  ...requestValidation,
};
