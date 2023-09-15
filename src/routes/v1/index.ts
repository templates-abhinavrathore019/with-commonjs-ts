const express = require('express');

const { catRoutes } = require('./cats');
const { dogRoutes } = require('./dogs');

const router = express.Router();

router.use('/cats', catRoutes);
router.use('/dogs', dogRoutes);

module.exports = {
  v1Routes: router,
};
