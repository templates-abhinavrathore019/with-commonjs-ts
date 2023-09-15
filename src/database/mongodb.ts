const mongoose = require('mongoose');
const { mongoConfig } = require('../configs/mongo');
const { logger } = require('../utils/logger');

const connectMongo = async () => {
  const {
    hostName,
    dbName,
    password,
    username,
  } = mongoConfig;

  const config: any = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName,
    user: username,
    pass: password,
  };

  config.directConnection = true;
  config.retryWrites = false;
  config.tlsAllowInvalidHostnames = true;

  try {
    logger.debug(`Connecting ${hostName}`);
    await mongoose.connect(hostName, config);
  } catch (error) {
    logger.debug('Database not configured');
  }
};

module.exports = {
  connectMongo,
};
