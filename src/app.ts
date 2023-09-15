const express = require('express');
const { appConfig } = require('./configs/app');
const { connectMongo } = require('./database/mongodb');
const { rootRouter } = require('./routes');
const { logger } = require('./utils/logger');
const { ExpressErrorHandler } = require('./middlewares/error-handler/express-error-handler');

const app = express();
app.use(express.json());

app.use('/api', rootRouter);

// setting middleware for error handling.
// In case if the error is not handled in some routes, it will get captured here.
// eslint-disable-next-line no-unused-vars
app.use(ExpressErrorHandler);

app.listen(appConfig.port, async () => {
  try {
    await connectMongo();
    logger.info(`Listening at http://localhost:${appConfig.port}`);
  } catch (error) {
    logger.error('Cannot start application, error: ', error);
    throw error;
  }
});
