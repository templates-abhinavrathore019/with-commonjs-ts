const express = require('express');
const expressAsyncHandler = require('express-async-handler');

const {
  getPaginatedResults,
  validateQueryParams,
  validateParams,
} = require('../../../middlewares');

const {
  getCatByIdSchema,
  getCatsListSchema,
} = require('../../../validation/cat');

const { getCatsHandler } = require('../../../controllers/cat/get-cats');
const { getCatByIdHandler } = require('../../../controllers/cat/get-cat-by-id');

const router = express.Router();

router.get(
  '/',
  validateQueryParams(getCatsListSchema),
  expressAsyncHandler(getCatsHandler),
  getPaginatedResults('cats'),
);

router.get(
  '/:id',
  validateParams(getCatByIdSchema),
  expressAsyncHandler(getCatByIdHandler),
);

module.exports = {
  catRoutes: router,
};
