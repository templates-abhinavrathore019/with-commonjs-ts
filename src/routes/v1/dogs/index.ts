const express = require('express');
const expressAsyncHandler = require('express-async-handler');

const {
  getPaginatedResults,
  validateQueryParams,
  validateParams,
} = require('../../../middlewares');

const {
  getDogByIdSchema,
  getDogsListSchema,
} = require('../../../validation/dog');

const { getDogsHandler } = require('../../../controllers/dog/get-dogs');
const { getDogByIdHandler } = require('../../../controllers/dog/get-dog-by-id');

const router = express.Router();

router.get(
  '/',
  validateQueryParams(getDogsListSchema),
  expressAsyncHandler(getDogsHandler),
  getPaginatedResults('dogs'),
);

router.get(
  '/:id',
  validateParams(getDogByIdSchema),
  expressAsyncHandler(getDogByIdHandler),
);

module.exports = {
  dogRoutes: router,
};
