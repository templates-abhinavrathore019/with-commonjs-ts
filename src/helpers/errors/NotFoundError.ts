const { HTTPStatusCodes } = require('../../constants');

class NotFoundError extends Error {
  status;
  data;

  constructor(message: any, data?: any) {
    super(message);
    this.status = HTTPStatusCodes.NOT_FOUND;
    this.message = message;
    this.name = "Not Found";
    this.data = data
  }
}

module.exports = {
  NotFoundError,
};
