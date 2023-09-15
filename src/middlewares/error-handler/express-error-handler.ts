import { NextFunction, Request, Response } from "express";

const { loggerConfig } = require('../../configs/logger');
const { ApiStatusCodes, HTTPStatusCodes } = require('../../constants');

const ExpressErrorHandler = async (error: Error | any, req: Request, res: Response, next: NextFunction) => {
  const httpStatus = error.status ?? HTTPStatusCodes.SERVER_ERROR;
  const data = error?.data ?? {};
  res.status(httpStatus).send({
    status: ApiStatusCodes.FAILED,
    message: error?.message,
    data: data,
    stack: loggerConfig.logLevel === 'debug' ? error.stack : undefined,
  });
};

module.exports = { ExpressErrorHandler };
