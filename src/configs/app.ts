const dotenv = require('dotenv');
const path = require('path');
const { logger } = require('../utils/logger');

dotenv.config({
  path: path.resolve(`.env.${process.env.NODE_ENV}`),
});

const nodeEnv = process.env.NODE_ENV || 'development';
const envName = process.env.ENV_NAME || 'development';

const protocol = process.env.PROTOCOL || 'http';
const hostName = process.env.HOST_NAME || 'localhost';
const port = process.env.PORT || 5000;

let host = '';

if (nodeEnv === 'production') {
  host = `${protocol}://${hostName}`;
} else {
  host = `${protocol}://${hostName}:${port}`;
}

logger.info('Loading: ', nodeEnv);

const appConfig = {
  nodeEnv,
  envName,
  protocol,
  hostName,
  port,
  host,
};

module.exports = {
  appConfig,
};
