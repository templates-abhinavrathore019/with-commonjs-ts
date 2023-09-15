const express = require('express');

const { heathCheckHandler } = require('./health');

const { v1Routes } = require('./v1');

const rootRouter = express.Router();

rootRouter.get('/health', heathCheckHandler);
rootRouter.use('/v/1', v1Routes);

module.exports = {
  rootRouter,
};
