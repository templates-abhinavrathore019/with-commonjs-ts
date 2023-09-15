import { Request, Response } from "express";

const { HTTPStatusCodes } = require('../../constants');

const heathCheckHandler = (req: Request, res: Response) => {

  res.status(HTTPStatusCodes.OK).send({
    time: new Date().getTime(),
  });
};

module.exports = {
  heathCheckHandler,
};
